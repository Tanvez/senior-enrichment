import React, { Link, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCampStu } from '../reducers/oneCampus';
import store from '../store';


import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
const style = {
    marginLeft: 20,
};

function AddStudents(props) {
    console.log('working');
    return (<Paper zDepth={2}>
        <TextField hintText="First name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Middle name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Last name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Email address" style={style} underlineShow={false} />
        <Divider />
    </Paper>)
}

export default AddStudents;