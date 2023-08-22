import { connect } from "react-redux";
import SidebarComponent from '../components/Sidebar';
console.log('sidebar');
export const Sidebar = connect(state => ({
    users: state.users
}), {})(SidebarComponent)