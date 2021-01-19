import {Button} from "react-bootstrap";
import React,{Component} from "react";
import {connect} from "react-redux";
import axios from 'axios';

class PromotionInfo extends Component {
    state = {
        ranks : [],
        payScales : [],

        dateOfPromotion : "",
        goDate : "",
        rank : "",
        payScale : "",
        natureOfPromotion : "",
        srScaleRule : ""
    }

    componentDidMount() {
        this.fetchPayScale()
        this.Rank()
    }

    fetchRank = async () => {
        await axios.get(`/api/dropdownApi/getRank`)
            .then(res => {
                this.setState({
                    ranks : res.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

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
    };

    onChangeHandler = change => {
        this.setState({
            [change.target.name] : change.target.value
        })
    }

    onSubmit = submit => {
        submit.preventDefault();
        const {
            dateOfPromotion,
            goDate,
            rank,
            payScale,
            natureOfPromotion,
            srScaleRule
        } = this.state;

        const promotionInfo = {
            employee : this.props.auth.user.id,
            dateOfPromotion,
            goDate,
            rank,
            payScale,
            natureOfPromotion,
            srScaleRule
        };

        axios.post("/api/dbForms/addPromotionInfo", promotionInfo)
            .then(res => {
                this.setState({
                    promotionInfos : res.data
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
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                    <h1 className="text-center">Promotion Information</h1>

                        <label> Date of Promotion </label>
                        <input
                            className="form-control"
                            type="date"
                            name="dateOfPromotion"
                            onChange={this.onChangeHandler}
                        /> 

                        <label> G.O. Date </label>
                        <input
                            className="form-control"
                            type="date"
                            name="goDate"
                            onChange={this.onChangeHandler}
                        /> 

                        <div className="form-group">
                            <label htmlFor="rank">Cadre Rank</label>
                            <select className="form-control" id="rank" name="rank" onChange={this.onChangeHandler}>
                                <option>Choose Cadre Rank</option>
                                {
                                    this.state.ranks.length > 0 && this.state.ranks.map( (rank,key) => (
                                        <option key={key} value={rank._id}>{rank.rank}</option>
                                    ))
                                }
                            </select>
                        </div>

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

                        <label>Nature of Promotion</label>
                        <input
                            className="form-control"
                            type="text"
                            name="natureOfPromotion"
                            onChange={this.onChangeHandler}
                        /> 

                        <label>Senior Scale Rule</label>
                        <input
                            className="form-control"
                            type="text"
                            name="srScaleRule"
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
 
export default connect(mapStateToProps,null)(PromotionInfo) ;
