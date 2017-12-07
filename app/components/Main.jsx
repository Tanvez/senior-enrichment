import React, { Component } from 'react';
import NavBar from './NavBar';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from './StudentList';
import store from '../store';
import { fetchStudents } from '../reducers/studentsReducer';

import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';

export default class Main extends Component {

    componentDidMount() {
        //calling thunk to get students
        const students = fetchStudents();
        store.dispatch(students);
    }
    render() {

        return (
            <Router>
                <div className="container-fluid">
                    <div className="col-xs-2">
                        <NavBar />
                    </div>
                    <div className="col-xs-10">

                        <StudentList/>


                    </div>
                </div>
            </Router>
        )
    }



}
