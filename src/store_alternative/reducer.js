export const intialState = {
  login: false,
  logout: true,
  todo: [],
};

export const todontReducer = (state = intialState, action) => {
  console.log("Action is ===>", action);
  switch (action.type) {
    case "ADD_TODO_ITEM":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "REMOVE_TODO":
      console.log("Removed", state.todo);
      return {
        ...state,
        todo: state.todo.filter((item) => item.name !== action.payload),
      };
    case "LOG_IN ":
      return {
        ...state,
        login: true,
        logout: false,
      };
    case "LOG_OUT ":
      return {
        ...state,
        login: false,
        logut: true,
      };
    default:
      return state;
  }
  console.log("State State -->", state.todo);
};
