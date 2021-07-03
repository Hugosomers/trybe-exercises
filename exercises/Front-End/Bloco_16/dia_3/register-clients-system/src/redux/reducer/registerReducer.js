const INITIAL_STATE = {
  clients: [],
}

const registerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_CLIENT':
      return {
        clients: [...state.clients, action.state]
      };
    default:
      return state;
  }

}

export default registerReducer;
