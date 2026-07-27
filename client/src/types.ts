export interface Book {
  id: string;
  name: string;
  desc: string;
  chaptersCount: number;
  bg: string;
}

export interface Chapter {
  id: string;
  name: string;
  questionsCount: number;
}

export interface SubjectBooks {
  title: string;
  badge: string;
  desc: string;
  books: Book[];
}

export interface Question {
  id: number;
  type: string;
  question: string;
  options: string[];
  correct: number;
  book?: string;
  chapter?: string;
  explanation?: string;
}
