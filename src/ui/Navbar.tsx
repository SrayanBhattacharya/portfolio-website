export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-40 bg[rgba(10,10,10,0.8)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center font-mono h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-gray-300">
                        Srayan<span className="bg-gradient-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Bhattacharya</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}