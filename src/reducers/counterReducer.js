const counterReducer = (state, action) => {
  if (action.type === "Increament") {
    return state + 1;
  }
  if (action.type === "Decreament") {
    return state - 1;
  }

  return state;
};

export { counterReducer };
