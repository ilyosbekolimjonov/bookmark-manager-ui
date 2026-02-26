import logoWhite from "../assets/images/logo-white.svg";

import facebookIcon from "../assets/icons/facebook.svg";
import twitterIcon from "../assets/icons/twitter.svg";

const Footer = () => {
    return (
        <footer className="bg-[#242a45] py-8 px-6">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <a href="#hero">
                        <img src={logoWhite} alt="Bookmark" className="h-7" />
                    </a>
                    <nav className="flex items-center gap-10">
                        <a href="#features" className="text-sm tracking-widest text-white uppercase">Features</a>
                        <a href="#download" className="text-sm tracking-widest text-white uppercase">Download</a>
                        <a href="#contact" className="text-sm tracking-widest text-white uppercase">Contact</a>
                    </nav>
                </div>
                <div className="flex items-center gap-10">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={facebookIcon} alt="Facebook" className="w-6.5" />
                    </a>
                    <a href="https://x.com/" target="_blank">
                        <img src={twitterIcon} alt="Twitter" className="w-6.5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
