'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Landing from '@/components/Landing';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      mirror: false,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Landing />
      </div>
      <Footer />
    </main>
  );
}
