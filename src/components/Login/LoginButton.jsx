import "./Login.css";
import { Link } from "@reach/router";

import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import React from "react";

export default function LoginButton() {
  return (
    <div>
      <Link to="/login" className="login">
        <StyledButton variant="contained">Login</StyledButton>
      </Link>
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
    height: 36,
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
