import logo from "../assets/images/logo.svg";

export default function Header() {
    return (
        <header className="py-8 px-6">
            <div className="max-w-6xl mx-auto flex items-center justify-between">

                <a href="#hero" className="flex items-center gap-3">
                    <img src={logo} alt="Bookmark" className="h-7" />
                </a>

                <nav className="flex items-center gap-10">
                    <a href="#features" className="text-sm font-medium tracking-widest text-[#242a45] uppercase">Features</a>
                    <a href="#download" className="text-sm font-medium tracking-widest text-[#242a45] uppercase">Download</a>
                    <a href="#faq" className="text-sm font-medium tracking-widest text-[#242a45] uppercase">FAQ</a>
                    <a href="#contact" className="text-sm font-medium tracking-widest text-[#242a45] uppercase">Contact</a>
                    <a href="#" className="bg-[#fa5959] text-white text-sm tracking-widest uppercase px-8 py-3 rounded">Login</a>
                </nav>
            </div>
        </header>
    );
}
