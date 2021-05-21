import {NavLink} from "react-router-dom";
import classes from "../Dialogs.module.css";

const Dialog = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
      <li className={classes.dialog}>
        <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
      </li>
  );
};

export default Dialog;