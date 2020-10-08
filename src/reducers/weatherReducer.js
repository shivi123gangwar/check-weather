export default (data = [], action) => {
  if (action.type === "FETCH_WEATHER") {
    return [action.payload];
  }
  return data;
};
