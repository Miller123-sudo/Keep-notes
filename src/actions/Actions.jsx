export const addNote = (note) => {
  console.log(note);
  return {
    type: "ADD_NOTE",
    payload: {
      id: new Date().getTime().toString(),
      title: note.title,
      desc: note.desc,
    },
  };
};

export const deleteNote = (id, title, desc) => {
  //   console.log(id);
  return {
    type: "DELETE_NOTE",
    payload: {
      id: id,
      title: title,
      desc: desc,
    },
  };
};
