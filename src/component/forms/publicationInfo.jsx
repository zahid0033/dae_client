import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios'

class PublicationInfo extends Component {
    state = {
        type : "",
        title : "",
        date : ""
    };

    onChangeHandler = change => {
        this.setState({
            [change.target.name] : change.target.value
        });
    };

    onSubmit = submit => {
        submit.preventDefault();
        const {
            type,
            title,
            date 
        } = this.state;

        const publicationInfo = {
            employee : this.props.auth.user.id,
            type,
            title,
            date 
        };

        axios.post("/api/dbForms/addPublicationInfo", publicationInfo)
        .then(res => {
            this.setState({
                generalInfos : res.data
            })
            alert("successfully added")
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
            <>
                <form onSubmit={this.onSubmit}>
                <h1 className="text-center">Promotion Information</h1>

                    <label>Publication Type</label>
                    <input
                        className="form-control"
                        type="text"
                        name="type"
                        onChange={this.onChangeHandler}
                    /> 

                    <label> Title </label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
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
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
 
export default connect(mapStateToProps,null)(PublicationInfo) ;

