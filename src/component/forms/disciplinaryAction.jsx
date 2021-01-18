import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios';

class DisciplinaryAction extends Component {
    state = {
        offense : "",
        natureOfPunishment : "",
        punishment : "",
        goDate : ""
    }

    onChangeHandler = change => {
        this.setState({
            [change.target.name] : change.target.value
        });
    };

    onSubmit = submit => {
        submit.preventDefault();
        const {
            offense,
            natureOfPunishment,
            punishment,
            goDate
        } = this.state;

        const disciplinaryAction = {
            employee : this.props.auth.user.id,
            offense,
            natureOfPunishment,
            punishment,
            goDate
        }

        axios.post("/api/dbForms/adddisciplineAction", disciplinaryAction)
            .then(res => {
                this.setState({
                    disciplinaryActions : res.data
                })
                alert("successfully added")
            })
            .catch(err => {
                console.log(err)
            } )
    }

    render() {
        return (
            <>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <h1 className="text-center">Disciplinary Action Information</h1>

                        <label>GO Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name="goDate"
                            onChange={this.onChangeHandler}
                        />

                        <label>Offense</label>
                        <input
                            className="form-control"
                            type="text"
                            name="offense"
                            onChange={this.onChangeHandler}
                        />

                        <label>Nature of Punishment</label>
                        <input
                            className="form-control"
                            type="text"
                            name="natureOfPunishment"
                            onChange={this.onChangeHandler}
                        />

                        <label>Punishment</label>
                        <input
                            className="form-control"
                            type="text"
                            name="punishment"
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
 
export default connect(mapStateToProps,null)(DisciplinaryAction) ;
