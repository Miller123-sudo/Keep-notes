import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import DoneNote from "./DoneNote";

const CompleteNotes = () => {
  const donelist = useSelector((state) => state.noteReducer.donelist);
  console.log(donelist);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="card_container">
        <div class="row">
          {donelist.map((note) => {
            // console.log(note);
            if (note.done) {
              return <DoneNote key={note.id} data={note} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default CompleteNotes;
