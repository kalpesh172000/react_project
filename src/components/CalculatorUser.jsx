import * as Calc from "./Calculator.jsx";
function CUser() {
    return (
        <>
            <h1>This is Calculator results</h1>
            <ul>
                <li className="text-4xl">{Calc.add(1,2)}</li>
                <li className="text-4xl">{Calc.sub(5,3)}</li>
                <li className="text-4xl">{Calc.mul(2,3)}</li>
                <li className="text-4xl">{Calc.divi(12,4)}</li>
            </ul>
        </>
    );
}

export default CUser;
