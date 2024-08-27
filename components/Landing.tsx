'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/photos/baby.webp',
  '/photos/child.webp',
  '/photos/flag.webp',
  '/photos/girls.webp',
  '/photos/kids.webp',
  '/photos/landscape.webp',
  '/photos/students.webp',
];

function formatNumberWithCommas(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function Landing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [count, setCount] = useState(500);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const countInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 1234) {
          return prevCount + 1;
        }
        clearInterval(countInterval);
        return 1234;
      });
    }, 5); // Adjust this value to change the speed of counting

    return () => {
      clearInterval(interval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <section className="mb-20">
      <div className="relative w-full max-w-full mx-auto h-96 overflow-hidden rounded-b-lg mb-5">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              className="object-cover object-center"
              src={src}
              alt={`Images of somali people ${index + 1}`}
              fill
              priority={index === 0}
            />
          </div>
        ))}

        <div className="bg-black/[0.5] sm:pt-20  pt-10 absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 ">
          <h1
            data-aos="fade-right"
            data-aos-delay="0"
            className="text-7xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#ffff] to-[#757272]"
          >
            {formatNumberWithCommas(count)}
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-delay="400"
            className="sm:text-3xl text-xl font-semibold mb-4"
          >
            Pledges have been made!
          </h2>

          <p
            data-aos="fade-right"
            data-aos-delay="800"
            className="sm:text-2xl text-lg sm:px-0 px-4"
          >
            Enter your region and email below to make a pledge.
          </p>
        </div>
      </div>

      <blockquote
        data-aos="fade-right"
        data-aos-delay="1200"
        className="text-center font-light text-neutral-500 sm:text-2xl text-base px-4"
      >
        "Your voice matters. Be a part of Somalia's future."
      </blockquote>
      <form
        data-aos="fade"
        data-aos-delay="1600"
        className="flex flex-col justify-center items-center sm:mt-10 mt-10"
      >
        <select className="select select-bordered w-full max-w-xs mb-5">
          <option value="Select Region">Select Region</option>
          <option value="Awdal (Borama)">Awdal (Borama)</option>
          <option value="Bakool (Hudur)">Bakool (Hudur)</option>
          <option value="Banadir (Mogadishu)">Banadir (Mogadishu)</option>
          <option value="Bari (Bosaso)">Bari (Bosaso)</option>
          <option value="Bay (Baidoa)">Bay (Baidoa)</option>
          <option value="Galgaduud (Dhusamareb)">Galgaduud (Dhusamareb)</option>
          <option value="Gedo (Garbahaarreey)">Gedo (Garbahaarreey)</option>
          <option value="Hiiraan (Beledweyn)">Hiiraan (Beledweyn)</option>
          <option value="Lower Juba (Kismayo)">Lower Juba (Kismayo)</option>
          <option value="Lower Shabelle (Merca)">Lower Shabelle (Merca)</option>
          <option value="Middle Juba (Bu'ale)">Middle Juba (Bu'ale)</option>
          <option value="Middle Shebelle (Jowhar)">
            Middle Shebelle (Jowhar)
          </option>
          <option value="Mudug (Galkayo)">Mudug (Galkayo)</option>
          <option value="Nugal (Garowe)">Nugal (Garowe)</option>
          <option value="Sanaag (Erigavo)">Sanaag (Erigavo)</option>
          <option value="Sool (Las Anod)">Sool (Las Anod)</option>
          <option value="Togdheer (Burao)">Togdheer (Burao)</option>
          <option value="Woqooyi Galbeed (Hargeisa)">
            Woqooyi Galbeed (Hargeisa)
          </option>
        </select>
        <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <button className="btn btn-outline w-full max-w-xs mt-5">Submit</button>
      </form>
    </section>
  );
}
