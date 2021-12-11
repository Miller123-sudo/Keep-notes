const initialData = {
  notelist: [],
  donelist: [],
  //   done: false,
};
let all = [];

const noteReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      const { id, title, desc } = action.payload;

      return {
        ...state,
        notelist: [
          ...state.notelist,
          {
            id: id,
            title: title,
            desc: desc,
            done: false,
          },
        ],
      };
    }
    case "DELETE_NOTE": {
      const { id, title, desc } = action.payload;
      console.log(id);
      const newlist = state.notelist.filter((el) => el.id !== id);
      console.log("newlist: ", newlist);
      const alllist = state.notelist.filter((el) => el.id == id);
      console.log("all list: ", alllist[0].title);

      all.push(alllist[0]);
      console.log("donelist: ", all);

      return {
        ...state,
        notelist: newlist,
        donelist: [
          ...state.donelist,
          {
            id: alllist[0].id,
            title: alllist[0].title,
            desc: alllist[0].desc,
            done: true,
          },
        ],
      };
    }

    default:
      return state;
  }
};

export default noteReducer;
