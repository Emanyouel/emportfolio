const Skills = () => {
  return (
    <section id="skills" className="scroll-m-20 bg-white py-16">
    <div className='container mx-auto px-20 - flex flex-col items-center justify-center text-center
'>
      <div className='max-w-5xl '>
        <h2 className='sm:text-4xl lg:text-5xl font-bold text-gray-900'>Skills</h2>
         <div className="flex flex-row ">
            <div>
                <h3 className='mt-7 text-gray-900 text-2xl font-bold'>Technical Skills</h3>
                <ul className="mx-6">
                <li className='mx-6 mt-4 text-gray-700 text-lg sm:text-xl'>- JavaScript (ES6+)</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- React.js</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- Node.js</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- HTML5 & CSS3</li>
            </ul>
            </div>

            <div>
                <h3 className='mt-7 text-gray-900 text-2xl font-bold'>Soft Skills</h3>
                <ul className="mx-6">
                <li className='mx-6 mt-4 text-gray-700 text-lg sm:text-xl'>- Problem Solving</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- Communication</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- Team Collaboration</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- Time Management</li>
            </ul>
            </div>

            

             <div>
                <h3 className='mt-7 text-gray-900 text-2xl font-bold'>Tools</h3>
                <ul className="mx-6">
                <li className='mx-6 mt-4 text-gray-700 text-lg sm:text-xl'>- Git</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- Vscode</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- Figma</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- Wordpess</li>
            </ul>
            </div>

             <div>
                <h3 className='mt-7 text-gray-900 text-2xl font-bold'>Other</h3>
                <ul className="mx-6">
                <li className='mx-6 mt-4 text-gray-700 text-lg sm:text-xl'>- No-code Developer</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- Ui/Ux Designer</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- Digital Makreting</li>
            <li className='mt-4 text-gray-700 text-lg sm:text-xl'>- Video Editing</li>
            </ul>
            </div>


        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills
