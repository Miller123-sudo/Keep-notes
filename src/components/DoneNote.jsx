import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteNote } from "../actions/Actions";

const DoneNote = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data);

  return (
    <div class="column" key={data.id}>
      <div class="card">
        <h3></h3>
        <p>{data.title}</p>
        <p>{data.desc}</p>
        <button>
          <DeleteIcon
            className="delete_btn"
            onClick={() => dispatch(deleteNote(data.id, data.title, data.desc))}
          />
        </button>
      </div>
    </div>
  );
};

export default DoneNote;
