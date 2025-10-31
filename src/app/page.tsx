import { AboutUs } from '@/components/AboutUs/AboutUs';
import { Approach } from '@/components/Approach/Approach';
import { Contact } from '@/components/Contact/Contact';
import { Hero } from '@/components/Hero/Hero';
import { Services } from '@/components/Services/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Approach />
      <Contact />
    </main>
  );
}
