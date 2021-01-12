const DisciplinaryAction = () => {
    return (  
        <>
            <form>
                <h1 className="text-center">Disciplinary Action Information</h1>

                <label>GO Date</label>
                <input
                    className="form-control"
                    type="date"
                    name="name"
                />

                <label>Offense</label>
                <input
                    className="form-control"
                    type="text"
                    name="offense"
                />

                <label>Nature of Punishment</label>
                <input
                    className="form-control"
                    type="text"
                    name="punishment_nature"
                />

                <label>Punishment</label>
                <input
                    className="form-control"
                    type="text"
                    name="punishment"
                />
                
            </form>
        </>
    );
}
 
export default DisciplinaryAction;