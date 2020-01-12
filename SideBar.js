import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class SideBar extends Component{
    render(){
        return <div className="sideBar">
            <ul type="none">
                <Link to="/location"><li>Location</li></Link>
                <Link to="/character"><li>Character</li></Link>
                <Link to="/episode"><li>Episodes</li></Link>
            </ul>
            </div>
    }
}
export default SideBar;