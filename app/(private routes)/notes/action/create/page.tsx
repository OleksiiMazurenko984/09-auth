import NoteForm from '@/components/NoteForm/NoteForm';
import css from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NoteHub Create note',
  description:
    'Create a new note in NoteHub and keep your draft saved while you type',
  alternates: {
    canonical: `${process.env.NEXT_APP_URL}/notes/action/create`,
  },
  openGraph: {
    title: 'Create note',
    description:
      'Create a new note in NoteHub and keep your draft saved while you type',
    url: `${process.env.NEXT_APP_URL}/notes/action/create`,
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub create note page',
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
