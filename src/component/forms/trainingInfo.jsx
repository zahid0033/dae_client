import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios';

class TrainingInfo extends Component {
    state = {
        triningType : "",
        trainingTitle : "",
        instituteName : "",
        Country : "",
        grade : "",
        position : "",
        startingDate : "",
        endingDate : ""
    };

    onChangeHandler = change => {
        this.setState({
            [change.target.name] : change.target.value
        });
    };

    onSubmit = submit => {
        submit.preventDefault();
        const {
            trainingType,
            trainingTitle,
            instituteName,
            country,
            grade,
            position,
            startingDate,
            endingDate
        } = this.state;

        const trainingInfo = {
            employee : this.props.auth.user.id,
            trainingType,
            trainingTitle,
            instituteName,
            country,
            grade,
            position,
            startingDate,
            endingDate
        }; 

        axios.post("/api/dbForms/addTrainingInfo", trainingInfo)
            .then(res => {
                this.setState({
                    trainingInfos : res.data
                })
                alert("successfully added")
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <h1 className="text-center">Training Information</h1>            

                        <label>Training Type</label>
                        <input
                            className="form-control"
                            type="text"
                            name="trainingType"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>Training Title</label>
                        <input
                            className="form-control"
                            type="text"
                            name="trainingTitle"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>Institute Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="instituteName"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>Country</label>
                        <input
                            className="form-control"
                            type="text"
                            name="country"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>Grade</label>
                        <input
                            className="form-control"
                            type="text"
                            name="grade"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>Position</label>
                        <input
                            className="form-control"
                            type="text"
                            name="position"
                            onChange={this.onChangeHandler}
                        />

                        <label>Starting Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name="startingDate"
                            onChange={this.onChangeHandler}
                        />     

                        <label>Ending Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name="endingDate"
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
 
export default connect(mapStateToProps,null)(TrainingInfo);