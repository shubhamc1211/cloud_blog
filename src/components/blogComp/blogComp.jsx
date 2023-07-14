import React from "react";
import { Grid } from "@mui/material";
import NewBlogComp from "./newBlogComp/newBlogComp";
import AllBlogsComp from "./allBlogsComp/allBlogsComp";

function BlogComp({ blogPageType }) {
  return (
    <div className="blogComp">
      {blogPageType == "new" ? <NewBlogComp /> : <AllBlogsComp />}
    </div>
  );
}

export default BlogComp;
