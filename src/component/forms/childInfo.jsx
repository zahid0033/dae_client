const Child = () => {
    return (  
        <>
            <form>

                <label>Name</label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                />

                <label>Date of Birth</label>
                <input
                    className="form-control"
                    type="date"
                    name="dob"
                />

                <label>Sex</label>
                <input
                    className="form-control"
                    type="text"
                    name="sex"
                />

            </form>
        </>
    );
}
 
export default Child;