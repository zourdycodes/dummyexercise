export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        result: [action.payload],
        loading: false,
      };

    case "FETCH_DATA_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return {
        ...state,
      };
  }
};
