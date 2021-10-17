import React from "react"

function Reload(){
    const refreshPage = ()=>{
        window.location.reload();
     }
    return (
        <div>
            {refreshPage}
        </div>
    );
}

export default Reload;