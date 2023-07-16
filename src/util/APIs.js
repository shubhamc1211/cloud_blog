import {
  REACT_APP_API_GETDATA,
  REACT_APP_API_PUTDATA,
  REACT_APP_API_SNS,
  REACT_APP_API_TEXT,
} from "./URLs";

const apiGetDataUrl = REACT_APP_API_GETDATA;
const apiPutDataUrl = REACT_APP_API_PUTDATA;
const apiSnsUrl = REACT_APP_API_SNS;
const apiTextUrl = REACT_APP_API_TEXT;

console.log("In APIs:");
console.log(REACT_APP_API_GETDATA);
const APIs = {
  API_SAVE_BLOGS: apiPutDataUrl,
  API_GET_BLOG: apiGetDataUrl,
  API_TRANSLATE: apiTextUrl,
  API_SNS: apiSnsUrl,
};

export default APIs;
