const INITIAL_STATE = {
  email: '',
  senha: '',
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOGIN_HANDLE':
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}

export default loginReducer;
