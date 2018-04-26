import axios from "axios";

const BASEURL = "https://pixabay.com/api/?key=";
const APIKEY = "8783037-3f3939c3c97ac95a6468181a8&q=";
const TYPE = "&image_type=photo"
 
// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query + TYPE);
  }
};
