export interface Article {
  id: string;
  category: string;
  title: string;
  subheading: string;
  author: {
    name: string;
    avatar: string;
    title: string;
    bio: string;
  };
  publishDate: string;
  image: string;
  body: string[];
}

export interface RecommendedItem {
  id: string;
  title: string;
  image: string;
  type: 'video' | 'article';
  duration?: string;
  views?: string;
  category?: string;
}

export interface ReactionState {
  like: number;
  flag: number;
  scale: number;
  angry: number;
  heart: number;
  laugh: number;
  sad: number;
  wow: number;
}
