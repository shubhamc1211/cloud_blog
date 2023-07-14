import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import BlogCardComp from "../../blogCardComp/blogCardComp";
import APIs from "../../../util/APIs";

function AllBlogsComp() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APIs.API_GET_BLOGS);
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {blogData.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <BlogCardComp
              title={blog.title}
              author={blog.author}
              sentiment={blog.sentiment}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AllBlogsComp;
