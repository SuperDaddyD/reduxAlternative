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

    case "LOG_IN":
      console.log("Action is Really Log IN!! ===>", action);

      return {
        ...state,
        login: true,
        logout: false,
      };

    case "LOG_OUT":
      return {
        ...state,
        login: false,
        logout: false,
      };
    default:
      return state;
  }
};
