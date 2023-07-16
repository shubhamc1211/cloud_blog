import "dotenv/config";

const apiGetDataUrl = process.env.REACT_APP_API_GETDATA;
const apiPutDataUrl = process.env.REACT_APP_API_PUTDATA;
const apiSnsUrl = process.env.REACT_APP_API_SNS;
const apiTextUrl = process.env.REACT_APP_API_TEXT;

console.log("In APIs:");
console.log(process.env);
console.log(process.env.API_PUTDATA);
const APIs = {
  API_SAVE_BLOGS: apiPutDataUrl,
  API_GET_BLOG: apiGetDataUrl,
  API_TRANSLATE: apiTextUrl,
  API_SNS: apiSnsUrl,
};

export default APIs;
