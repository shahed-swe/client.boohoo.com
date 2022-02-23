import React, { useEffect, useState } from 'react';
import { Button } from '../../components/button/extra';
import { CardBody, CardFooter } from '../../components/card/index';
import { LoginCard, LoginHeader, LoginTitle } from '../../components/card/login';
import { Container } from '../../components/container/extra';
import { Col, Row } from '../../components/flex/index';
import { Image } from '../../components/image/index';
import { Form, FormGroup, Input } from '../../components/form/index';
import loginHeaderImg from '../../assets/card-danger.png';
import { useHistory } from 'react-router-dom';
import NavbarBase from '../../components/navbar/index';
import { Requests } from '../../utils/API';
import { useForm } from 'react-hook-form';

const Login = () => {
    const history = useHistory();
    const [loading, setLoading] = useState()
    const {register, handleSubmit} = useForm()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            history.push('/home');
        }
    }, [history]);

    const handleLogin = async(data) => {
    
        try {
            setLoading(true)
            const formData = {
                username: data.username,
                password: data.password
            }
            const response = await Requests.Authentication.Login(formData)
            console.log(response)
            if (response.status) {
                localStorage.setItem("token", response.data.token)
                setLoading(false)
                history.push("/home")
            }
        } catch (error) {
            if(error){
                console.log(error)
            }
        }
    }

    return (

        <>
            <NavbarBase />
            <Container style={{marginTop: "10rem"}}>
                <Row>
                    <Col css={{ mx: 'auto' }} col={{ '@md': '6', '@lg': '5', '@xl': '4' }}>
                        <Form onSubmit={handleSubmit(handleLogin)}>
                            <LoginCard>
                                <LoginHeader>
                                    <Image css={{ width: '100%' }} src={loginHeaderImg} />
                                    <LoginTitle>Log in</LoginTitle>
                                </LoginHeader>
                                <CardBody>
                                    <FormGroup>
                                        <Input
                                            type='text'
                                            placeholder='Username'
                                            defaultValue={"mor_2314"}
                                            {...register("username")}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input
                                            type='password'
                                            placeholder='Password'
                                            defaultValue={"83r5^_"}
                                            {...register("password")}
                                        />
                                    </FormGroup>
                                </CardBody>
                                <CardFooter >
                                    <Button outlined block>
                                        Login{loading ? '...' : ''}
                                    </Button>
                                </CardFooter>
                            </LoginCard>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;