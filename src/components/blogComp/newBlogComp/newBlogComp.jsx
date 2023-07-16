import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import APIs from "../../../util/APIs";
import axios from "axios";

function NewBlogComp({ updateBlogPageType }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data payload
    const data = {
      title,
      author,
      text,
      email,
    };

    console.log(data);

    try {
      // Make a POST request to your backend API endpoint
      console.log("Request send to:", APIs.API_SAVE_BLOGS);
      const response = await axios.post(APIs.API_SAVE_BLOGS, data);
      console.log("Request done");
      console.log(response);
      if (response) {
        // Blog data saved successfully
        console.log("Blog data saved successfully");

        // Reset the form
        setTitle("");
        setAuthor("");
        setText("");
        setEmail("");

        updateBlogPageType("view");
      } else {
        // Error saving blog data
        console.error("Error saving blog data", response.error);
      }
    } catch (error) {
      // Network error or other issues
      console.error("Error:", error);
    }
  };

  return (
    <div className="newBlogComp">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            rows={4}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewBlogComp;
