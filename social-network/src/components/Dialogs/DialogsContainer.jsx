import {sendMessageActionCreator, newMessageTextUpdateActionCreator} from '../../redux/messages-page-reducer.js';
import Dialogs from "./Dialogs";
// import StoreContext from "../../store-context";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//
//   return (
//       <StoreContext.Consumer>
//         {store => {
//
//           const sendMessageButtonClickHandler = () => {
//             store.dispatch(sendMessageActionCreator());
//           };
//
//           const newMessageTextUpdateHandler = (text) => {
//             store.dispatch(newMessageTextUpdateActionCreator(text));
//           };
//           return (
//               <Dialogs state={store.getState().messagesPage}
//                        sendMessageButtonClickHandler={sendMessageButtonClickHandler}
//                        newMessageTextUpdateHandler={newMessageTextUpdateHandler}/>
//           );
//         }
//         }
//       </StoreContext.Consumer>
//   );
// };

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
