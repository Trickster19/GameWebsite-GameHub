import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4ca1a105309d4e988b1d70d6ebe9f143",
  },
});
