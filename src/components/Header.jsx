import React, { useState } from "react";
import Textarea from "./Textarea";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
const Header = () => {
  const [mode, setMode] = useState("Light mode");
  const [color, setColor] = useState("light");
  const [text, setText] = useState("dark");

  const change = () => {
    if(mode==='Light mode'){
      setColor('dark')
      setText('light')
      setMode('Dark mode')
      
    }
    else{
      setColor('light')
      setText('dark')
      setMode("Light mode")
    }
  };
  return (
    <>
      <div className="pt-2">
        <div className={`d-flex justify-content-between px-3 text-${text} bg-${color}`}>
          <h1>Word Counter</h1>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label={mode}
              onClick={change}
            />
          </Form>
        </div>
        <Textarea color={color} text={text} />
      </div>
    </>
  );
};

export default Header;
