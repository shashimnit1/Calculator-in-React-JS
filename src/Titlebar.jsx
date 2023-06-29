import React from "react";
import "./Titlebar.css"

function Titlebar(Props){
    return(
        <>
            <div className='heading'>
                {Props.title}
            </div>
        </>

    );
}
export default Titlebar;