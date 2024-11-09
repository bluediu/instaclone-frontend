export interface IComment {
  id: number;
  created_at: string;
  comment: string;
  user: {
    id: number;
    username: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
  };
}

export interface IAddComment {
  comment: string;
  publication: string;
}
