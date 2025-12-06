export interface Regulation {
  title: string;
  url: string;
}

export interface CycleData {
  id: number;
  title: string;
  description: string;
  content: string[]; // Array of paragraphs for narrative
  regulations: Regulation[];
}

export interface ScopeData {
  definition: string;
  sources: {
    title: string;
    description?: string;
    items?: string[];
  }[];
  principles: {
    title: string;
    description: string;
  }[];
}

export interface Comment {
  id: string;
  name: string;
  content: string;
  date: string;
  replies?: Comment[]; // Menambahkan dukungan untuk balasan komentar
}