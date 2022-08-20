import React from "react";
import "./SwipeButton.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton/IconButton";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon />
      </IconButton>

      <IconButton className="swipeButtons__left">
        <CloseIcon />
      </IconButton>

      <IconButton className="swipeButtons__start">
        <StarRateIcon />
      </IconButton>

      <IconButton className="swipeButtons__right">
        <FavoriteIcon />
      </IconButton>

      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
