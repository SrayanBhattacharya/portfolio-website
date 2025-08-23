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
      </div>
    </section>
  );
}
