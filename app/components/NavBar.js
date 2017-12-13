import React from 'react';
import { Link } from 'react-router-dom';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const NavBar = (props) => {

    return (
        <Toolbar>
            <ToolbarGroup firstChild={true}>
                <Link className='home' to="/">
                    <RaisedButton label="Home" primary={true} />
                </Link>
            </ToolbarGroup>
            <ToolbarGroup>
                <FontIcon className="muidocs-icon-custom-sort" />
                <ToolbarSeparator />
                <Link className="campus" to="/campus">
                    <RaisedButton label="Campuses" primary={true} />
                </Link>
                <Link className="campusHome" to="/campus/allstudents">
                    <RaisedButton label="All Students" primary={true} />
                </Link>
                <Link className='addstu' to="/students/addstudent">
                    <RaisedButton label="Add Student" primary={true} />
                </Link>
                <Link className='addCamp' to="/campus/addcampus">
                    <RaisedButton label="Add Campus" primary={true} />
                </Link>
                <IconMenu
                    iconButtonElement={
                        <IconButton touch={true}>
                        </IconButton>
                    }
                >
                </IconMenu>
            </ToolbarGroup>
        </Toolbar>
    );
}
export default NavBar;
