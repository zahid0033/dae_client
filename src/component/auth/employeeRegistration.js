import React,{Component} from 'react'
import {connect} from "react-redux";
import {Form, Button, Jumbotron, Row, Col} from "react-bootstrap";

class EmployeeRegistration extends Component {

    state = {
        show: false,
        email: "",
        password : "",
        phone: "",
        secretKey: ""
    }

    showSecret = () => {
        this.setState({
            show: !this.state.show
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const agentData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginAgent(agentData,this.props.history)
    }

    onChange = e => {

        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-center  mt-4">Registration</h2>
                <Jumbotron>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" name="phone" placeholder="phone" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Secret Key</Form.Label>
                            <Row>
                                <Col column="lg" lg={11}>
                                    <Form.Control type={this.state.show ? `text` : `password`} name="secretKey" placeholder="Secret Key"/>
                                </Col>
                                <Col column="lg" lg={1}>
                                    <span>{this.state.show ? <i className="far fa-eye fa-2x" onClick={this.showSecret}></i> : <i className="fas fa-eye-slash fa-2x" onClick={this.showSecret}></i>}</span>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Jumbotron>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})


export default connect(mapStateToProps,null)(EmployeeRegistration)