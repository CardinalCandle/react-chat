import React from "react";
import { ReactPropTypes} from "react";

const Sidebar = ({users}) => (
    <aside id="sidebar" className="sidebar">
        <ul>
            {users.map(user =>( 
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </aside>
)

Sidebar.ReactPropTypes = {
    users: ReactPropTypes.arrayOf(
        ReactPropTypes.shape({
            id: ReactPropTypes.number.isRequired,
            name: ReactPropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Sidebar