import React, { useEffect } from "react";
import classNames from "classnames";
import "./StatusBadge.css";

const StatusBadge = ({ completionProgress }) => {
  const showFireworks = () => {
    if (document.getElementById("firework") != null) {
      document.getElementById("firework").style.display = "block";
    }
  };

  const hideFireworks = () => {
    if (document.getElementById("firework") != null) {
      document.getElementById("firework").style.display = "none";
    }
  };

  useEffect(() => {
    if (completionProgress !== 1) {
      setTimeout(function() {
        showFireworks();
      }, 900);
      setTimeout(function() {
        hideFireworks();
      }, 1250);
    }
  }, [completionProgress]);

  var classes = classNames({
    "fill beginner": completionProgress === 1,
    "fill intermediate": completionProgress === 2,
    "fill advanced": completionProgress === 3,
    "fill expert": completionProgress === 4
  });

  return (
    <div id="banner">
      <div class={classes}>
        <div id="firework" style={{ display: "none" }}>
          <div class="pyro">
            <div class="before" />
            <div class="after" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBadge;
