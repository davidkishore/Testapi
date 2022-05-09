import axios from "axios";

const getDataSuccess = (data) => {
  return {
    type: "getdata",
    payload: data,
  };
};
const errorfun = (error) => {
  console.log("error", error);
};

export const getData = () => {
  return (dispatch) => {
    axios
      .get("https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7")
      .then((response) => {
        // console.log(response.data);
        dispatch(getDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(errorfun(error));
      });
  };
};
