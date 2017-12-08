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
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>GPA</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.students.map(student => {
                    console.log(student)
                    return (
                        <TableRow key={student.id}>

                            <TableRowColumn>{student.id}</TableRowColumn>

                            <TableRowColumn>
                                <Link className="studentRow" to={`/campus/students/${student.id}`}>
                                    {student.fullName}
                                </Link>
                            </TableRowColumn>

                            <TableRowColumn>{student.gpa}</TableRowColumn>
                            <TableRowColumn>Current Stu</TableRowColumn>

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
