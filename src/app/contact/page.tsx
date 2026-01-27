import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Bradley Wong for project inquiries, collaborations, or just to say hello.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <ContactForm />
      </div>
    </PageTransition>
  );
}
