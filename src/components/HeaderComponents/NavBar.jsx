import React from "react";
import { Link } from "@reach/router";
import "./Header.css";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="navbar-child">
          <Link to="/" className="link">
            <StyledButton variant="contained" color="primary">
              {" "}
              Home
            </StyledButton>
          </Link>
          <Link to="/topics" className="link">
            <StyledButton variant="contained" color="primary">
              {" "}
              Topics
            </StyledButton>
          </Link>
        </div>
      </nav>
    </div>
  );
}

const styledBy = (property, mapping) => props => mapping[props[property]];

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    borderRadius: 20,
    border: 0,
    color: "blue",
    height: 40,
    padding: "0 30px",
    boxShadow: styledBy("color", {
      blue: "0 3px 5px 2px rgba(33, 203, 243, .3)"
    }),
    label: {
      textTransform: ""
    }
  }
})(({ classes, color, ...other }) => (
  <Button className={classes.root} {...other} />
));
