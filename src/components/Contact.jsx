const Contact = () => {
    return (
        <section id="contact" className="bg-[#5267df] py-20 px-6">
            <div className="max-w-md mx-auto text-center">
                <p className="text-sm tracking-[0.3em] text-white uppercase mb-6"> 35,000+ Already Joined </p>
                <h2 className="text-3xl font-bold text-white leading-snug mb-8"> Stay up-to-date with what we're doing </h2>
                
                <div className="flex gap-4 justify-center">
                    <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-4 rounded text-sm border bg-white placeholder:font-normal placeholder:text-gray-400" />
                    <button className="bg-[#fa5959] text-white px-8 py-3 rounded text-sm font-medium tracking-widest cursor-pointer"> Contact Us </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
