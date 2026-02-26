import { useState } from "react";
import { faqData } from "../constants";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-6">
            <div className="max-w-lg mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-[#242a45] mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-400 leading-relaxed">
                    Here are some of our FAQs. If you have any other questions you'd like
                    answered please feel free to email us.
                </p>
            </div>

            <div className="max-w-2xl mx-auto">
                {faqData.map((item, index) => (
                    <div key={index} className="border-t border-gray-200">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex items-center justify-between py-5 text-left cursor-pointer" >
                            <span
                                className={`text-lg ${openIndex === index ? "text-[#fa5959]" : "text-[#242a45]"}`} >
                                {item.question}
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={openIndex === index ? "#fa5959" : "#5267df"}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        {openIndex === index && (
                            <p className="text-gray-400 leading-relaxed pb-5">
                                {item.answer}
                            </p>
                        )}
                        <div className="border-b border-gray-200"></div>
                    </div>
                ))}

                <div className="text-center mt-12">
                    <button className="bg-[#5267df] text-white px-6 py-3 rounded text-sm font-medium cursor-pointer">
                        More Info
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
