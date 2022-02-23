import React, { useEffect} from 'react';
import { Container } from '../../components/container';
import { Layout } from '../../components/layout';
import { Text } from '../../components/text';
import LoginForm from '../../components/authform/login';
import { Requests } from '../../utils/API/index';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log(token)
        if(token){
            history.push("/home")
        }
    },[history])

    const onSubmit = async(data) => {
        const formData = {
            ...data,
        }
        try {
            const response = await Requests.Authentication.Login(formData)
            console.log(response)
            if(response.status){
                localStorage.setItem("token", response.data.token)
                history.push("/home")
            }
        } catch (error) {
            
        }
    }

    return (
        <Layout>
            <Container.Simple>
                <Container.Row>
                    <Text className="fs-26 fw-bolder">My Account Log In</Text>
                    <Container.Column className="col-lg-6">
                        <div style={{ backgroundColor: "#EFEFEF" }}>
                            <Text className="fs-14 p-2">Login</Text>
                        </div>
                        <LoginForm onSubmit={onSubmit} />
                    </Container.Column>
                    {/* <Container.Column className="col-lg-6">
                        <div style={{ backgroundColor: "#EFEFEF" }}>
                            <Text className="fs-14 p-2 fw-bold">NEW TO fashionclub.com?</Text>

                        </div>
                        <Text className="fs-12 ">
                            Create an account to check out faster in the future and receive emails about your orders, new products, events and special offers!
                        </Text>
                        <div className='d-flex justify-content-end'>
                            <button
                                type="submit"
                                className="btn btn-primary rounded-0 ps-4 pe-4 shadow-none"
                                onClick={() => history.push("/registration")}
                            >
                                CREATE ACCOUNT
                            </button>
                        </div>

                    </Container.Column> */}
                </Container.Row>
            </Container.Simple>
        </Layout>

    );
};

export default Login;