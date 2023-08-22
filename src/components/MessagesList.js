import React from "react";
import { ReactPropTypes as PropTypes} from "react";
import Message from './Message';
const MessagesList = ({messages}) => (
    <section is="messages-list">
        <ul>
            {messages.map(message => (
                <Message
                key={message.id}
                {...message}
                />
            ))}
        </ul>
    </section>
)

MessagesList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired 
        }).isRequired
    ).isRequired
}

export default MessagesList