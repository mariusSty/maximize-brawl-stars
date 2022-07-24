import axios from "axios";

export const getPlayer = async (tag: string) => {
  try {
    const reqGetPlayer = await axios({
      method: "get",
      url: `/players/%23${tag}`,
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return reqGetPlayer?.data;
  } catch(error){
    console.error("Une erreur est survenue lors de la récupération du joueur : ", error);
  }
};