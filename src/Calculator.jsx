import React, { useState } from "react";
import "./Calculator.css"

const Calculator = () => {
    const [exp1, updateExp1] = useState("");
    const [exp2, updateExp2] = useState("");
    const [op, updateOp] = useState("Yes")
    let buttons = ["AC", "Back", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
    const update = (event) => {
        switch (event.target.value) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                updateOp("No");
                updateExp1(exp1 + event.target.value)
                break;
            case "+":
            case "-":
            case "/":
            case "*":
            case "%":
                if (op === "No") {
                    updateExp1(exp1 + event.target.value)
                    updateOp("Yes");
                }
                else {
                    updateExp1(exp1.substring(0, exp1.length - 1) + event.target.value);
                }
                break;
            case "AC":
                updateExp1(""); updateExp2("");
                break;
            case "Back":
                if (op === "Yes") {
                    updateOp("No");
                }
                updateExp1(exp1.substring(0, exp1.length - 1));
                break;
            case "=":
                if (op === "No") {
                    updateExp2(eval(exp1))
                }
                break;
            default: break;
        }

    }

    return (
        <>
            <div className="box">
                <div className="Inbox">
                    <input style={{ fontSize: "18px" }} type="text" value={exp2}></input>
                    <input type="text" value={exp1}></input>
                </div>
                <div className="box1">
                    {buttons.map((currentElement, index) => {
                        return (<button className="button" onClick={update} value={currentElement} key={index}>{currentElement}</button>)
                    })
                    }
                </div>



            </div>


        </>
    );
}
export default Calculator;