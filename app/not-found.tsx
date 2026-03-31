import { Metadata } from 'next';
import css from './page.module.css';

export const metadata: Metadata = {
  title: 'NoteHub not found',
  description: 'Sorry this page was not found on site',
  alternates: {
    canonical: `${process.env.NEXT_APP_URL}`,
  },
  openGraph: {
    title: 'NoteHub not found',
    description: 'Sorry this page was not found on site',
    url: `${process.env.NEXT_APP_URL}`,
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub not found',
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
