import axios from "axios";

const linkAPI = axios.create({
  baseURL: "https://api.shrtco.de/v2",
});

export const handleShortenLink = async (longLink: string) => {
  const res = await linkAPI.post(
    `https://api.shrtco.de/v2/shorten?url=${longLink}`
  );
  return res.data;
};
