import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import BlogCardComp from "../../blogCardComp/blogCardComp";
import APIs from "../../../util/APIs";
import axios from "axios";
import "./allBlogsComp.css";
import { BorderBottom, Height } from "@mui/icons-material";

function AllBlogsComp({ setUpdatePageType, blogPageType }) {
  const [blogData, setBlogData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Getting data from: ", APIs.API_GET_BLOG);
        const response = await axios.get(APIs.API_GET_BLOG);
        const data = await response.data;
        console.log(response);
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }

      setUpdatePageType("view");
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("in use effect:", blogPageType);
    console.log("in use effect:", selectedBlog);
  }, [blogPageType, selectedBlog]);

  const handleAddComment = async (event, blog) => {
    event.preventDefault();
    if (comment == "") {
      return;
    }
    blog.comments.push(comment);
    // const isComment = false;
    blog["isComment"] = true;

    console.log("comment data:", blog);

    try {
      console.log("ID:", blog["id"]);
      console.log("Request send to:", APIs.API_SAVE_BLOGS);
      const response = await axios.post(APIs.API_SAVE_BLOGS, blog);
      console.log("Request done");
      console.log(response);
      if (response) {
        // Blog data saved successfully
        console.log("Comment data saved successfully");
      } else {
        // Error saving blog data
        console.error("Error saving blog data", response.error);
      }
    } catch (error) {
      // Network error or other issues
      console.error("Error:", error.response.data);
    }

    // Send mail
    // console.log("Email data:", blog, email);
    const data = {
      topicArn: blog.topicArn,
      isSubscribe: false,
      message: `Comment: ${comment}`,
      subject: `${blog.title} got a new comment`,
      email: "",
    };
    try {
      console.log("ID:", blog["id"]);
      console.log("Request send to:", APIs.API_SNS);
      const response = await axios.post(APIs.API_SNS, data);
      console.log("Request done");
      console.log(response);
      if (response) {
        // Blog data saved successfully
        console.log("Mail sentsuccessfully");

        // Reset the form
        // setComment("");
      } else {
        // Error saving blog data
        console.error("Error saving blog data", response.error);
      }
    } catch (error) {
      // Network error or other issues
      console.error("Error:", error.response.data);
    }

    // Reset the form
    setComment("");
  };

  const handleSubscribe = async (event, blog) => {
    event.preventDefault();
    if (email == "") {
      return;
    }
    // blog.comments.push(comment);

    console.log("Email data:", blog, email);
    const data = {
      topicArn: blog.topicArn,
      isSubscribe: true,
      message: "",
      subject: "",
      email: email,
    };
    try {
      console.log("ID:", blog["id"]);
      console.log("Request send to:", APIs.API_SNS);
      const response = await axios.post(APIs.API_SNS, data);
      console.log("Request done");
      console.log(response);
      if (response) {
        // Blog data saved successfully
        console.log("Email subscribed successfully");

        // Reset the form
      } else {
        // Error saving blog data
        console.error("Error saving blog data", response.error);
      }
    } catch (error) {
      // Network error or other issues
      console.error("Error:", error.response.data);
    }

    setEmail("");
  };

  const updateSelectedBlog = (blog) => {
    setUpdatePageType(blog.id);
    setSelectedBlog(blog);
    console.log(blog.id + " clicked");
  };

  if (blogPageType === "view") {
    return (
      <div>
        <Grid container spacing={2}>
          {blogData.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <div id={blog.id} onClick={() => updateSelectedBlog(blog)}>
                <BlogCardComp
                  title={blog.title}
                  author={blog.author}
                  likes={blog.likes}
                  comments={blog.comments}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Box border={1} margin={1} p={2} borderRadius={4}>
          <Typography variant="h4" gutterBottom>
            {selectedBlog.title}
          </Typography>
          <Typography variant="subtitle2" className="authorName" gutterBottom>
            By: {selectedBlog.author}
          </Typography>
          <Typography variant="body1" className="blogText" gutterBottom>
            {selectedBlog.text}
          </Typography>

          {/* Like and Dislike Buttons
        <div className={"ikeDislikeContainer"}>
          <IconButton aria-label="Like" className={"likeButton"}>
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="Dislike">
            <ThumbDownIcon />
          </IconButton>
        </div> */}

          {/* Comment Box */}

          <Box border={1} margin={1} p={2} borderRadius={4}>
            <TextField
              id="outlined-multiline-static"
              label="Leave a comment"
              // multiline
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <div className="addCommentClassDiv">
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => handleAddComment(e, selectedBlog)}
                className="addCommentClass"
              >
                Add Comment
              </Button>
            </div>
            <Typography variant="h4" gutterBottom>
              Comments
            </Typography>
            <List>
              {selectedBlog.comments.map((comment, index) => (
                <Box border={1} margin={1} p={0} borderRadius={4}>
                  <ListItem key={index}>
                    <ListItemText primary={comment} />
                  </ListItem>
                </Box>
              ))}
            </List>

            <Grid container spacing={1}>
              <Grid item xs={10}>
                <div>
                  <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className="addCommentClassDiv">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => handleSubscribe(e, selectedBlog)}
                    className="addCommentClass"
                    fullWidth
                    // sx={(Height = "100%")}
                  >
                    Subscribe
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    );
  }
}

export default AllBlogsComp;
