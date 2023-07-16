import React from "react";
import { Grid } from "@mui/material";
import NewBlogComp from "./newBlogComp/newBlogComp";
import AllBlogsComp from "./allBlogsComp/allBlogsComp";

function BlogComp({ blogPageType, updateBlogPageType }) {
  return (
    <div className="blogComp">
      {blogPageType == "new" ? (
        <NewBlogComp updateBlogPageType={updateBlogPageType} />
      ) : (
        <AllBlogsComp updateBlogPageType={updateBlogPageType} />
      )}
    </div>
  );
}

export default BlogComp;
