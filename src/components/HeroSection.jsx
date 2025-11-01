import { useEffect, useState } from 'react'
import imgHero from '../assets/hero1.svg'

const phrases = [
  'Full-Stack Developer',
  'React & Node.js Developer',
  '10+ Years Building Software Solutions',
  'Agile & Team Collaboration'
];

export default function HeroSection() {
    const [text, setText] = useState('');
    const [indexPhrase, setIndexPhrase] = useState(0);
    const [indexLetter, setIndexLetter] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150); // typing speed

    useEffect(() => {
        const currentPhrase = phrases[indexPhrase];

        // When phrase is fully written, pause before deleting
        if (!isDeleting && indexLetter === currentPhrase.length) {
            const timeOutDeleting = setTimeout(() => setIsDeleting(true), 1000);
            return () => clearTimeout(timeOutDeleting);
        }

        //When deleting is finished
        if (isDeleting && indexLetter === 0) {
            setIsDeleting(false);
            setIndexPhrase(prev => (prev + 1) % phrases.length);
            return;
        }

        const timeOut = setTimeout(() => {
            setIndexLetter(prev => prev + (isDeleting ? -1 : 1));
        }, speed);

        return () => clearTimeout(timeOut);
    }, [indexLetter, isDeleting])

    useEffect(() => {
        setSpeed(isDeleting ? 60 : 180);
    }, [isDeleting]);

    useEffect(() => {
        const currentPhrase = phrases[indexPhrase];
        setText(currentPhrase.substring(0, indexLetter));
        console.log(indexLetter);
    }, [indexLetter]);

    return (
        <section className="container-hero grid md:grid-cols-[2fr_1fr] pt-20 pb-30 min-h-screen
            items-center"> 
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 lg:mb-6 tracking-wider text-neutral">
                    Hi There! <span class="inline-block sm:text-5xl origin-[70%_100%] animate-wave">🖐</span>
                </h2>
                <h3 className="text-3xl sm:text-4xl font-bold mb-16 tracking-wider text-neutral">I'M <span className="text-fuchsia-600">ISABEL RIOJA</span></h3>
                <h2 className="min-h-24 text-xl sm:text-3xl lg:text-4xl font-bold tracking-wider 
                               leading-7 md:leading-12 text-neutral">
                    {text}
                    <span className="animate-pulse">|</span>
                </h2>
            </div>
            <div className="flex justify-center items-center">
                <img src={imgHero} alt="software developer" className="w-full sm:w-1/2 md:w-full" />
            </div>
        </section>
    )
}
