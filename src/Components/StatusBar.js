import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@atlaskit/button";
import HipchatChevronUpIcon from "@atlaskit/icon/glyph/hipchat/chevron-up";
import HipchatChevronDownIcon from "@atlaskit/icon/glyph/hipchat/chevron-down";
import StatusBadge from "./StatusBadge/StatusBadge";

const StatusBar = ({ link = true, completionProgress = 1 }) => {
  const [visibility, setVisibility] = useState(true);
  const [rank, setRank] = useState("");

  useEffect(() => {
    switch (completionProgress) {
      case 1:
        setRank("Beginner");
        break;
      case 2:
        setRank("Intermediate");
        break;
      case 3:
        setRank("Advanced");
        break;
      case 4:
        setRank("Expert");
        break;
      default:
        setRank("Blowing the charts off!");
    }
  }, [completionProgress]);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="status-area">
      <div className="container">
        {visibility && (
          <>
            <div className="rank">
              <StatusBadge completionProgress={completionProgress} />
              <span className="rank-title">{rank}</span>
            </div>
            Hello here is some text and we need a call to action
            {link && (
              <Button appearance="link">
                <Link to="/customers/">setup your customers</Link>
              </Button>
            )}
          </>
        )}
        {visibility && (
          <span onClick={toggleVisibility}>
            <HipchatChevronUpIcon />
          </span>
        )}
        {!visibility && (
          <span onClick={toggleVisibility}>
            <HipchatChevronDownIcon />
          </span>
        )}
      </div>
    </div>
  );
};

export default StatusBar;
