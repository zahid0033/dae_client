const Publication = () => {
    return (  
        <>
            <form>
                <h1 className="text-center">Promotion Information</h1>

                <label>Publication Type</label>
                <input
                    className="form-control"
                    type="text"
                    name="pub_type"
                /> 

                <label> Title </label>
                <input
                    className="form-control"
                    type="text"
                    name="title"
                /> 

                <label> Date </label>
                <input
                    className="form-control"
                    type="date"
                    name="pub_date"
                /> 

            </form>
        </>
    );
}
 
export default Publication;