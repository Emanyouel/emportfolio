import { BookAIcon } from 'lucide-react';
import Emman from '../assets/Emman.jpg';

const Hero = () => {
  return (
    <section id="home" className="scroll-m-20 bg-sky-50 py-16">
    <div className='container mx-auto px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
      <div className='max-w-xl '>
        <h1 className='sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight'>Welcome to <span className='text-sky-600'>Emmanuel's Portfolio</span></h1>
        <p className='mt-6 text-gray-700 text-lg sm:text-xl'>Discover my projects, skills, and experience as a passionate developer. Explore my work and get in touch!</p>
        <a href="#projects" className='mt-6 inline-block bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition text-lg font-medium'>View My Work
            <BookAIcon className='w-5 h-5 inline-block ml-2' />
        </a>
      </div>
        <div className='flex justify-center'>
            <img src={Emman} alt="Hero Image" className='w-90 max-w-md lg:max-w-lg rounded-4xl'/>
        </div>
    </div>
    </section>
  );
};

export default Hero
