import "dotenv";

console.log("In APIs:");
console.log(process.env);
console.log(process.env.API_PUTDATA);
const APIs = {
  API_SAVE_BLOGS: process.env.API_PUTDATA,
  API_GET_BLOG: process.env.API_GETDATA,
  API_TRANSLATE: process.env.API_TEXT,
  API_SNS: process.env.API_SNS,
};

export default APIs;
