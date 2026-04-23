const Skills = () => {
  return (
    <section id="skills" className="scroll-m-20 bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Skills
          </h2>
          <div className="grid gap-8 mt-10 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[2rem] bg-sky-50 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">
                Technical Skills
              </h3>
              <ul className="mt-5 space-y-3 text-gray-700 text-base sm:text-lg">
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>React Native</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Soft Skills</h3>
              <ul className="mt-5 space-y-3 text-gray-700 text-base sm:text-lg">
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-sky-50 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Tools</h3>
              <ul className="mt-5 space-y-3 text-gray-700 text-base sm:text-lg">
                <li>Git</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Other</h3>
              <ul className="mt-5 space-y-3 text-gray-700 text-base sm:text-lg">
                <li>No-code Developer</li>
                <li>UI/UX Designer</li>
                <li>Digital Marketing</li>
                <li>Video Editing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
