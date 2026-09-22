import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Logistics } from '@/components/Logistics';
import { Partners } from '@/components/Partners';
import { PhotoBand } from '@/components/PhotoBand';
import { ProductGroups } from '@/components/ProductGroups';
import { Sectors } from '@/components/Sectors';
import { WhatWeDo } from '@/components/WhatWeDo';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { WhyUs } from '@/components/WhyUs';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="icerik">
        <Hero />
        <WhatWeDo />
        <ProductGroups />
        <PhotoBand />
        <Sectors />
        <Partners />
        <WhyUs />
        <Logistics />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
