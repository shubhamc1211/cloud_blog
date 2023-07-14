import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

function NewBlogComp() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data payload
    const data = {
      title,
      author,
      text,
    };

    try {
      // Make a POST request to your backend API endpoint
      const response = await fetch("https://example.com/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Blog data saved successfully
        console.log("Blog data saved successfully");

        // Reset the form
        setTitle("");
        setAuthor("");
        setText("");
      } else {
        // Error saving blog data
        console.error("Error saving blog data");
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
