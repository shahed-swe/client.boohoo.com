import { useState } from "react"
import { Award, ChevronRight, Heart, Menu, PenTool, Printer, Scissors, ShoppingBag, Unlock, User } from "react-feather"
import { Text } from "../text"
import { Container } from '../container'
import {GrayButton } from "../button"
import { Drawer } from "../drawer"
import { Link } from "react-router-dom"

// Base navbar
export const NavbarBase = () => {
    const [show, setShow] = useState(false)


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
                                        <Text className="fs-22 text-dark ">boohoo</Text>
                                    </div>
                                </Link>
                            </div>

                            {/* Others elements */}
                            <div className="elements-container flex-fill d-none d-xl-block p-2">
                                <div className="d-flex justify-content-end">

                                    <div className="text-center me-4">
                                        <Link to="#" className="text-decoration-none">
                                            <User size={28} color="black" />
                                        </Link>
                                    </div>

                                    <div className="text-center me-4">
                                        <Link to="#" className="text-decoration-none">
                                            <Heart size={28} color="black" />
                                        </Link>
                                    </div>
                                    <div className="text-center me-4">
                                        <Link to="#" className="text-decoration-none">
                                            <ShoppingBag size={28} color="black" />
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
                    <Link to="#" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <Award size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">About</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Be on Quality</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </Link>

                    <Link to="#" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <ShoppingBag size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Shop</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Choose Your Desire</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </Link>

                    <Link to="#" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <Printer size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Print-on-Demand</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Maeketplace Designs</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </Link>

                    <Link to="/studio" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <PenTool size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Start Designing</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Start you own design</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </Link>

                    <Link to="/studio" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <Scissors size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Start Tailoring</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Start you own tailoring</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </Link>

                    <Link to="#" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
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

                    <Link to="#" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
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

