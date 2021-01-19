import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios'

class PostingInfo extends Component {
    state = {
        designations : [],
        payScales : [],

        designation : "",
        organization : "",
        country : "",
        orderDate : "",
        joiningDate : "",
        payScale : "",
        status : ""
    }

    componentDidMount () {
        this.fetchDesignation()
        this.fetchPayScale()
    }

    fetchDesignation = async () => {
        await axios.get(`/api/dropdownApi/getDesignation`)
            .then(res => {
                this.setState({
                    designations: res.data.data
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    fetchPayScale = async () => {
        await axios.get(`/api/dropdownApi/getPayScale`)
            .then(res => {
                this.setState({
                    payScales : res.data.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    onChangeHandler = change => {
        this.setState({
            [change.target.name] : change.target.value
        });
    }

    onSubmit = submit => {
        submit.preventDefault();
        const {
            designation,
            organization,
            country,
            orderDate,
            joiningDate,
            payScale,
            status
        } = this.state

        const payScaleInfo = {
            employee : this.props.auth.user.id,
            designation,
            organization,
            country,
            orderDate,
            joiningDate,
            payScale,
            status
        }

        axios.post("/api/dbForms/addPostingInfo", payScaleInfo)
            .then(res => {
                this.setState({
                    payScaleS : res.data
                });
                alert("successfully added");                
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
                        <h1 className="text-center">Posting Information</h1>

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

                        <label> Organization </label>
                        <input
                            className="form-control"
                            type="text"
                            name="organization"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>Country</label>
                        <input
                            className="form-control"
                            type="text"
                            name="country"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>Order Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name="orderDate"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>Joining Date</label>
                        <input
                            className="form-control"
                            type="date"
                            name="joiningDate"
                            onChange={this.onChangeHandler}
                        /> 

                        <div className="form-group">
                            <label htmlFor="payScale">Pay Scale</label>
                            <select className="form-control" id="payScale" name="payScale" onChange={this.onChangeHandler}>
                                <option>Choose Pay Scale</option>
                                {
                                    this.state.payScales.length > 0 && this.state.payScales.map( (payScale,key) => (
                                        <option key={key} value={payScale._id}>{payScale.year} || {payScale.amount}</option>
                                    ) )
                                }
                            </select>
                        </div>

                        <label>Status</label>
                        <input
                            className="form-control"
                            type="text"
                            name="status"
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
 
export default connect(mapStateToProps,null)(PostingInfo) ;
