import React, { useState } from "react";

const App = () => {
    const [color, setColor] = useState("white");

    return (

        <div>
            <div className="main" style={{ background: color }} >
                <div className="btn-block">
                    <button className="btn-grad" style={{ backgroundColor: "red", color: "white" }}
                        onClick={() => setColor("red")}>Red</button>
                    <button className="btn-grad" style={{ backgroundColor: "green", color: "white" }}
                        onClick={() => setColor("green")}>Green</button>
                    <button className="btn-grad" style={{ backgroundColor: "blue", color: "white" }}
                        onClick={() => setColor("blue")}>Blue</button>
                    <button className="btn-grad" style={{ backgroundColor: "orange", color: "white" }}
                        onClick={() => setColor("orange")}>Orange</button>
                    <button className="btn-grad" style={{ backgroundColor: "olive", color: "white" }}
                        onClick={() => setColor("olive")}>Olive</button>
                    <button className="btn-grad" style={{ backgroundColor: "grey", color: "white" }}
                        onClick={() => setColor("grey")}>Grey</button>
                    <button className="btn-grad" style={{ backgroundColor: "tomato", color: "white" }}
                        onClick={() => setColor("tomato")}>Tomato</button>

                </div>

            </div>
        </div>

    );

}

export default App;