import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchCampStu } from '../reducers/oneCampus';
import { fetchCampi } from '../reducers/campi';
import { fetchStudents } from '../reducers/studentsReducer';
import store from '../store';
import axios from 'axios';
import { fetchCampuses } from '../reducers/campus';
import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
const style = {
    marginLeft: 20,
};

class CampusStudents extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleDeleteCampus = this.handleDeleteCampus.bind(this)
    }
    componentDidMount() {
        const campusStudents = fetchCampStu(this.props.match.params.id)
        const campi = fetchCampi(this.props.match.params.id)
        store.dispatch(campi);
        store.dispatch(campusStudents);
        this.setState({ id: this.props.match.params.id })
    }
    handleDelete(evt) {
        evt.preventDefault();
        const id = evt.target.value;
        axios.delete(`/api/students/deletestudent/${id}`)
            .then(() => {
                console.log('hitting fetch', this.state.id)
                store.dispatch(fetchCampStu(this.state.id))
                store.dispatch(fetchStudents()); // updates store
            })
            .catch(err => console.log(err))
    }
    handleDeleteCampus(evt) {
        evt.preventDefault();
        const id = evt.target.value;
        axios.delete(`/api/campus/deletecampus/${id}`)
            .then(() => {
                console.log('hitting fetch', this.state.id)
                store.dispatch(fetchCampStu(this.state.id))
                store.dispatch(fetchStudents()); // updates store
            })
            .catch(err => console.log(err))
    }

    render() {
        const students = store.getState().campusStudents;

        return (

            <Paper>
                {this.props.campi.name}
                {(students.length === 0) ? <Link to={'/campus'}><button onClick={this.handleDeleteCampus} value={this.props.campi.id} >Delete Campus</button></Link> : ''}
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>GPA</TableHeaderColumn>
                            <TableHeaderColumn>Edit</TableHeaderColumn>
                            <TableHeaderColumn>Delete </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            students && students.map(student => {
                                return (
                                    <TableRow key={student.id}>
                                        <TableRowColumn>{student.id}</TableRowColumn>
                                        <TableRowColumn>
                                            <Link className='studentRow' to={`/campus/allstudents/${student.id}`}>
                                                {student.fullName}
                                            </Link>
                                        </TableRowColumn>
                                        <TableRowColumn>{student.gpa}</TableRowColumn>
                                        <TableRowColumn>edit</TableRowColumn>
                                        <TableRowColumn> <button onClick={this.handleDelete} value={student.id}>Delete</button> </TableRowColumn>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </Paper>

        )
    }
}

const mapToState = function (state) {
    return {
        students: state.campusStudents,
        campi: state.campi
    }
}

export default withRouter(connect(mapToState)(CampusStudents));
