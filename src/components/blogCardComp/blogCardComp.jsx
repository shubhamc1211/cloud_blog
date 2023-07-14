import React, { useState } from "react";
import { Card, CardContent, Typography, TextField } from "@mui/material";

function BlogCardComp({ title, author, sentiment }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1">{`By ${author}`}</Typography>
        <Typography variant="body2" gutterBottom>
          Sentiment: {sentiment}
        </Typography>
        <TextField
          label="Add Comment"
          value={comment}
          onChange={handleCommentChange}
          multiline
          rows={2}
          fullWidth
        />
      </CardContent>
    </Card>
  );
}

export default BlogCardComp;
