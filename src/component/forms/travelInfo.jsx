const Travel = () => {
    return (  
        <>
            <form>

                <h1 className="text-center">Foreign Travel Information</h1>

                <label> Country </label>
                <input
                    className="form-control"
                    type="text"
                    name="country"
                /> 

                <label> Travel Purpose </label>
                <input
                    className="form-control"
                    type="text"
                    name="travel_purpose"
                /> 

                <label>Starting Date</label>
                <input
                    className="form-control"
                    type="date"
                    name="s_date"
                /> 

                <label>End Date</label>
                <input
                    className="form-control"
                    type="date"
                    name="e_date"
                /> 
            </form>
        </>
    );
}
 
export default Travel;