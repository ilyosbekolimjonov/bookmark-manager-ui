import "./Header.css"
const logo = process.env.PUBLIC_URL + "/images/logo.svg"

export default function Header() {
    return (
        <header className="site-header">
            <div className="container site-header__container">

                <a className="logo site-header__logo" href="index.html">
                    <img className="logo__img" src={logo} alt="Bookmark logo" width="149" height="25" />
                </a>

                <nav className="site-header__sitenav sitenav">
                    <ul className="sitenav__list">
                        <li className="sitenav__item">
                            <a className="sitenav__link" href="/">Features</a>
                        </li>
                        <li className="sitenav__item">
                            <a className="sitenav__link" href="/">Pricing</a>
                        </li>
                        <li className="sitenav__item">
                            <a className="sitenav__link" href="/">Contact</a>
                        </li>
                    </ul>

                    <a className="button button--red" href="/">Login</a>
                </nav>

            </div>
        </header>
    )
}