import heroImg from "../assets/images/hero-tablet.png";

export default function Hero() {
    return (
        <section id="hero" className="pt-15 pb-30 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto flex items-center gap-16">
                <div className="flex-1">
                    <h1 className="text-5xl font-bold text-[#242a45] leading-tight mb-6"> A Simple Bookmark Manager </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8"> A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free. </p>
                    <div className="flex gap-4">
                        <button className="bg-[#5267df] text-white px-6 py-4 rounded text-sm font-medium cursor-pointer"> Get it on Chrome </button>
                        <button className="bg-[#f7f7f7] text-[#242a45] px-6 py-4 rounded text-sm font-medium border border-gray-200 cursor-pointer"> Get it on Firefox </button>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <img src={heroImg} alt="Bookmark Manager" className="relative z-10 w-full" />
                    <div className="absolute border top-1/3 -right-40 w-full h-[90%] bg-[#5267df] rounded-l-full z-0"></div>
                </div>
            </div>
        </section>
    );
}