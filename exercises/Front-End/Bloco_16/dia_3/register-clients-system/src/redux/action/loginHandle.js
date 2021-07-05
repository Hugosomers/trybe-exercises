const loginHandle = ({ target }) => {
  const {name, value} = target;
  return {
    type: 'LOGIN_HANDLE',
    name,
    value,
  }
};

export default loginHandle;
