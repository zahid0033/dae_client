import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios';

class TravelInfo extends Component {
    state = {
        country : "",
        travelPurpose : "",
        fromDate : "",
        endDate : ""
    };

    onChangeHandler = change => {
        this.setState({
            [change.target.name] : change.target.value
        });
    };

    onSubmit = submit => {
        submit.preventDefault();
        const {
            country, 
            travelPurpose,
            fromDate,
            endDate
        } = this.state;

        const travelInfo = {
            employee : this.props.auth.user.id,
            country,
            travelPurpose,
            fromDate,
            endDate
        };

        axios.post("/api/dbForms/addTravelInfo", travelInfo)
        .then(res => {
            this.setState({
                travelInfos : res.data
            })
            alert("successfully added")
        })
        .catch(err => {
            console.log(err)
        });
    };

    render() {
        return(
            <>
                <div className="container">
                    <form onSubmit={this.onSubmit}>

                        <h1 className="text-center">Foreign Travel Information</h1>

                        <label> Country </label>
                        <input
                            className="form-control"
                            type="text"
                            name="country"
                            onChange={this.onChangeHandler}
                        /> 

                        <label> Travel Purpose </label>
                        <input
                            className="form-control"
                            type="text"
                            name="travel_purpose"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>Starting Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name="s_date"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>End Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name="e_date"
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
});
 
export default connect(mapStateToProps,null)(TravelInfo);