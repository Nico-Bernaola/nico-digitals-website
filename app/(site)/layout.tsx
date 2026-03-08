import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '68px' }}>
        {children}
      </div>
      <Footer />
    </>
  );
}