const Education = () => {
    return (  
        <>
            <form>
            <h1 className="text-center">Education Information</h1>

            <label>Degree</label>
            <input
                className="form-control"
                type="text"
                name="degree"
            />                

            <label>Group /Subject</label>
            <input
                className="form-control"
                type="text"
                name="group"
            /> 

            <label>Institute</label>
            <input
                className="form-control"
                type="text"
                name="institute"
            />

            <label>Board</label>
            <input
                className="form-control"
                type="text"
                name="board"
            />

            <label>GPA</label>
            <input
                className="form-control"
                type="text"
                name="gpa"
            />

            <label>Passing Year</label>
            <input
                className="form-control"
                type="number"
                name="year"
            />
            
            </form>
        </>
    );
}
 
export default Education;