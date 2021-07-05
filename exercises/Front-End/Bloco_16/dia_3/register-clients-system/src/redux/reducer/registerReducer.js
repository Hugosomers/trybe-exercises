const INITIAL_STATE = {
  clients: [],
}

const registerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_CLIENT':
      return {
        clients: [...state.clients, action.state]
      };
    case 'DELETE_CLIENT':
      return {
        clients: state.clients.filter((client, index) => index !== action.index),
      }
    default:
      return state;
  }

}

export default registerReducer;
