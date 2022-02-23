import NavbarBase from "../navbar/index"
import { Footer } from "../footer"
import './style.scss'

export const Layout = (props) => {
    return (
        <div className="layout-section">
            <NavbarBase />

            <main className="top-margin-first">
                {props.children}
            </main>
            <Footer classNam="top-margin-first"/>
        </div>
    )
}