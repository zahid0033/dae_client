import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios'

class ChildInfo extends Component {
    state = {
        name : "",
        dob : "",
        sex : ""
    };

    onChangeHandler = change => {
        this.setState({
            [change.target.name] : change.target.value
        })
    };

    onSubmit = submit => {
        submit.preventDefault();
        const { 
            name, 
            dob, 
            sex 
        } = this.state

        const childInfo = {
            employee : this.props.auth.user.id,
            name,
            dob,
            sex
        }
        axios.post("/api/dbForms/addChildInfo", childInfo)
            .then(res => {
                this.setState({
                    childInfos : res.data
                })
                alert("successfully added")
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return(
            <>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <h1 className="text-center">Child Information</h1>

                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChangeHandler}
                        />

                        <label>Date of Birth</label>
                        <input
                            className="form-control"
                            type="date"
                            name="dob"
                            onChange={this.onChangeHandler}
                        />

                        <label>Sex</label>
                        <input
                            className="form-control"
                            type="text"
                            name="sex"
                            onChange={this.onChangeHandler}
                        />

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>


                    </form>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})
 
export default connect(mapStateToProps,null)(ChildInfo) ;
