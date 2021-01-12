const GeneralInfo = () => {
    return (  
        <>
            <div className="container">
                <form>

                    <h1 className="text-center">General Information</h1>

                    <label>Father's Name</label>
                    <input
                        className="form-control"
                        type="text"                        
                        name="f_name"
                    />                    

                    <label>Mother's Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="m_name"
                    />         

                    <label>Home District</label>           
                    <input
                        className="form-control"
                        type="text"
                        name="home_district"
                    />

                    <label>Sex</label>
                    <input
                        className="form-control"
                        type="text"
                        name="sex"
                    />

                    <label>Marital Status</label>
                    <input
                        className="form-control"
                        type="text"
                        name="marital_status"
                    />

                    <label>Religion</label>
                    <input
                        className="form-control"
                        type="text"
                        name="religion"
                    />

                    <label>BCS Batch</label>
                    <input
                        className="form-control"
                        type="text"
                        name="batch"
                    />

                    <label>Cadre Rank</label>
                    <input
                        className="form-control"
                        type="text"
                        name="rank"
                    />

                    <label>Office Division</label>
                    <input
                        className="form-control"
                        type="text"
                        name="division"
                    />

                    <label>Office Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="office"
                    />

                    <label>Designation</label>
                    <input
                        className="form-control"
                        type="text"
                        name="designation"
                    />

                </form>
            </div>
        </>
    );
}
 
export default GeneralInfo;