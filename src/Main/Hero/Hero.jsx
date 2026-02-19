import "./Hero.css"
const heroImg = process.env.PUBLIC_URL + "./images/tablet.svg"

export default function Hero() {
    return (
        <div className="hero">
            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">A Simple Bookmark Manager</h1>
                    <p className="hero__description">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="hero__button-wrapper">
                        <button className="button button--big">Get it on Chrome</button>
                        <button className="button button--big button--big-light">Get it on Firefox</button>
                    </div>
                </div>

                <img className="hero__img" src={heroImg} alt="" aria-label="hidden" width="578" height="385"/>
            </div>
        </div>
    )
}