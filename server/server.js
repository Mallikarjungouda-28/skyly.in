import dns from 'dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://mallikarjunagoudapatil864_db_user:Q0KRUDH92I3W9SE2@cluster0.bonpunb.mongodb.net/skyly?appName=Cluster0';

app.use(cors());
app.use(express.json());

let db;
const client = new MongoClient(MONGODB_URI);

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Cloud');
    db = client.db('skyly');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
}

// API Routes
app.get('/api/books', async (req, res) => {
  try {
    const docs = await db.collection('books').find().toArray();
    const booksData = {};
    docs.forEach(doc => {
      booksData[doc.subjectId] = {
        title: doc.title,
        badge: doc.badge,
        desc: doc.desc,
        books: doc.books
      };
    });
    res.json(booksData);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Error fetching books data' });
  }
});

app.get('/api/chapters', async (req, res) => {
  try {
    const docs = await db.collection('chapters').find().toArray();
    const chaptersData = {};
    docs.forEach(doc => {
      if (!chaptersData[doc.subjectId]) {
        chaptersData[doc.subjectId] = {};
      }
      chaptersData[doc.subjectId][doc.bookId] = doc.chapters;
    });
    res.json(chaptersData);
  } catch (error) {
    console.error('Error fetching chapters:', error);
    res.status(500).json({ error: 'Error fetching chapters data' });
  }
});

app.get('/api/questions', async (req, res) => {
  try {
    const docs = await db.collection('questions').find().toArray();
    const questionsData = {};
    docs.forEach(doc => {
      if (!questionsData[doc.subjectId]) {
        questionsData[doc.subjectId] = [];
      }
      const { _id, subjectId, ...question } = doc;
      questionsData[subjectId].push(question);
    });
    res.json(questionsData);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Error fetching questions data' });
  }
});

// Serve frontend build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
