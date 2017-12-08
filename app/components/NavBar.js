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

export default class ToolbarExamplesSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,

        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, index, value) {
        this.setState({ value: value });
    }

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <FontIcon className="muidocs-icon-custom-sort" />
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
}
// <ToolbarGroup firstChild={true}>
//<ToolbarSeparator />
// <DropDownMenu value={this.state.value} onChange={this.handleChange}>
// <MenuItem value={1} primaryText="All Campuses" />
// <MenuItem value={2} primaryText="All Students" />
// </DropDownMenu>
// </ToolbarGroup>