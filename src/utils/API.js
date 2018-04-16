import axios from "axios";

const BASEURL = "https://dog.ceo/api/";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  searchImage: function() {
    const randImage = "breeds/image/random";
    return axios.get(BASEURL + randImage);
  }, 
  search: function(query) {
    let breedSearch = `breed/${query}/images`;
    return axios.get(BASEURL + breedSearch);
  }
}
