import { NavbarBase } from "../navbar"
import { Footer } from "../footer"

export const Layout = (props) => {
    return (
        <div className="layout-section">
            <NavbarBase />

            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}