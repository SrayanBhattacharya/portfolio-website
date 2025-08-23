import { useEffect, useState } from "react";

type LoadingScreenProps = { onComplete: () => void };

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [text, setText] = useState("");

  const fullText = "Glad to have you here!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-black text-gray-100">
      <div className="relative h-[3px] w-[300px] overflow-hidden rounded bg-gray-800">
        <div className="animate-loading-bar h-full w-[40%] bg-blue-500 shadow-[0_0_15px_#4179e3]"></div>
      </div>

      <div className="font-mono text-2xl font-semibold">
        {text}
        <span className="animate-blink ml-1 text-2xl font-bold">|</span>
      </div>

      <div className="relative h-[3px] w-[300px] overflow-hidden rounded bg-gray-800">
        <div className="animate-loading-bar h-full w-[40%] bg-blue-500 shadow-[0_0_15px_#4179e3]"></div>
      </div>
    </div>
  );
}
