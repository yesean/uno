import React, { useState } from "react";

const Home = ({ setName }) => {
  const [box, setBox] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(box);
  };

  const handleNameChange = (e) => {
    setBox(e.target.value);
  };

  return (
    <div>
      <center>
        <h3>Welcome to Uno!</h3>
        <h3>Enter Name:</h3>
      </center>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <center>
            <input value={box} onChange={handleNameChange} font-size='30'/>
          </center>
        </div>
        <div>
        <center>
          <button type="submit">JOIN</button>
          </center>
        </div>
      </form>
    </div>
  );
};

export default Home;
