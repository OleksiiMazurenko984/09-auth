import { nextServer } from './api';
import { cookies } from 'next/headers';
import { Note } from '@/types/note';
import { User } from '@/types/user';

interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

const getServerCookieHeader = async () => {
  const cookieStore = await cookies();
  return cookieStore.toString();
};

export const fetchNotes = async (
  page: number,
  perPage: number,
  search?: string,
  tag?: string
): Promise<NotesResponse> => {
  const cookieHeader = await getServerCookieHeader();
  const { data } = await nextServer.get<NotesResponse>('/notes', {
    params: { page, perPage, search, tag },
    headers: { Cookie: cookieHeader },
  });

  return data;
};

export const fetchNoteById = async (noteId: Note['id']): Promise<Note> => {
  const cookieHeader = await getServerCookieHeader();
  const { data } = await nextServer.get<Note>(`/notes/${noteId}`, {
    headers: { Cookie: cookieHeader },
  });

  return data;
};

export const getMe = async (): Promise<User> => {
  const cookieHeader = await getServerCookieHeader();
  const { data } = await nextServer.get<User>('/users/me', {
    headers: { Cookie: cookieHeader },
  });

  return data;
};

export const checkSession = async (cookieHeader?: string) => {
  const { data, headers } = await nextServer.get<{ success: boolean }>(
    '/auth/session',
    {
      headers: {
        Cookie: cookieHeader ?? (await getServerCookieHeader()),
      },
    }
  );

  return { data, headers };
};
