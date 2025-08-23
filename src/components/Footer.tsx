export default function Footer() {
  return (
    <footer>
      <div className="mb-10 flex min-h-[100px] flex-col justify-center gap-6 text-center font-mono text-lg text-gray-300">
        <div className="flex justify-center gap-10 p-4 text-white">
          <p>
            &copy; {new Date().getFullYear()} Srayan Bhattacharya. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
