import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import APIs from "../../../util/APIs";
import axios from "axios";

function NewBlogComp({ setUpdatePageType }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [base64Image, setBase64Image] = useState(null);

  const handleImageChange = (event) => {
    //console.log("base64 image:", base64Image);
    console.log("handleImageChange...");
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = await reader.result.split(",")[1];
        setBase64Image(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (e) => {
    console.log("handleUpload...");
    if (base64Image) {
      // Call the post function here with the base64Image data
      // Replace 'YOUR_API_ENDPOINT' with your actual server endpoint
      console.log("base64 image:", base64Image);

      await axios
        .post(APIs.API_TRANSLATE, { image: base64Image })
        .then((response) => {
          console.log("text extracted successfully", response);
          setText(text + " " + response.data);
        })
        .catch((error) => {
          console.error("Error extracting text", error);
          // Handle error case
        });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isComment = false;
    // Prepare the data payload
    const data = {
      title,
      author,
      text,
      email,
      isComment,
    };

    console.log(data);

    try {
      // Make a POST request to your backend API endpoint
      data["id"] = Date.now().toString();
      data["comments"] = [];
      console.log("ID:", data["id"]);
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

        setUpdatePageType("view");
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
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="form-group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ marginBottom: 10 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpload}
                >
                  Upload
                </Button>
              </div>
            </Grid>

            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewBlogComp;
