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
// console.log(REACT_APP_API_GETDATA);

let APIs = {
  API_SAVE_BLOGS: apiPutDataUrl,
  API_GET_BLOG: apiGetDataUrl,
  API_TRANSLATE: apiTextUrl,
  API_SNS: apiSnsUrl,
};

// APIs = {
//   API_SAVE_BLOGS:
//     "https://iyoscf9357.execute-api.us-east-1.amazonaws.com/prod/",
//   API_GET_BLOG: "https://vk6kvwiau6.execute-api.us-east-1.amazonaws.com/prod/",
//   API_TRANSLATE: "https://ovfsu4o79i.execute-api.us-east-1.amazonaws.com/prod/",
//   API_SNS: "https://x4hwea9ef4.execute-api.us-east-1.amazonaws.com/prod/",
// };

export default APIs;
