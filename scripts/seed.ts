import dns from 'dns';
import { MongoClient } from 'mongodb';
import { booksData, chaptersData } from '../src/data/books';
import { questionsData } from '../src/data/questions';

dns.setServers(['8.8.8.8', '1.1.1.1']);

const MONGODB_URI = 'mongodb+srv://mallikarjunagoudapatil864_db_user:Q0KRUDH92I3W9SE2@cluster0.bonpunb.mongodb.net/skyly?appName=Cluster0';

async function seed() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('skyly');

    // 1. Seed Books
    const booksCollection = db.collection('books');
    await booksCollection.deleteMany({});
    const booksDocs = Object.entries(booksData).map(([subjectId, data]) => ({
      subjectId,
      title: data.title,
      badge: data.badge,
      desc: data.desc,
      books: data.books
    }));
    await booksCollection.insertMany(booksDocs);
    console.log('Seeded books collection');

    // 2. Seed Chapters
    const chaptersCollection = db.collection('chapters');
    await chaptersCollection.deleteMany({});
    const chaptersDocs: any[] = [];
    Object.entries(chaptersData).forEach(([subjectId, booksMap]) => {
      Object.entries(booksMap).forEach(([bookId, chapters]) => {
        chaptersDocs.push({
          subjectId,
          bookId,
          chapters
        });
      });
    });
    await chaptersCollection.insertMany(chaptersDocs);
    console.log('Seeded chapters collection');

    // 3. Seed Questions
    const questionsCollection = db.collection('questions');
    await questionsCollection.deleteMany({});
    const questionsDocs: any[] = [];
    Object.entries(questionsData).forEach(([subjectId, questions]) => {
      questions.forEach((q) => {
        questionsDocs.push({
          subjectId,
          ...q
        });
      });
    });
    
    await questionsCollection.insertMany(questionsDocs);
    console.log(`Seeded questions collection (${questionsDocs.length} questions)`);

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seed();
