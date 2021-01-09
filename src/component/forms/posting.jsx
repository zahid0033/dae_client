const Posting = () => {
    return (  
        <form>

            <label> Designation </label>
            <input
                className="form-control"
                type="text"
                name="designation"
            /> 

            <label> Organization </label>
            <input
                className="form-control"
                type="text"
                name="organization"
            /> 

            <label>Country</label>
            <input
                className="form-control"
                type="text"
                name="country"
            /> 

            <label>Order Date</label>
            <input
                className="form-control"
                type="date"
                name="o_date"
            /> 

            <label>Joining Date</label>
            <input
                className="form-control"
                type="date"
                name="j_date"
            /> 

            <label>Pay Scale</label>
            <input
                className="form-control"
                type="text"
                name="pay_scale"
            />

            <label>Status</label>
            <input
                className="form-control"
                type="text"
                name="status"
            />

        </form>
    );
};
 
export default Posting;