import {NavLink} from "react-router-dom";
import classes from "./Dialog.module.css";

const Dialog = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
      <li className={classes.dialog}>
        <img src={props.avatar} alt=''/>
        <div className={classes.name}>
          <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
      </li>
  );
};

export default Dialog;