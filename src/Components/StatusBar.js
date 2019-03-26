import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
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

  var classes = classNames({
    container: true,
    "align-right": !visibility
  });

  return (
    <div className="status-area">
      <div className={classes}>
        {visibility && (
          <>
            <div className="rank">
              <StatusBadge completionProgress={completionProgress} />
              <span className="rank-title">{rank}</span>
            </div>
            <div className="rank-info">
              Level up by setting up extra identifiable data on your customers
              so sending and importing invoices will work smoother!
              {link && (
                <div>
                  <Button className="setup-customer" appearance="primary">
                    <Link to="/customers/">Setup your customers</Link>
                  </Button>
                </div>
              )}
            </div>
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
