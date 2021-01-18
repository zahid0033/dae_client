import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios'

class AwardInfo extends Component {
    state = {
        name : "",
        ground : "",
        date : "",
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        const { 
            name, 
            ground, 
            date 
        } = this.state

        const awardInfo = {
            employee : this.props.auth.user.id,
            name,
            ground,
            date
        }
        axios.post("/api/dbForms/addAwardInfo", awardInfo)
            .then(res => {
                this.setState({
                    awardInfos : res.data
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
                        <h1 className="text-center">Award Information</h1>

                        <label> Name </label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChangeHandler}
                        /> 

                        <label> Ground </label>
                        <input
                            className="form-control"
                            type="text"
                            name="ground"
                            onChange={this.onChangeHandler}
                        /> 

                        <label> Date </label>
                        <input
                            className="form-control"
                            type="date"
                            name="date"
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
 
export default connect(mapStateToProps,null)(AwardInfo) ;