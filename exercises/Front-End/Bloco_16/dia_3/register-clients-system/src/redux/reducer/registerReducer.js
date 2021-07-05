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
    case 'FILTER_CLIENTS':
      const sortedClients = [...state.clients.sort((a, b) => a.nome.localeCompare(b.nome))];
      if(action.value === "alfabetica") {
        return {
          clients: sortedClients,
        }
      }
      return {
        clients: [...state.clients.sort((a, b) => b.nome.localeCompare(a.nome))]
      }
    default:
      return state;
  }

}

export default registerReducer;
