import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addNote } from "../actions/Actions";
import Note from "./Note";

import "./../App.css";
import DoneNote from "./DoneNote";

const CreateNote = ({ passNote }) => {
  const notelist = useSelector((state) => state.noteReducer.notelist);
  console.log(notelist);

  const donelist = useSelector((state) => state.noteReducer.donelist);
  console.log(donelist);

  const dispatch = useDispatch();

  const [note, setnote] = useState({
    title: "",
    desc: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setnote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  // console.log(note);

  const addEvent = () => {
    passNote(note);
  };

  return (
    <>
      <form action="">
        <div className="form_container">
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEvent}
            className="input_title"
            placeholder="title"
          />
          <textarea
            className="desc"
            name="desc"
            value={note.desc}
            onChange={inputEvent}
            placeholder="description..."
          ></textarea>

          <Button
            onClick={() =>
              dispatch(
                addNote(note),

                setnote({
                  title: "",
                  desc: "",
                })
              )
            }
          >
            <AddIcon />
          </Button>
        </div>
      </form>

      <h3>Pending notes:</h3>
      <div className="card_container">
        <div class="row">
          {notelist.map((note) => {
            // console.log(note);
            if (!note.done) {
              return <Note key={note.id} data={note} />;
            }
          })}
        </div>
      </div>

      {/* <h3>Completed notes:</h3> */}
      {/* <div className="card_container">
        <div class="row">
          {donelist.map((note) => {
            // console.log(note);
            if (note.done) {
              return <DoneNote key={note.id} data={note} />;
            }
          })}
        </div>
      </div> */}
    </>
  );
};

export default CreateNote;
