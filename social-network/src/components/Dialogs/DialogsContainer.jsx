import {sendMessageActionCreator, newMessageTextUpdateActionCreator} from '../../redux/messages-page-reducer.js';
import Dialogs from "./Dialogs";
// import StoreContext from "../../store-context";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageButtonClickHandler: () => {
      dispatch(sendMessageActionCreator());
    },
    newMessageTextUpdateHandler: (text) => {
      dispatch(newMessageTextUpdateActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
