import { useState } from "react"
import { Heart, Search, ShoppingBag, User, Award, ChevronRight, Menu, PenTool, Printer, Scissors, Unlock } from "react-feather"
import { Text } from "../text"
import { Container } from '../container'
import { GrayButton } from "../button"
import { Link } from "react-router-dom"
import { NavDropdown } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { Drawer } from "../drawer"
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
            {/* Mobile drawer */}
            <Drawer
                show={show}
                width={280}
                placement="start"
                onHide={() => setShow(false)}
            >
                <div className="drawer-container">

                    <Link to={"/cart"} className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <ShoppingBag size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Cart</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">See What You Got</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </Link>


                    <Link to={"/login"} className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <Unlock size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Login</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Access your account</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </Link>

                    <Link to={"/registration"} className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <User size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Signup</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Create an account</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </Link>
                </div>
            </Drawer>
        </div>
    )
}

