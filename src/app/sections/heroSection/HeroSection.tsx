import { Github, Linkedin} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
      
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-4xl font-bold leading-snug">
          Hello,
          <br />
          This is <span className="text-pink-400">TAHIR PATHAN</span>, I&apos;m a  
          <br />
          Professional <span className="text-green-300">Frontend Developer.</span>
        </h2>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-pink-400">
          <a href="https://github.com/Tahir2016" target="_blank" rel="noopener noreferrer">
            <Github size={28} className="hover:text-white cursor-pointer transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/tahir-pathan-b74453258/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={28} className="hover:text-white cursor-pointer transition-colors duration-300" />
          </a>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 pt-2">
          <a href="#contact" className="border border-pink-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-500 hover:text-black transition inline-block text-center">
            CONTACT ME
          </a>

          <a href="/Tahir_Pathans_Resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-pink-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-500 hover:text-black transition inline-block text-center">
            GET RESUME ⬇
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="rounded-xl border border-slate-700 bg-[#0f1629] p-6 shadow-lg">
        <pre className="text-sm leading-6 text-yellow-300">
{`const developer = {
  name: "Tahir Pathan",
  skills: ["React", "Next.js", "TypeScript", "Tailwind"],
  hardWorker: true,
  problemSolver: true,
  quickLearner: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 4
    );
  }
};`}
        </pre>
      </div>
    </section>
  );
}
