import { Comment, CommentData } from '../types/Comment';
import { Post } from '../types/Post';
import { User } from '../types/User';
import { client } from '../utils/fetchClient';

export const getUsers = () => {
  return client.get<User[]>('/users').then((userData: User[]) => userData);
};

export const getUsersPosts = (userId: number) => {
  return client
    .get<Post[]>(`/posts?userId=${userId}`)
    .then((posts: Post[]) => posts);
};

export const getPostsComments = (postId: number) => {
  return client
    .get<Comment[]>(`/comments?postId=${postId}`)
    .then((comments: Comment[]) => comments);
};

export const addComment = ({ postId, name, email, body }: CommentData) => {
  return client.post<Comment>('/comments', { postId, name, email, body });
};

export const deleteComment = (commentId: number) => {
  return client.delete(`/comments/${commentId}`);
};
