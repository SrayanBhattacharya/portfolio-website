import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Contact() {
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

            <div className="space-y-6">
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
          </div>
          <div className="group mb-8 flex flex-col overflow-hidden">
            <h3 className="mb-6 flex items-center justify-center text-xl font-semibold text-white">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-gray-300"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-gray-600 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="mb-1 block text-gray-300"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-600 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="mb-1 block text-gray-300"></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full rounded-lg border border-gray-600 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 focus:outline-none"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-teal-600"
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
