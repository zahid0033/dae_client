const SpouseInfo = () => {
    return (  
        <>
            <form>
                <h1 className="text-center">Spouse Information</h1>

                <label> Name </label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                /> 

                <label> District </label>
                <input
                    className="form-control"
                    type="text"
                    name="district"
                /> 

                <label> Occupation </label>
                <input
                    className="form-control"
                    type="text"
                    name="occupation"
                /> 

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

            </form>
        </>
    );
}
 
export default SpouseInfo;