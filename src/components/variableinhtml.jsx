function Variableinhtml(){
    let fname = 'kalpesh'
    let lname = 'patil'
    let dobyear = 2000;
    let todayyear = 2024;
    return(
        <>
            <h1>My name is {`${fname} ${lname}`} and I am {todayyear-dobyear} years old</h1>
            <h1>Created by {fname} {lname}</h1>
            <h1>&copy; 2024</h1>
        </>
    )

}
export default Variableinhtml