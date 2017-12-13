import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchCampStu } from '../reducers/oneCampus';
import { fetchCampi } from '../reducers/campi';
import { fetchStudents } from '../reducers/studentsReducer';
import { writeStudent } from '../reducers/addStudent';
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

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleDeleteCampus = this.handleDeleteCampus.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    componentDidMount() {
        const campusStudents = fetchCampStu(this.props.match.params.id)//gets all students from database with matching campus id
        const campi = fetchCampi(this.props.match.params.id)//fetch one campus info base on id

        // dispatched to the store
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
                return store.dispatch(fetchCampuses()) // updates store
            })
            .then(() => {
                this.props.history.push('/campus'); // redirects to campus list after hitting submit/delete 
            })
            .catch(err => console.log(err))
    }
    handleClick(evt) {
        evt.preventDefault();
        store.dispatch(writeStudent(evt.target.value))
        console.log('clicking', store.getState().newStudent)
        this.props.history.push('/students/updatestudent')
    }
    handleEdit(evt) {
        console.log('clicking', store.getState().campi);
        this.props.history.push('/campus/updatecampus');
    }

    render() {
        const students = store.getState().campusStudents;

        return (

            <Paper>
                {this.props.campi && this.props.campi.name}
                {(students.length === 0) ? <Link to={'/'}><button onClick={this.handleDeleteCampus} value={this.props.campi.id} >
                    Delete Campus</button></Link> : ''}
                <button onClick={this.handleEdit}>Edit</button>
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
                                        <TableRowColumn><button onClick={this.handleClick} value={student.id}> edit</button></TableRowColumn>
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
