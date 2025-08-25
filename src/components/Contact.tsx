import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { toast } from "react-toastify";

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const encoded = new URLSearchParams(
      Array.from(formData.entries()) as [string, string][],
    ).toString();

    try {
      await toast.promise(
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encoded,
        }),
        {
          pending: "Sending your message...",
          success: "Message sent successfully!",
          error: "Failed to send. Please try again.",
        },
      );

      form.reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center py-20 font-mono"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-center text-4xl font-extrabold text-transparent">
          Contact Me
        </h2>

        <p className="mx-auto mb-10 max-w-4xl text-center text-lg text-gray-300">
          I am open to professional opportunities, collaborations, and
          inquiries. Please feel free to reach out, and I will respond at the
          earliest convenience.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-xl font-semibold text-white">
              Contact Information
            </h3>

            <div className="mb-12 space-y-6">
              <div className="flex items-center gap-4">
                <MdEmail className="text-3xl text-teal-400" />
                <p className="text-lg text-gray-200">
                  bhattacharyasrayan@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-4">
                <MdPhone className="text-3xl text-teal-400" />
                <p className="text-lg text-gray-200">+91-8647871895</p>
              </div>

              <div className="flex items-center gap-4">
                <MdLocationOn className="text-3xl text-teal-400" />
                <p className="text-lg text-gray-200">Kolkata, WB, India</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <a
                href="https://github.com/SrayanBhattacharya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="text-4xl text-white transition-transform duration-300 hover:scale-110 hover:text-teal-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/srayan-bhattacharya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="text-4xl text-white transition-transform duration-300 hover:scale-110 hover:text-teal-400" />
              </a>
            </div>
          </div>

          <div className="group mb-8 flex flex-col overflow-hidden">
            <h3 className="mb-6 flex items-center justify-center text-xl font-semibold text-white">
              Send a Message
            </h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-gray-600 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-600 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full rounded-lg border border-gray-600 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="cursor w-full cursor-pointer rounded-lg bg-gradient-to-r from-teal-500 to-indigo-600 px-4 py-2 font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
