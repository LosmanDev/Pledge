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

const regions = [
  { name: 'Select Region', image: '/photos/assets/somalia.webp' },
  { name: 'Jubaland', image: '/photos/assets/jubaland.webp' },
  { name: 'Konfur Galbeed', image: '/photos/assets/konfur.webp' },
  { name: 'Benadir/Benaadir State', image: '/photos/assets/benaadir.webp' },
  { name: 'Hirshabelle', image: '/photos/assets/hirshabelle.webp' },
  { name: 'Galmudug', image: '/photos/assets/galmudug.webp' },
  { name: 'Puntland', image: '/photos/assets/puntland.webp' },
  { name: 'Somaliland', image: '/photos/assets/somaliland.webp' },
];

interface Region {
  name: string;
  image: string;
}

const CustomOption: React.FC<{ region: Region }> = ({ region }) => (
  <div className="flex items-center gap-2">
    <Image src={region.image} alt={region.name} width={20} height={20} />
    <span>{region.name}</span>
  </div>
);

export default function Landing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [count, setCount] = useState(500);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  const nameRegex = /^[A-Za-z]{4,}$/;
  const lastNameRegex = /^[A-Za-z]{4,}$/;
  const ageRegex = /^\d+$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameRegex.test(name)) {
      alert('First name must be more than 4 characters.');
      return;
    }
    if (!lastNameRegex.test(lastName)) {
      alert('Last name must be more than 4 characters.');
      return;
    }
    if (!ageRegex.test(age)) {
      alert('Age must be a number.');
      return;
    }
  };

  const formatNumberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    const countInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 1234) {
          return prevCount + 1;
        }
        clearInterval(countInterval);
        return 1234;
      });
    }, 4); // Adjust this value to change the speed of counting

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
        onSubmit={handleSubmit}
        data-aos="fade"
        data-aos-delay="1600"
        className="flex flex-col justify-center items-center sm:mt-10 mt-10"
      >
        <div className="flex items-center gap-2 mb-5">
          <Image
            src={selectedRegion.image}
            alt={selectedRegion.name}
            width={20}
            height={20}
          />
          <span>{selectedRegion.name}</span>
        </div>
        <div className="relative w-full max-w-xs mb-5">
          <select
            className="select select-bordered w-full max-w-xs font-bold appearance-none"
            value={selectedRegion.name}
            onChange={(e) =>
              setSelectedRegion(
                regions.find((r) => r.name === e.target.value) || regions[0],
              )
            }
          >
            {regions.map((region) => (
              <option key={region.name} value={region.name}>
                {region.name}
              </option>
            ))}
          </select>
        </div>

        <input
          type="text"
          className="input input-bordered flex items-center gap-2 w-full max-w-xs mb-5"
          placeholder="Email"
        />

        <input
          type="text"
          className="input input-bordered w-full max-w-xs mb-5"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="input input-bordered w-full max-w-xs mb-5"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="number"
          className="input input-bordered w-full max-w-xs mb-5"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button className="btn btn-outline w-full max-w-xs mt-5">Submit</button>
      </form>
    </section>
  );
}
