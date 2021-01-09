const Training = () => {
    return (  
        <>
            <form>

                <label>Training Type</label>
                <input
                    className="form-control"
                    type="text"
                    name="training_type"
                /> 

                <label>Training Title</label>
                <input
                    className="form-control"
                    type="text"
                    name="training_title"
                /> 

                <label>Institute Name</label>
                <input
                    className="form-control"
                    type="text"
                    name="institute"
                /> 

                <label>Country</label>
                <input
                    className="form-control"
                    type="text"
                    name="country"
                /> 

                <label>Grade</label>
                <input
                    className="form-control"
                    type="text"
                    name="grade"
                /> 

                <label>Position</label>
                <input
                    className="form-control"
                    type="text"
                    name="position"
                />

                <label>Starting Date</label>
                <input
                    className="form-control"
                    type="date"
                    name="s_date"
                />     

                <label>Finishing Date</label>
                <input
                    className="form-control"
                    type="date"
                    name="f_date"
                /> 

            </form>
        </>
    );
}
 
export default Training;