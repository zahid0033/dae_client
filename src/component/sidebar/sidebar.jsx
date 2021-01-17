import { NavLink } from 'react-router-dom';

const style = {
    color: 'red',
    fontWeight: 'bold'
};

const Sidebar = () => {
    return (  
        <>
            <div className="" id="wrapper">

                <div className="bg-light border-right" id="sidebar-wrapper">
                    <h5>Employee Form</h5>
                    <div className="list-group list-group-flush">

                        <NavLink activeStyle={style} exact to='/form/generalInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        General Info
                        </NavLink>

                        <NavLink activeStyle={style} exact to='/form/addressInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        Address Info
                        </NavLink>

                        <NavLink activeStyle={style} exact to='/form/spouseInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        Spouse Info
                        </NavLink>

                        <NavLink activeStyle={style} exact to='/form/childInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        Child Info
                        </NavLink>

                        <NavLink activeStyle={style} exact to='/form/educationInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        Education Info
                        </NavLink>

                        <NavLink activeStyle={style} exact to='/form/trainingInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        Training Info
                        </NavLink>

                        <NavLink activeStyle={style} exact to='/form/foreignTravelInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        Foreign Travel Info
                        </NavLink>

                        <NavLink activeStyle={style} exact to='/form/awardInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        Award Info
                        </NavLink>

                        <NavLink activeStyle={style} exact to='/form/postingInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        Posting Info
                        </NavLink>

                        <NavLink activeStyle={style} exact to='/form/promotionInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        Promotion Info
                        </NavLink>

                        <NavLink activeStyle={style} exact to='/form/publicationInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        Publication Info
                        </NavLink>    

                        
                        <NavLink activeStyle={style} exact to='/form/disciplinaryInfo' className="list-group-item list-group-item-action bg-light"
                        >
                        Disciplinary Action
                        </NavLink>                        


                        </div>                                                    
                </div>

            </div>
        </>
    );
}
 
export default Sidebar;