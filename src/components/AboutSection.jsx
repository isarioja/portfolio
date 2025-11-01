import { useRef, useState } from 'react'
import womanAvatarSvg from '../assets/woman_avatar.svg'
import TitleSection from './TitleSection';

export default function AboutSection() {
  const containerRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 12; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 12;
    setRotateX(rotateX);
    setRotateY(rotateY);
  }

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  }

  return (
    <section className="container grid md:grid-cols-[2fr_1fr] mt-20 mb-20 gap-y-10 sm:gap-x-4">
      <div className="tracking-widest">
        <TitleSection title="A Bit About" subtitle="Me"/>

        <p className='mb-5 font-semibold text-lg text-neutral'>
          I’m a Full Stack Developer who loves turning ideas into clean, functional, and engaging web applications. Over time, I’ve explored various technologies and discovered my passion for creating smooth, responsive user experiences and reliable backend systems.
        </p>
        <p className='mb-5 font-semibold text-lg text-neutral'>
          I’m proficient in <span className='text-fuchsia-600 font-bold'>HTML, CSS, JavaScript, React, and Node.js</span> — and I enjoy working on both the frontend and backend to bring projects to life from start to finish.
        </p>
        <p className='mb-5 font-semibold text-lg text-neutral'>
          My main interests include building <span className='text-fuchsia-600 font-bold'>modern web applications, enhancing user interfaces, and developing scalable solutions</span> that make a real impact.
        </p>
        <p className='mb-5 font-semibold text-lg text-neutral'>
          Whenever possible, I love working with React and Node.js to craft fast, dynamic, and intuitive products.
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div ref={containerRef}
          onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
          className='perspective-[1000px]'>
          <img src={womanAvatarSvg} alt="avatar"
              className={`h-full w-full object-contain max-w-70 transition-all duration-300 
              ease-[cubic-bezier(0.03,0.98,0.52,0.99)]`}
              style={{transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1,1,1)`}}
             />
        </div>

      </div>
    </section>
  )
}
