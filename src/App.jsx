import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [bgColor, setBgColor] = useState("");
  const [color, setColor] = useState("");
  const [text, setText] = useState("");

  const GettingInputsData = () => {
    const dispObj = {
      bgColor,
      text,
      color,
    };
    setData([...data, dispObj]);
    console.log(data);
  };

  return (
    <div className="container">
      <div className="getInputData">
        <label htmlFor="bgColor">
          Backgound Color
          <input
            onChange={(e) => setBgColor(e.target.value)}
            type="color"
            id="bgColor"
          />
        </label>
        <label htmlFor="textColor">
          Enter text color
          <input
            onChange={(e) => setColor(e.target.value)}
            type="color"
            id="textColor"
          />
        </label>
        <label htmlFor="text">
          Type Here
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Type here...."
            id="text"
          />
        </label>
        <button onClick={GettingInputsData}>Add</button>
      </div>
      <div className="dispInputData">
        {data.map((obj, ind) => {
       return  <div
            key={ind}
            style={{ background: obj.bgColor }}
            className="dispCards"
          >
            <p style={{ color: obj.color }}>{obj.text}</p>
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;