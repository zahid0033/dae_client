const Promotion = () => {
    return (  
        <>
            <form>

                <label> Date of Promotion </label>
                <input
                    className="form-control"
                    type="date"
                    name="promotion_date"
                /> 

                <label> G.O. Date </label>
                <input
                    className="form-control"
                    type="date"
                    name="go_date"
                /> 

                <label> Rank </label>
                <input
                    className="form-control"
                    type="number"
                    name="rank"
                /> 

                <label>Pay Scale</label>
                <input
                    className="form-control"
                    type="text"
                    name="pay_scale"
                />

                <label>Nature of Promotion</label>
                <input
                    className="form-control"
                    type="text"
                    name="promotion_nature"
                /> 

                <label>Senior Scale Rule</label>
                <input
                    className="form-control"
                    type="text"
                    name="sr_scale_rule"
                />                             

            </form>
        </>
    );
}
 
export default Promotion;