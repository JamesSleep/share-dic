import axios from "axios";

const SITE_URL = "http://softer052.cafe24.com/json/proc_json.php";

export const postData = data => axios.post(SITE_URL, data, {
  headers: {
    "Content-Type": "multipart/form-data"
  }
});