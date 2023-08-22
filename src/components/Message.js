import React from "react";
import { ReactPropTypes as PropTypes} from "react";

const Message = (message, author) => (
    <p>
        <i>{author}</i>; {message} 
    </p>
)

Message.PropTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Message