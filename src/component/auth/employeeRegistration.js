import React,{Component} from 'react'
import {connect} from "react-redux";
import {Form, Button, Jumbotron, Row, Col} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {registerEmployee} from '../../redux/actions/employeeActions'

class EmployeeRegistration extends Component {

    state = {
        show: false,
        name: "",
        dob : "",
        pscMerit: "",
        appointmentGOdate: "",
        nationalId: "",
        email: "",
        phoneNumber: "",
        empType: "",
        password: "",
        secret: ""
    }

    showSecret = () => {
        this.setState({
            show: !this.state.show
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name: this.state.name,
            dob: this.state.dob,
            pscMerit: this.state.pscMerit,
            appointmentGOdate: this.state.appointmentGOdate,
            nationalId: this.state.nationalId,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            empType: this.state.empType,
            password: this.state.password,
            secret: this.state.secret
        }
        this.props.registerEmployee(userData,this.props.history)
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        console.log("errors",this.props.errors)
        return (
            <div className="container">
                <h2 className="text-center  mt-4">Registration</h2>
                <Jumbotron>
                    {this.props.errors}
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Name" onChange={this.onChangeHandler} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Enter Date of Birth" onChange={this.onChangeHandler}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onChangeHandler}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>PSC Merit</Form.Label>
                            <Form.Control type="text" name="pscMerit" placeholder="Enter PSC Merit" onChange={this.onChangeHandler}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>National Id</Form.Label>
                            <Form.Control type="text" name="nationalId" placeholder="Enter National Id" onChange={this.onChangeHandler}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Appointment Date</Form.Label>
                            <Form.Control type="date" name="appointmentGOdate" placeholder="Enter Appointment GO Date" onChange={this.onChangeHandler}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Phone Number </Form.Label>
                            <Form.Control type="text" name="phoneNumber" placeholder="Enter Phone Number" onChange={this.onChangeHandler}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Employee Type</Form.Label>
                            <Form.Control type="text" name="empType" placeholder="empType" onChange={this.onChangeHandler}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChangeHandler}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Secret Key</Form.Label>
                            <Row>
                                <Col column="lg" lg={11}>
                                    <Form.Control type={this.state.show ? `text` : `password`} name="secret" placeholder="Secret Key" onChange={this.onChangeHandler}/>
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
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        registerEmployee
    },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(EmployeeRegistration)