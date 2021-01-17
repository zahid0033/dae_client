const Award = () => {
    return (  
        <>
            <form>
            <h1 className="text-center">Award Information</h1>

                <label> Name </label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                /> 

                <label> Ground </label>
                <input
                    className="form-control"
                    type="text"
                    name="ground"
                /> 

                <label> Date </label>
                <input
                    className="form-control"
                    type="date"
                    name="award_date"
                /> 
                
            </form>
        </>
    );
};
 
export default Award;