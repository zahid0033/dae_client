import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios';

class EducationInfo extends Component {
    state = {
        degree : "",
        groupOrSubject : "",
        institute : "",
        board : "",
        resultGPA : "",
        passingYear : ""
    }

    onChangeHandler = change => {
        this.setState({
            [change.target.name] : change.target.value
        });        
    };

    onSubmit = submit => {
        submit.preventDefault();
        const {
            degree, 
            groupOrSubject,
            institute,
            board,
            resultGPA,
            passingYear        
        } = this.state;

        const eduInfo = {
            employee : this.props.auth.user.id,
            degree,
            groupOrSubject,
            institute,
            board,
            resultGPA,
            passingYear
        };

        axios.post("/api/dbForms/addEduInfo", eduInfo)
            .then(res => {
                this.setState({
                    eduInfos : res.data
                });
                alert("successfully added");
            })
            .catch(err => {
                console.log(err);
            });
    }

    render(){
        return(
            <>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <h1 className="text-center">Education Information</h1>

                        <label>Degree</label>
                        <input
                            className="form-control"
                            type="text"
                            name="degree"
                            onChange={this.onChangeHandler}
                        />                

                        <label>Group /Subject</label>
                        <input
                            className="form-control"
                            type="text"
                            name="groupOrSubject"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>Institute</label>
                        <input
                            className="form-control"
                            type="text"
                            name="institute"
                            onChange={this.onChangeHandler}
                        />

                        <label>Board</label>
                        <input
                            className="form-control"
                            type="text"
                            name="board"
                            onChange={this.onChangeHandler}
                        />

                        <label>GPA</label>
                        <input
                            className="form-control"
                            type="text"
                            name="resultGPA"
                            onChange={this.onChangeHandler}
                        />

                        <label>Passing Year</label>
                        <input
                            className="form-control"
                            type="number"
                            name="passingYear"
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
 
export default connect(mapStateToProps,null)(EducationInfo);


            
 
