
export interface User {
  uid: string;
  displayName: string;
  email: string;
  diamonds: number;
  avatar: string;
  bio: string;
  lastDailyClaim?: string; // ISO String
}

export interface Mission {
  id: string;
  title: string;
  reward: number;
  completed: boolean;
  progress: number;
  maxProgress: number;
}

export interface Circle {
  id: string;
  name: string;
  members: number;
  image: string;
  category: string;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'daily' | 'mission' | 'purchase';
  detail: string;
  timestamp: string;
}
