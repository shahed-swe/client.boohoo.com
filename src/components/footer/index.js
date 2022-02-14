import { Facebook, Instagram, Twitter } from "react-feather"
import { Text } from "../text"
import { Container } from "../container"

export const Footer = () => {
    return (
        <Container.Simple className="footer">

            <Container.Row className="py-4">
                <Container.Column className="col-lg-4 col-md-6">
                    <Text className="fs-16 fw-bolder">How we can help?</Text>
                    <Text className="fs-13 mb-2">Help</Text>
                    <Text className="fs-13 mb-2">Track My Order</Text>
                    <Text className="fs-13 mb-2">boohoo Premier</Text>
                    <Text className="fs-13 mb-2">Returns</Text>
                    <Text className="fs-13 mb-2">Size Guide</Text>
                    <Text className="fs-13 mb-2">Student Discount - Get Offers</Text>
                    <Text className="fs-13 mb-2">Discount & Promo Codes</Text>
                    <Text className="fs-13 mb-2">Get Exclusive Offers & Updates</Text>
                    <div className="d-flex">
                        <div className="pe-2">
                            <Instagram size={23} color="#8A92A1" />
                        </div>
                        <div className="px-2">
                            <Twitter size={23} color="#8A92A1" />
                        </div>
                        <div className="px-2">
                            <Facebook size={23} color="#8A92A1" />
                        </div>
                    </div>
                </Container.Column>
                <Container.Column className="col-lg-4 col-md-6">
                    <Text className="fs-16 fw-bolder">INFORMATION</Text>
                    <Text className="fs-13 mb-2">2022 Fashion Trends Report</Text>
                    <Text className="fs-13 mb-2">Delivery Information</Text>
                    <Text className="fs-13 mb-2">Sustainability</Text>
                    <Text className="fs-13 mb-2">Covid-19 Update</Text>
                    <Text className="fs-13 mb-2">Recycling Options</Text>
                    <Text className="fs-13 mb-2">T&C's</Text>
                    <Text className="fs-13 mb-2">Privacy Notice - Updated March 2021</Text>
                    <Text className="fs-13 mb-2">Refer a Friend</Text>
                </Container.Column>
                <Container.Column className="col-lg-4 col-md-6">
                    <Text className="fw-16 fw-bolder">ABOUT US & MORE</Text>
                    <Text className="fs-13 mb-2">About boohoo</Text>
                    <Text className="fs-13 mb-2 fw-bold text-white">Investor Relations</Text>
                    <Text className="fs-13 mb-2">Environment & Social Responsibility</Text>
                    <Text className="fs-13 mb-2">BCI Membership</Text>
                    <Text className="fs-13 mb-2">Modern Slavery Statement</Text>
                    <Text className="fs-13 mb-2 fw-bold text-white">Careers</Text>
                    <Text className="fs-13 mb-2">Become an Affiliate</Text>
                </Container.Column>
            </Container.Row>


            <hr />
            <div className="text-center">
                <Text className="fs-13 mb-0 pb-3 text-muted">Copyright © 2022 Boohoo. All Right Reserved</Text>
            </div>
        </Container.Simple>
    )
}