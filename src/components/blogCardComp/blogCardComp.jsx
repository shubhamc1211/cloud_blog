import React, { useState } from "react";
import { Card, CardContent, Typography, TextField } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";

function BlogCardComp({ title, author, likes, comments }) {
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
          {/* <ThumbUpIcon />: {likes} */}
          <CommentIcon />{" "}
          <span className="numComments">{comments?.length}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BlogCardComp;
