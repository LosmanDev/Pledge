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
        if (prevCount < 1000) {
          return prevCount + 1;
        }
        clearInterval(countInterval);
        return 1000;
      });
    }, 5); // Adjust this value to change the speed of counting

    return () => {
      clearInterval(interval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <section>
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

        <div className="bg-black/[0.5] pt-20 absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 ">
          <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ffff] to-[#757272]">
            {formatNumberWithCommas(count)}
          </h1>
          <h2 className="sm:text-3xl text-xl font-semibold mb-4">
            Pledges have been made!
          </h2>

          <p className="sm:text-2xl text-lg sm:px-0 px-4">
            Enter your region and email below to make a pledge.
          </p>
        </div>
      </div>
      <form className="flex flex-col justify-center items-center sm:mt-10 mt-20">
        <select className="select select-bordered w-full max-w-xs mb-5">
          <option disabled selected>
            Select Region
          </option>
          <option>Awdal (Borama)</option>
          <option>Bakool (Hudur)</option>
          <option>Banadir (Mogadishu)</option>
          <option>Bari (Bosaso)</option>
          <option>Bay (Baidoa)</option>
          <option>Galgaduud (Dhusamareb)</option>
          <option>Gedo (Garbahaarreey)</option>
          <option>Hiiraan (Beledweyn)</option>
          <option>Lower Juba (Kismayo)</option>
          <option>Lower Shabelle (Merca)</option>
          <option>Middle Juba (Bu'ale)</option>
          <option>Middle Shebelle (Jowhar)</option>
          <option>Mudug (Galkayo)</option>
          <option>Nugal (Garowe)</option>
          <option>Sanaag (Erigavo)</option>
          <option>Sool (Las Anod)</option>
          <option>Togdheer (Burao)</option>
          <option>Woqooyi Galbeed (Hargeisa)</option>
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
        <button className="btn btn-bordered w-full max-w-xs mt-5">
          Submit
        </button>
      </form>
    </section>
  );
}
