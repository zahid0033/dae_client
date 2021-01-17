import React,{Component} from 'react'
import {Route} from "react-router-dom";
import Dashboard from "./component/dashboard";
import Login from "./component/auth/login";
import Home from "./component/agent/home";
import AgentRoute from "./component/ProtectedRoute/agentRoute";
import AdminRoute from "./component/ProtectedRoute/adminRoute";
import Topbar from "./component/template/topbar";
import LoginRoute from "./component/ProtectedRoute/loginRoute";
import Admin from "./component/admin/admin";
import EmployeeRegistration from "./component/auth/employeeRegistration";

import Sidebar from './component/sidebar/sidebar';
import GeneralInfo from './component/forms/generalInfo';
import AddressInfo from './component/forms/addressInfo';
import SpouseInfo from './component/forms/spouseInfo';
import ChildInfo from './component/forms/childInfo';
import EducationInfo from './component/forms/educationInfo'
import TrainingInfo from './component/forms/trainingInfo';
import TravelInfo from './component/forms/travelInfo';
import AwardInfo from './component/forms/awardInfo';
import PostingInfo from './component/forms/postingInfo';
import PromotionInfo from './component/forms/promotionInfo';
import PublicationInfo from './component/forms/publicationInfo';
import DisciplinaryAction from './component/forms/disciplinaryAction';

import {connect} from 'react-redux';

class Router extends Component {
    render() {
        console.log("from router",this.props.auth.user)
        return(
            <div>
                <Topbar/>
                <div className="row">
                    <div className="fixedDiv col-md-2">
                        <Sidebar/>
                    </div>
                
                    <div className="mainBody col-md-8">
                    
                        <Route exact path="/" component={Dashboard}/>
                        <LoginRoute exact path="/login" component={Login}/>
                        <LoginRoute exact path="/signup" component={EmployeeRegistration}/>
                        <AgentRoute exact path="/agent" component={Home}/>
                        <AdminRoute exact path="/admin" component={Admin}/>

                        <Route exact path="/form/generalInfo" component={GeneralInfo} />
                        <Route exact path="/form/addressInfo" component={AddressInfo} />
                        <Route exact path="/form/spouseInfo" component={SpouseInfo} />
                        <Route exact path="/form/childInfo" component={ChildInfo} />
                        <Route exact path="/form/educationInfo" component={EducationInfo} />
                        <Route exact path="/form/trainingInfo" component={TrainingInfo} />
                        <Route exact path="/form/foreignTravelInfo" component={TravelInfo} />
                        <Route exact path="/form/awardInfo" component={AwardInfo} />
                        <Route exact path="/form/postingInfo" component={PostingInfo} />
                        <Route exact path="/form/promotionInfo" component={PromotionInfo} />
                        <Route exact path="/form/publicationInfo" component={PublicationInfo} />
                        <Route exact path="/form/disciplinaryInfo" component={DisciplinaryAction} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(Router)