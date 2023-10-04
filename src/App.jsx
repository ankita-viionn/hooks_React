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
    const inputEvent = (event) => {
        // console.log(event.target.value);
        //event used
        setname(event.target.value)
    };
    const onSubmit = () => {
        setFullName(name);
    };
    return (
        <>
            <div>
                <h1>Hello {fullname}</h1>
                <input type="text" placeholder="please fill your name" onChange={inputEvent} value={name}></input>
                <button onClick={onSubmit}>click me 👍 </button>
            </div>
        </>
    )

}
export default App;  