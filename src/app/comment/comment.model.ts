export class Comment {
  username: string;
  parent_id: number;
  text: string;
  id: number;
  n_votes: number;
  contribution_id: number;
  time: string;
  children: Comment[];
}
