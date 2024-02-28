import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
const Textarea = ({ color, text }) => {
  const [note, setNote] = useState("");
  function check(e) {
    setNote(e.target.value);
  }
  function upper() {
    let a = note.toUpperCase();
    setNote(a);
  }
  function lower() {
    let a = note.toLowerCase();
    setNote(a);
  }
  function erase() {
    let a = note;
    a = "";
    setNote(a);
  }
  return (
    <div className={`bg-${color} text-${text} px-3 d-flex`}>
      <div>
        <FloatingLabel controlId="floatingTextarea2">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "150px", width: "700px" }}
            onChange={check}
            value={note}
          />
        </FloatingLabel>
        <button className="btn btn-primary " onClick={upper}>
          UpperCase
        </button>
        <button className="btn btn-primary m-2" onClick={lower}>
          LowerCase
        </button>
        <button className="btn btn-primary" onClick={erase}>
          Erase All
        </button>
        <h1 className="">Retain:</h1>
        <p>{note}</p>
        
      </div>
      <div  className="px-4">
      <h4>Number of Words:</h4>
      <h5>{(note.split(' ')).length}:Number of words</h5>
      <h5>{(note).length}:Number of letters</h5>
      
      </div>
      
    </div>
  );
};

export default Textarea;
