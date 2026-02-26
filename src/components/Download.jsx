import { cards } from "../constants";

const Download = () => {
    return (
        <section id="download" className="py-20 px-6">
            <div className="max-w-lg mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-[#242a45] mb-4">
                    Download the extension
                </h2>
                <p className="text-gray-400 leading-relaxed">
                    We've got more browsers in the pipeline. Please do let us know if
                    you've got a favourite you'd like us to prioritize.
                </p>
            </div>

            <div className="max-w-4xl mx-auto flex items-start gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex-1 flex flex-col items-center text-center rounded-xl shadow-lg pt-12 pb-8 px-6"
                        style={{ marginTop: `${index * 40}px` }} >
                        <img src={card.logo} alt={card.name} className="w-24 h-24 mb-6" />
                        <h3 className="text-xl font-bold text-[#242a45] mb-1">
                            {card.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-6">{card.version}</p>

                        <div className="w-full border-b-4 border-dotted border-gray-200 mb-6"></div>

                        <button className="w-full bg-[#5267df] text-white py-3 rounded text-sm font-medium cursor-pointer">
                            Add & Install Extension
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Download;
