import { useTranslation } from 'react-i18next';
import PageMeta from '../../i18n/PageMeta';
import { useContactInquiry } from '../hooks/useContactInquiry';
import ContactChannels from '../components/contact/ContactChannels';
import ContactInquiry from '../components/contact/ContactInquiry';
import ContactSupport from '../components/contact/ContactSupport';
import PageHero from '../components/PageHero';
import ShareCTA from '../components/ShareCTA';

export default function RedesignContact() {
  const {
    selectedSubject,
    setSelectedSubject,
    scrollToFormWithSubject,
    messageText,
    setMessageText,
  } = useContactInquiry();
  const { t } = useTranslation('contact');

  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      <PageMeta routeId="contact" />
      {/* 1. Subpage Hero */}
      <PageHero
        badge={t('hero.badge')}
        title={t('hero.title')}
        highlight={t('hero.highlight')}
        description={t('hero.description')}
      />

      {/* 2. Three Main Contact Channels */}
      <ContactChannels />

      {/* 3. Interactive Contact Form & Inquiries */}
      <ContactInquiry
        selectedSubject={selectedSubject}
        onSubjectChange={setSelectedSubject}
        messageText={messageText}
        onMessageChange={setMessageText}
      />

      {/* 4. Spenden & Mitglied werden (Explicit Anchors #spenden & #mitglied) */}
      <ContactSupport scrollToFormWithSubject={scrollToFormWithSubject} />

      {/* 5. Reusable Share CTA */}
      <ShareCTA />
    </div>
  );
}
