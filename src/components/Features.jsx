import { useState } from "react";
import { tabs } from "../constants/index";

const Features = () => {
    const [activeTab, setActiveTab] = useState(0);
    const current = tabs[activeTab];

    return (
        <section id="features" className="py-20 px-6">
            <div className="max-w-lg mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-[#242a45] mb-4">Features</h2>
                <p className="text-gray-400 leading-relaxed"> Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go. </p>
            </div>

            <div className="max-w-3xl mx-auto flex border-b border-gray-200 mb-16">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(index)}
                        className={`flex-1 pt-4 pb-10 text-center text-base relative cursor-pointer ${activeTab === index ? "text-[#242a45] font-medium" : "text-gray-400"}`} >
                        {tab.label}
                        {activeTab === index && <span className="absolute bottom-0 left-0 w-full h-1 bg-[#fa5959]"></span>}
                    </button>
                ))}
            </div>

            <div className="max-w-6xl mx-auto flex items-center gap-16">
                <div className="flex-1 relative">
                    <img src={current.image} alt={current.title} className="relative z-10 w-full max-w-120" />
                    <div className="absolute top-1/4 -left-1/3 w-[140%] h-[80%] min-h-75 bg-[#5267df] rounded-r-full z-0"></div>
                </div>

                <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#242a45] mb-4">{current.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">{current.description}</p>
                    <button className="bg-[#5267df] text-white px-6 py-3 rounded text-sm font-medium cursor-pointer">More Info</button>
                </div>
            </div>
        </section>
    );
};

export default Features;
