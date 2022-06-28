import axios from "axios";

export const getPlayer = () => {
  try {

    axios({
      method: "get",
      url: "/players/%23QUYCVC2",
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      });
  } catch(error){
    console.error(error);
  }
};