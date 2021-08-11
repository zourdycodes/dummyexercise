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

    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };

    default:
      return {
        ...state,
      };
  }
};
