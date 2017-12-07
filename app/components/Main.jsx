import React, { Component } from 'react';
import NavBar from './NavBar';
import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from './StudentList';
import store from '../store';
import { fetchStudents } from '../reducers/studentsReducer';

export default class Main extends Component {

    componentDidMount() {
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
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Name</TableHeaderColumn>
                                    <TableHeaderColumn>Status</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <StudentList />
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </Router>
        )
    }



}