export const filterClients = ({target}) => {
  const {value} = target;
  return {
    type: 'FILTER_CLIENTS',
    value,
  }
};
