import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { deleteStudent } from '../reducers/deleteStudent';
import axios from 'axios';
import { fetchStudents } from '../reducers/studentsReducer';

import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';

import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';


function StudentList(props) {
    console.log('all students running ', props)
    return (
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
                {props.students.map(student => {

                    return (
                        <TableRow key={student.id}>

                            <TableRowColumn>{student.id}</TableRowColumn>

                            <TableRowColumn>
                                <Link className="studentRow" to={`/campus/allstudents/${student.id}`}>
                                    {student.fullName}
                                </Link>
                            </TableRowColumn>
                            <TableRowColumn>{student.gpa}</TableRowColumn>
                            <TableRowColumn>edit</TableRowColumn>
                            <TableRowColumn> <button onClick={props.handleDelete} value={student.id}>Delete</button> </TableRowColumn>

                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

const mapStateToProps = function (state) {
    return { students: state.students }
};
const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleDelete(evt) {
            evt.preventDefault();
            const id = evt.target.value;
            axios.delete(`/api/students/deletestudent/${id}`)
                .then(() => {
                    console.log('hitting fetch')
                    dispatch(fetchStudents())
                })
                .catch(err => console.log(err))
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentList));
