import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from './StudentList';
import CampusList from './CampusList';
import SingleStudent from './SingleStudent';
import Home from './Home';
import store from '../store';
import { fetchStudents } from '../reducers/studentsReducer';
import { fetchCampuses } from '../reducers/campus';

//Styling
import NavBar from './NavBar';
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
        const campuses = fetchCampuses();
        store.dispatch(students);
        store.dispatch(campuses);
    }
    render() {

        return (
            <Router>
                <div className="container-fluid">
                    <div className="col-xs-2">
                        <NavBar />
                    </div>
                    <div className="col-xs-10">
                        <Switch>
                            <Route exact path='/campus/allstudents' component={StudentList} />
                            <Route path='/campus/students/:id' component={SingleStudent} />
                            <Route path='/campus' component={CampusList} />
                            <Route path='/' component={Home} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
