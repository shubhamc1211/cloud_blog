import React from "react";
import { Grid } from "@mui/material";
import NewBlogComp from "./newBlogComp/newBlogComp";
import AllBlogsComp from "./allBlogsComp/allBlogsComp";

function BlogComp({ blogPageType, setUpdatePageType }) {
  return (
    <div className="blogComp">
      {blogPageType == "new" ? (
        <NewBlogComp setUpdatePageType={setUpdatePageType} />
      ) : (
        <AllBlogsComp
          setUpdatePageType={setUpdatePageType}
          blogPageType={blogPageType}
        />
      )}
    </div>
  );
}

export default BlogComp;
