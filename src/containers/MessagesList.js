import { connect } from "react-redux";
import MessagesListComponent from '../components/MessagesList';
console.log("messages list");
export const MessagesList = connect(state => ({
    messages: state.messages
}), {})(MessagesListComponent)
