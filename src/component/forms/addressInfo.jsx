const Address = () => {
    return ( 
        <>
            <form>
            
                <h3>Permanent Address</h3>

                <label>District</label>
                <input
                    className="form-control"
                    type="text"
                    name="district"
                />
                
                <label>Upazilla /PS </label>
                <input
                    className="form-control"
                    type="text"
                    name="upazilla"                
                />

                <label>Post Office</label>
                <input
                    className="form-control"
                    type="text"
                    name="post_office"
                />

                <label>Village /House</label>
                <input
                    className="form-control"
                    type="text"
                    name="road"
                />

                <label>Road /Block /Sector</label>
                <input
                    className="form-control"
                    type="text"
                    name="house"
                />

                <h3>Present Address</h3>

                <label>District</label>
                <input
                    className="form-control"
                    type="text"
                    name="district"
                />

                <label>Upazilla /PS </label>
                <input
                    className="form-control"
                    type="text"
                    name="upazilla"                
                />

                <label>Post Office</label>
                <input
                    className="form-control"
                    type="text"
                    name="post_office"
                />

                <label>Village /House</label>
                <input
                    className="form-control"
                    type="text"
                    name="road"
                />

                <label>Road /Block /Sector</label>
                <input
                    className="form-control"
                    type="text"
                    name="house"
                />

            </form>
        </>
    );
}
 
export default Address;