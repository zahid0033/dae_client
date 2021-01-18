import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios'

class AddressInfo extends Component{
    state = {
        districts : [],
        upazillas : [],
        postOffices : [],

        present_district : "",
        present_upazilla : "",
        present_postOffice : "",
        present_village : "",
        present_road : "",  

        permanent_district : "",
        permanent_upazilla : "",
        permanent_postOffice : "",
        permanent_village : "",
        permanent_road : "",
    }

    componentDidMount() {
        this.fetchDistrict();
        this.fetchUpazilla();
        this.fetchPostOffice();
    }

    fetchDistrict = async () => {
        await axios.get(`/api/dropdownApi/getDistrict`)
        .then(res => {
            this.setState({
                districts : res.data.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    };

    fetchUpazilla = async () => {
        await axios.get(`/api/dropdownApi/getUpazilla`)
        .then(res => {
            this.setState({
                upazillas : res.data.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    };

    fetchPostOffice = async () => {
        await axios.get(`/api/dropdownApi/getPostOffice`)
        .then(res => {
            this.setState({
                postOffices : res.data.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    };

    onChangeHandler = change => {
        this.setState({
            [change.target.name] : change.target.value
        })
    };

    onSubmit = submit => {
        submit.preventDefault();
        const { 
            present_district,
            present_upazilla,
            present_postOffice,
            present_village,
            present_road,
            permanent_district,
            permanent_upazilla,
            permanent_postOffice,
            permanent_village,
            permanent_road
        } = this.state;

        const addressInfo = {
            employee: this.props.auth.user.id,
            present_district,
            present_upazilla,
            present_postOffice,
            present_village,
            present_road,
            permanent_district,
            permanent_upazilla,
            permanent_postOffice,
            permanent_village,
            permanent_road
        }

        axios.post('/api/dbForms/addAddressInfo', addressInfo)
            .then( res => {
                this.setState({
                    addressInfos : res.data
                })
                alert('Successfully Added !');
            })
            .catch( error => {
                console.log(error);
            })
    } 
    
    render() {
        return ( 
            <>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                    <h1 className="text-center">Address Information</h1>
                    <h3>Present Address</h3>
    
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">District</label>
                        <select className="form-control" id="exampleFormControlSelect1" name="present_district" onChange={this.onChangeHandler}>
                            <option>Choose Your District</option>
                            {
                                this.state.districts.length > 0 && this.state.districts.map( (district,key) => (
                                    <option key={key} value={district._id}>{district.districtName}</option>
                                ) )

                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect2">Upazilla /PS</label>
                        <select className="form-control" id="exampleFormControlSelect2" name="present_upazilla" onChange={this.onChangeHandler}>
                            <option>Choose Your Upazilla</option>
                            {
                                this.state.upazillas.length > 0 && this.state.upazillas.map( (upazilla,key) => (
                                    <option key={key} value={upazilla._id}>{upazilla.upazillaName}</option>
                                ) )

                            }
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect3">Post Office</label>
                        <select className="form-control" id="exampleFormControlSelect3" name="present_postOffice" onChange={this.onChangeHandler}>
                            <option>Choose Your Post Office</option>
                            {
                                this.state.postOffices.length > 0 && this.state.postOffices.map( (postOffice,key) => (
                                    <option key={key} value={postOffice._id}>{postOffice.postOfficeName}</option>
                                ) )

                            }
                        </select>
                    </div>                        
    
                    <label>Village /House</label>
                    <input
                        className="form-control"
                        type="text"
                        name="present_village"
                        onChange={this.onChangeHandler}
                    />
    
                    <label>Road /Block /Sector</label>
                    <input
                        className="form-control"
                        type="text"
                        name="present_road"
                        onChange={this.onChangeHandler}
                    />
    
                    <h3>Permanenet Address</h3>
    
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">District</label>
                        <select className="form-control" id="exampleFormControlSelect1" name="permanent_district" onChange={this.onChangeHandler}>
                            <option>Choose Your District</option>
                            {
                                this.state.districts.length > 0 && this.state.districts.map( (district,key) => (
                                    <option key={key} value={district._id}>{district.districtName}</option>
                                ) )

                            }
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect2">Upazilla /PS</label>
                        <select className="form-control" id="exampleFormControlSelect2" name="permanent_upazilla" onChange={this.onChangeHandler}>
                            <option>Choose Your Upazilla</option>
                            {
                                this.state.upazillas.length > 0 && this.state.upazillas.map( (upazilla,key) => (
                                    <option key={key} value={upazilla._id}>{upazilla.upazillaName}</option>
                                ) )

                            }
                        </select>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect3">Post Office</label>
                        <select className="form-control" id="exampleFormControlSelect3" name="permanent_postOffice" onChange={this.onChangeHandler}>
                            <option>Choose Your Post Office</option>
                            {
                                this.state.postOffices.length > 0 && this.state.postOffices.map( (postOffice,key) => (
                                    <option key={key} value={postOffice._id}>{postOffice.postOfficeName}</option>
                                ) )

                            }
                        </select>
                    </div>
    
                    <label>Village /House</label>
                    <input
                        className="form-control"
                        type="text"
                        name="permanent_village"
                        onChange={this.onChangeHandler}
                    />
    
                    <label>Road /Block /Sector</label>
                    <input
                        className="form-control"
                        type="text"
                        name="permanent_road"
                        onChange={this.onChangeHandler}
                    />

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
    
                </form>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps,null)(AddressInfo);    

