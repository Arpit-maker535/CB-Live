const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, actions.payload],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== actions.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
