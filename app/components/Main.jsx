import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from './StudentList';
import CampusList from './CampusList';
import SingleStudent from './SingleStudent';
import CampusStudents from './CampusStudents';
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

const styles = {
    background: {
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/ANDROMEDA_GALAXY.jpg/1280px-ANDROMEDA_GALAXY.jpg')",
        width: '100%',
        display: 'block',
        height: '100%'
    }
}

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
                <div className="container-fluid" >
                    <div className="col-xs-2">
                        <NavBar />
                    </div>
                    <div style={styles.background} className="col-xs-10">
                        <Switch>
                            <Route exact path='/campus/allstudents' component={StudentList} />
                            <Route path='/campus/allstudents/:id' component={SingleStudent} />
                            <Route exact path='/campus' component={CampusList} />
                            <Route path='/campus/:id' component={CampusStudents} />
                            <Route path='/' component={Home} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
