import "./Future.css"
const bokmarking = process.env.PUBLIC_URL + "./images/slide/simple-bokmarking.svg"
const searching = process.env.PUBLIC_URL + "./images/slide/speedy-searching.svg"
const sharing = process.env.PUBLIC_URL + "./images/slide/easy-sharing.svg"

export default function Future() {
    return (
        <section className="index-features">
            <div className="index-features__container container">
                <div className="content index-features__content">
                    <h2 className="content__title">Features</h2>
                    <div className="content__description">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</div>
                </div>


                <div className="tabs">
                    <ul className="tabs__list">
                        <li className="tabs__item tabs__item--active js-tabs__item">
                            <a className="tabs__link js-tabs__link" href="#simple-bookmarking">
                                Simple bookmarking
                            </a>
                        </li>
                        <li className="tabs__item js-tabs__item">
                            <a className="tabs__link js-tabs__link" href="#speedy-searching">
                                Speedy searching
                            </a>
                        </li>
                        <li className="tabs__item js-tabs__item">
                            <a className="tabs__link js-tabs__link" href="#easy-sharing">
                                Easy sharing
                            </a>
                        </li>
                    </ul>


                    <section className="tab-panels">
                        <h2 className="visually-hidden">Feature's TabLink</h2>

                        <div className="tab-panels__tab-panel js-tab-panel tab-panels__tab-panel--active" id="simple-bookmarking">
                            <div className="tab-panels__tab-panel-inner">
                                <img className="tab-panels__tab-panel-img tab-panels__tab-panel-img-simple-bookmarking" src={bokmarking} alt="Tablet" width="536" height="346"/>
                                    <div className="tab-panels__tab-panel-content">
                                        <h2 className="tab-panels__tab-panel-content-title">Bookmark in one click</h2>
                                        <p className="tab-panels__tab-panel-content-description">Organize your bookmarks however you like. Our
                                            simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                                        </p>
                                        <button className="button button--blue" type="button">More info</button>
                                    </div>
                            </div>
                        </div>

                        <div className="tab-panels__tab-panel js-tab-panel" id="speedy-searching">
                            <div className="tab-panels__tab-panel-inner">
                                <img className="tab-panels__tab-panel-img tab-panels__tab-panel-img-speedy-searching" src={searching} alt="Speedy searching's img" width="468" height="393"/>
                                    <div className="tab-panels__tab-panel-content">
                                        <h2 className="tab-panels__tab-panel-content-title">Intelligent search</h2>
                                        <p className="tab-panels__tab-panel-content-description">Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                                        <button className="button button--blue" type="button">More info</button>
                                    </div>
                            </div>
                        </div>

                        <div className="tab-panels__tab-panel js-tab-panel" id="easy-sharing">
                            <div className="tab-panels__tab-panel-inner">
                                <img className="tab-panels__tab-panel-img tab-panels__tab-panel-img-easy-sharing" src={sharing} alt="Easy sharing's img" width="440" height="380"/>
                                    <div className="tab-panels__tab-panel-content">
                                        <h2 className="tab-panels__tab-panel-content-title">Share your bookmarks</h2>
                                        <p className="tab-panels__tab-panel-content-description">Easily share your bookmarks and collections with
                                            others. Create a shareable link that you can send at the click of a button.</p>
                                        <button className="button button--blue" type="button">More info</button>
                                    </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </section>
    )
}