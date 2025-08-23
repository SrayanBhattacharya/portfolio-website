import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section
      id="#home"
      className="flex min-h-screen flex-col items-center justify-center gap-9 lg:flex-row-reverse lg:gap-15"
    >
      <div className="z-10 text-center font-mono">
        <h1 className="lg:max-w-w[500px] leading-right mb-6 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text px-1 text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl">
          I am Srayan Bhattacharya
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300">
          Front-End developer in training, expanding into Back-End to become a
          Full-Stack Developer. Passionate about creating responsive, scalable
          web applications.
        </p>
        <div className="flex items-center justify-center space-x-8">
          <a
            href="#contact"
            className="hover:transition-y-1 relative flex flex-row overflow-hidden rounded bg-gradient-to-r from-teal-500 to-indigo-600 px-6 py-3 font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Contact Me
          </a>
          <a
            href="./RESUME.pdf"
            target="_blank"
            className="hover:transition-y-1 relative flex flex-row overflow-hidden rounded bg-gradient-to-r from-teal-500 to-indigo-600 px-6 py-3 font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            <p>Resume</p>
            <span className="ml-3 h-5 text-2xl text-white">
              <FiDownload />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
