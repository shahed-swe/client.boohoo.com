import { useState } from "react"
import { Heart, Menu, Search, ShoppingBag, User } from "react-feather"
import { Text } from "../text"
import { Container } from '../container'
import { GrayButton } from "../button"
import { Link } from "react-router-dom"
import { NavDropdown } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import "./style.scss"
// Base navbar
export const NavbarBase = () => {
    const [show, setShow] = useState(false)
    const token = localStorage.getItem("token")
    const history = useHistory()

    return (
        <div className="base-navbar shadow-sm px-lg-5">
            <Container.Simple>
                <Container.Row>
                    <Container.Column>
                        <div className="d-flex">

                            {/* Logo container */}
                            <div className="pt-2">
                                <Link to={"/"} className="text-decoration-none">
                                    <div className="text-decoration-none">
                                        <Text className="fs-22 text-dark ">FASHIONCLUB</Text>
                                    </div>
                                </Link>
                            </div>

                            {/* Others elements */}
                            <div className="elements-container flex-fill d-none d-xl-block p-2">
                                <div className="d-flex justify-content-end">
                                    <div className="text-center me-4 pt-2 side-border">
                                        <Link to="#" className="text-decoration-none">
                                            <Search size={22} color="black" />
                                        </Link>
                                    </div>
                                    <div className="text-center me-4 side-border">
                                        <NavDropdown title={<User size={22} color="black" />} id="navbarScrollingDropdown">
                                            {token ? <NavDropdown.Item onClick={() => {localStorage.removeItem("token"); history.push("/login")}}>logout</NavDropdown.Item> : <NavDropdown.Item href="/login">Login</NavDropdown.Item>}
                                        </NavDropdown>
                                    </div>

                                    <div className="text-center me-4 pt-2 side-border">
                                        <Link to="#" className="text-decoration-none">
                                            <Heart size={22} color="black" />
                                        </Link>
                                    </div>
                                    
                                    <div className="text-center me-4 pt-2 ">
                                        <Link to="/cart" className="text-decoration-none">
                                            <ShoppingBag size={22} color="black" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Menu button */}
                            <div className="elements-container d-xl-none ms-auto">
                                <GrayButton className="btn-circle" onClick={() => setShow(!show)}>
                                    <Menu className="text-dark" size={20} />
                                </GrayButton>
                            </div>
                        </div>
                    </Container.Column>
                </Container.Row>
            </Container.Simple>
        </div>
    )
}

