import NavbarBase from "../navbar/index"
import { Footer } from "../footer"
import './style.scss'

export const Layout = (props) => {
    return (
        <div className="layout-section">
            <NavbarBase />

            <main className="top-margin">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}