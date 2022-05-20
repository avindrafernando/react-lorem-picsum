import axios from "axios";

const PostsApi = {
  getPosts() {
    return axios.get("https://picsum.photos/list").then((response) => {
      return response.data;
    });
  },
};

export default PostsApi;
