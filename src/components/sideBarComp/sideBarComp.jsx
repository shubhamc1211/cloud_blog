import React from "react";
import { Button, Grid } from "@mui/material";

function SideBarComp({ blogPageType, setUpdatePageType }) {
  const updatePageType = (pageType) => {
    setUpdatePageType(pageType);
  };

  return (
    <div className="sideBarComp">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" onClick={() => updatePageType("view")}>
            View Blogs
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={() => updatePageType("new")}>
            New Blogs
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SideBarComp;
