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

const NavBar = (props)=> {
        return (
            <Toolbar>
                 <ToolbarGroup firstChild={true}>
                 <RaisedButton label="Home" primary={true} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarSeparator />
                    <Link className="campus" to="/campus">
                        <RaisedButton label="Campus" primary={true} />
                    </Link>
                    <Link className="campusHome" to="/campus/allstudents">
                        <RaisedButton label="Student" secondary={true} />
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
// <ToolbarGroup firstChild={true}>
//<ToolbarSeparator />
// <DropDownMenu value={this.state.value} onChange={this.handleChange}>
// <MenuItem value={1} primaryText="All Campuses" />
// <MenuItem value={2} primaryText="All Students" />
// </DropDownMenu>
// </ToolbarGroup>
