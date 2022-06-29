import axios from "axios";

export const getPlayer = async (tag: string) => {
  try {
    const res = await axios({
      method: "get",
      url: `/players/%23${tag}`,
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return res?.data;
  } catch(error){
    console.error(error);
  }
};