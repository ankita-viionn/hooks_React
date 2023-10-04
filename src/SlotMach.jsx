import React from "react";

const Slotm = (props) => {
    // let x = "😄";
    // let y = "😄";
    // let z = "🎅";

    let { x, y, z } = props; 
    if (x === y && y === z) {
        return (
            <>
                <div className="inner_slot">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is matching</h1>
                    <hr />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="inner_slot">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is not matching</h1>
                    <hr />
                </div>
            </>
        )

    }
}
export default Slotm