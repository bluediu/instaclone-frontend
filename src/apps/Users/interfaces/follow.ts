export interface IsFollowing {
  is_following: boolean;
}

export interface IFollowCount {
  following_count: number;
  followers_count: number;
}

export interface IFollow {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
