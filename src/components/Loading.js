import loadingAnimation from "../assets/animations/loading.gif";

export const Loading = () => {
  return (
    <img
      src={loadingAnimation}
      alt="loading spinner"
      style={{
        height: "200px",
      }}
    />
  );
};
