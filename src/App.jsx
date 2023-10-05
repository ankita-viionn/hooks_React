// import React from "react";
// import Slotm from "./SlotMach";

// Challenge # 6 -------------------------
// const App = () => {
//     return (
//         <>
//             <h1 className="heading_style">  🎰 Welcome to
//                 <span style={{ fontWeight: "bold" }}> Slot machine game</span> 🎰 </h1>
//             <div className="slotmachine">
//                 <Slotm x='😄' y='😄' z='😄' />
//                 <Slotm x='  😸  ' y='😄' z='😸' />
//                 <Slotm x='🍌' y='🍓' z='🍓' />
//             </div>

//         </>
//     )

// }

import React, { useState } from "react";

const App = () => {
    //hookes used
    const [name, setname] = useState("");

    const [fullname, setFullName] = useState();
    const [lastname, setlastname] = useState("");
    const [lastnamenew, setlastnamenew] = useState("");

    const inputEvent = (event) => {
        // console.log(event.target.value);                
        //event used
        setname(event.target.value)
    };
    const onSubmit = (event) => {
        event.preventDefault()
        setFullName(name);       
        setlastnamenew(lastname);
    };
    const inputEventtwo = (event) => {            
        setlastname(event.target.value)
    }
    return (
        <>
            <div className="main_div">
                    <div>
                <form onSubmit={onSubmit}> 
                        <h1>Login {fullname} {lastnamenew} </h1>
                        <input type="text" placeholder="Enter your full name"
                            onChange={inputEvent} value={name} />
                        <input type="text" placeholder="Enter your last name"
                            onChange={inputEventtwo} value={lastname} />
                        <button type="submit">Submit 👍 </button>
                </form>
                    </div>
            </div>
        </>
    )
}
export default App;  