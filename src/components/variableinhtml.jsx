function Variableinhtml() {
    let fname = "kalpesh";
    let lname = "patil";
    let dobyear = 2000;
    let todayyear = 2024;
    let d = new Date();
    return (
        <>
            <h1 contentEditable='true' spellCheck='false' className="bold">
                My name is {`${fname} ${lname}`} and I am {todayyear - dobyear} years old
            </h1>
            <h1>
                Created by {fname} {lname}
            </h1>
            <h1>&copy; {d.getFullYear()}</h1>
        </>
    );
}
export default Variableinhtml;
