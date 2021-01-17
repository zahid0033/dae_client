import React,{Component} from "react";
import {connect} from "react-redux";
import {Form,Button,Jumbotron} from "react-bootstrap";
import {loginEmployee} from "../../redux/actions/employeeActions";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";

class EmployeeLogin extends Component {
    state = {
        phoneNumber: "",
        password : ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            phoneNumber: this.state.phoneNumber,
            password: this.state.password
        }
        this.props.loginEmployee(userData,this.props.history)
    }

    onChange = e => {

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        console.log("errors",this.props.errors)
        return (
            <Jumbotron>
                {this.props.errors}
                <h2 className="text-center">Agent Login</h2>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" name="phoneNumber" placeholder="Enter Phone Number" onChange={this.onChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <p className="mt-5">No Registered yet? Click here to <Link to={`/signup`} className="">signup</Link></p>
            </Jumbotron>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginEmployee
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeLogin)