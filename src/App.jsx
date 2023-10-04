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

    //hooks used in useState
    const state = useState();
    const [count, setCount] = useState(0);

    const IncNum = () => {

        setCount(count + 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>click me</button>
        </>
    )

}
export default App;  