import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios';

class SpouseInfo extends Component {
    state = {
        districts : [],

        name : "",
        district : "",
        occupation : "",
        designation : "",
        organization : ""
    };

    componentDidMount() {
        this.fetchDistrict()
    };

    fetchDistrict = async () => {
        await axios.get(`/api/dropdownApi/getDistrict`)
        .then(res => {
            this.setState({
                districts:  res.data.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    };

    onChangeHandler = change => {
        this.setState({
            [change.target.name] : change.target.value
        });
    };

    onSubmit = submit => {
        submit.preventDefault();
        const {
            name,
            district,
            occupation,
            designation,
            organization
        } = this.state;

        const spouseInfo = {
            employee : this.props.auth.user.id,
            name,
            district,
            occupation,
            designation,
            organization
        };

        axios.post("/api/dbForms/addSpouseInfo", spouseInfo)
            .then(res => {
                this.setState({
                    spouseInfos : res.data
                })
                alert("successfully added")
            })
            .catch(err => {
                console.log(err)
            });        
    };

    render() {
        return (
            <>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <h1 className="text-center">Spouse Information</h1>

                        <label> Name </label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChangeHandler}
                        /> 

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">District</label>
                            <select className="form-control" id="exampleFormControlSelect1" name="district" onChange={this.onChangeHandler}>
                                <option>Choose Your District</option>
                                {
                                    this.state.districts.length > 0 && this.state.districts.map( (district,key) => (
                                        <option key={key} value={district._id}>{district.districtName}</option>
                                    ) )

                                }
                            </select>
                        </div>

                        <label> Occupation </label>
                        <input
                            className="form-control"
                            type="text"
                            name="occupation"
                            onChange={this.onChangeHandler}
                        /> 

                        <label> Designation </label>
                        <input
                            className="form-control"
                            type="text"
                            name="designation"
                            onChange={this.onChangeHandler}
                        /> 

                        <label> Organization </label>
                        <input
                            className="form-control"
                            type="text"
                            name="organization"
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
 
export default connect(mapStateToProps,null)(SpouseInfo);