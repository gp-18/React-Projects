import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b0561373055147dd918725b230f485a9",
  },
});
