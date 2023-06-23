import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from "./BadgeList.module.css";

const BadgeList = (props) => {
  const [badges, setBadges] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/users/tags");
      setBadges(data);
    })();
  }, []);

  const handleBadgeClick = (badge) => {
    navigate("/" + props.badgeContentType + "/search/" + badge);
  };

  return (
    <div>
      {badges.map((badge, index) => (
        <Badge
          pill
          as="button"
          className={classes.badges}
          key={badge.tagName + index}
          bg="none"
          onClick={() => handleBadgeClick(badge.tagName)}
        >
          {badge.tagName}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeList;
