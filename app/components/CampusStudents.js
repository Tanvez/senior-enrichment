import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchCampStu } from '../reducers/oneCampus';
import { fetchCampi } from '../reducers/campi';
import store from '../store';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

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

    componentDidMount() {
        const campusStudents = fetchCampStu(this.props.match.params.id)
        const campi = fetchCampi(this.props.match.params.id)
        store.dispatch(campi);
        store.dispatch(campusStudents);
    }
    render() {
        const students = store.getState().campusStudents;

        console.log('students', this.props);
        return (

            <Paper>
                {this.props.campi.name}
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
                                console.log('inside map', student)
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
                                        <TableRowColumn>  <IconButton ><Delete /></IconButton> </TableRowColumn>
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
