export interface FeedbackCreateDate {
  type: string;
  comment: string;
  screenshot?: string;  
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateDate) => Promise<void>;
}