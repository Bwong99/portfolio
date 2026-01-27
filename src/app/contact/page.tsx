import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Bradley Wong for project inquiries, collaborations, or just to say hello.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <PageHeader 
          title="Get In Touch" 
          subtitle="Have a project in mind or just want to connect? Let's talk!"
        />
        <ContactForm />
      </div>
    </PageTransition>
  );
}
