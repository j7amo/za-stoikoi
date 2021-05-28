import classes from './Message.module.css';

const Message = (props) => {
  return (
      <li className={classes[props.messageType]}>
        {props.message}
      </li>
  );
};

export default Message;