import { connect } from "react-redux";
import addMessageComponent from '../components/AddMessage';
import {addMessage} from "../actions";

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author))
    }
})

export const AddMessage = connect(() => ({
    }), mapDispatchToProps)(addMessageComponent)