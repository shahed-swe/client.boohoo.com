import React, { useEffect } from 'react';
import { Container } from '../../components/container';
import { Layout } from '../../components/layout';
import { Text } from '../../components/text';
import RegistrationForm from '../../components/authform/registration';
import { Requests } from '../../utils/API/index';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            history.push("/")
        }
    })

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await Requests.Authentication.Registration(data)
            if (response.status) {
                history.push("/login")
            }
        } catch (error) {
            if(error){
                console.log(error)
            }
        }
    }

    return (
        <Layout>
            <Container.Simple>
                <Container.Row>
                    <Container.Column className="col-lg-6 mx-auto">
                    <Text className="fs-26 fw-bolder">Registration</Text>
                        <div style={{ backgroundColor: "#EFEFEF" }}>
                            <Text className="fs-14 p-2">Registration</Text>
                        </div>
                        <RegistrationForm onSubmit={onSubmit} />
                    </Container.Column>
                </Container.Row>
            </Container.Simple>
        </Layout>

    );
};

export default Login;