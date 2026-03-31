import { nextServer } from './api';
import { Note, NoteData } from '@/types/note';
import { User } from '@/types/user';

interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

interface UserData {
  email: string;
  password: string;
}

interface ChangeUserData {
  username?: string;
}

export const fetchNotes = async (
  page: number,
  perPage: number,
  search?: string,
  tag?: string
): Promise<NotesResponse> => {
  const { data } = await nextServer.get<NotesResponse>('/notes', {
    params: {
      page,
      perPage,
      search,
      tag,
    },
  });

  return data;
};

export const createNote = async (noteData: NoteData) => {
  const { data } = await nextServer.post<Note>('/notes', noteData);
  return data;
};

export const deleteNote = async (noteId: Note['id']) => {
  const { data } = await nextServer.delete<Note>(`/notes/${noteId}`);
  return data;
};

export const fetchNoteById = async (noteId: Note['id']) => {
  const { data } = await nextServer.get<Note>(`/notes/${noteId}`);
  return data;
};

export const register = async (userData: UserData): Promise<User> => {
  const { data } = await nextServer.post<User>('/auth/register', userData);
  return data;
};

export const login = async (userData: UserData): Promise<User> => {
  const { data } = await nextServer.post<User>('/auth/login', userData);
  return data;
};

export const logout = async () => {
  const { data } = await nextServer.post('/auth/logout');
  return data;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>('/users/me');
  return data;
};

export const updateMe = async (updateData: ChangeUserData): Promise<User> => {
  const { data } = await nextServer.patch<User>('/users/me', updateData);
  return data;
};

export const refresh = async () => {
  const { data } = await nextServer.get('/auth/session');
  return data;
};

export const checkSession = async () => {
  const { data } = await nextServer.get('/auth/session');
  return data;
};
