import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios'

class GeneralInfo extends Component {
    state = {
        generalInfos : [],
        districts : [],
        batches:[],
        ranks: [],
        divisions: [],
        offices: [],
        designations: [],
        fatherName: "",
        motherName: "",
        district: "",
        sex: "",
        maritalStatus: "",
        religion: "",
        tinNo: "",
        batch: "",
        rank: "",
        division: "",
        office: "",
        designation: ""
    }

    componentDidMount() {
        this.fetchDistrict()
        this.fetchBCSbatch()
        this.fetchRank()
        this.fetchDivision()
        this.fetchOffice()
        this.fetchDesignation()
    }

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
    }

    fetchBCSbatch = async () => {
        await axios.get(`/api/dropdownApi/getBatch`)
            .then(res => {
                this.setState({
                    batches:  res.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    fetchRank = async () => {
        await axios.get(`/api/dropdownApi/getRank`)
            .then(res => {
                this.setState({
                    ranks:  res.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    fetchDivision = async () => {
        await axios.get(`/api/dropdownApi/getDivision`)
            .then(res => {
                this.setState({
                    divisions:  res.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    fetchOffice = async () => {
        await axios.get(`/api/dropdownApi/getOffice`)
            .then(res => {
                this.setState({
                    offices:  res.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    fetchDesignation = async () => {
        await axios.get(`/api/dropdownApi/getDesignation`)
            .then(res => {
                this.setState({
                    designations:  res.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {fatherName,motherName,district,sex,maritalStatus,religion,tinNo,batch,rank,division,office,designation} = this.state
        console.log(this.state)
        const generalInfo = {
            fatherName,
            motherName,
            district,
            sex,
            maritalStatus,
            religion,
            tinNo,
            batch,
            rank,
            division,
            office,
            designation
        }
        axios.post("/api/dbForms/addGeneralInfo", generalInfo)
            .then(res => {
                this.setState({
                    generalInfos : res.data
                })
                alert("successfully added")
            })
            .catch(err => {
                console.log(err)
            } )
    }

    render() {
        console.log("gen info",this.props.auth)
        return (
            <>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <h1 className="text-center">General Information</h1>

                        <label>Father's Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="fatherName"
                            onChange={this.onChangeHandler}
                        />

                        <label>Mother's Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="motherName"
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

                        <label>Sex</label>
                        <input
                            className="form-control"
                            type="text"
                            name="sex"
                            onChange={this.onChangeHandler}
                        />

                        <label>Marital Status</label>
                        <input
                            className="form-control"
                            type="text"
                            name="maritalStatus"
                            onChange={this.onChangeHandler}
                        />

                        <label>Religion</label>
                        <input
                            className="form-control"
                            type="text"
                            name="religion"
                            onChange={this.onChangeHandler}
                        />

                        <label>TIN no</label>
                        <input
                            className="form-control"
                            type="text"
                            name="tinNo"
                            onChange={this.onChangeHandler}
                        />

                        <div className="form-group">
                            <label htmlFor="batch">BCS Batch</label>
                            <select className="form-control" id="batch" name="batch" onChange={this.onChangeHandler}>
                                <option>Choose Your BCS Batch</option>
                                {
                                    this.state.batches.length > 0 && this.state.batches.map( (batch,key) => (
                                        <option key={key} value={batch._id}>{batch.batch}</option>
                                    ) )

                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="rank">Cadre Rank</label>
                            <select className="form-control" id="rank" name="rank" onChange={this.onChangeHandler}>
                                <option>Choose Cadre Rank</option>
                                {
                                    this.state.ranks.length > 0 && this.state.ranks.map( (rank,key) => (
                                        <option key={key} value={rank._id}>{rank.rank}</option>
                                    ) )

                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="division">Office Division</label>
                            <select className="form-control" id="division" name="division" onChange={this.onChangeHandler}>
                                <option>Choose Office Division</option>
                                {
                                    this.state.divisions.length > 0 && this.state.divisions.map( (division,key) => (
                                        <option key={key} value={division._id}>{division.division}</option>
                                    ) )

                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="office">Office Name</label>
                            <select className="form-control" id="office" name="office" onChange={this.onChangeHandler}>
                                <option>Choose Office Name</option>
                                {
                                    this.state.offices.length > 0 && this.state.offices.map( (office,key) => (
                                        <option key={key} value={office._id}>{office.officeName}</option>
                                    ) )
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="designation">Designation</label>
                            <select className="form-control" id="designation" name="designation" onChange={this.onChangeHandler}>
                                <option>Choose Designation</option>
                                {
                                    this.state.designations.length > 0 && this.state.designations.map( (designation,key) => (
                                        <option key={key} value={designation._id}>{designation.designation}</option>
                                    ) )
                                }
                            </select>
                        </div>

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
 
export default connect(mapStateToProps,null)(GeneralInfo) ;