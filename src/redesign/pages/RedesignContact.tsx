import { useContactInquiry } from '../hooks/useContactInquiry';
import ContactChannels from '../components/contact/ContactChannels';
import ContactInquiry from '../components/contact/ContactInquiry';
import ContactSupport from '../components/contact/ContactSupport';
import PageHero from '../components/PageHero';
import ShareCTA from '../components/ShareCTA';

export default function RedesignContact() {
  const { selectedSubject, setSelectedSubject, scrollToFormWithSubject, messageText, setMessageText } = useContactInquiry();

  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      {/* 1. Subpage Hero */}
      <PageHero
        badge="Kontakt &amp; Beratung"
        title="Sich zu informieren, ist bereits"
        highlight="eine weitere Hilfe."
        description="Wir haben stets ein offenes Ohr für Ihre Anliegen, Fragen zu unseren Angeboten oder Kooperationswünsche. Nehmen Sie direkt Kontakt zu unserem Team in Castrop-Rauxel und Dortmund auf."
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
