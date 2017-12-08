import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';

function StudentList(props) {
    console.log('all students running ')
    return (
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>GPA</TableHeaderColumn>
                    <TableHeaderColumn>Attending</TableHeaderColumn>
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
                            <TableRowColumn>{student.campus.name}</TableRowColumn>

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

export default withRouter(connect(mapStateToProps)(StudentList));
