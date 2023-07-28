import React, { useState } from "react";
import { Grid } from "@mui/material";
import SideBarComp from "../../components/sideBarComp/sideBarComp";
import BlogComp from "../../components/blogComp/blogComp";

function BlogPage() {
  const [blogPageType, updateBlogPageType] = useState("new");

  const setUpdatePageType = (pageType) => {
    updateBlogPageType(pageType);
    console.log("in page blog:", blogPageType, pageType);
  };

  return (
    <div className="blogPage">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SideBarComp
            blogPageType={blogPageType}
            setUpdatePageType={setUpdatePageType}
          />
        </Grid>
        <Grid item xs={10}>
          <BlogComp
            blogPageType={blogPageType}
            setUpdatePageType={setUpdatePageType}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default BlogPage;
