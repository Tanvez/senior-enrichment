import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default function StudentList() {

    return (

        <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>Testing Student</TableRowColumn>
            <TableRowColumn>Current Stu</TableRowColumn>
        </TableRow>

    )
}


// class StudentListLoader extends Component() {
//     componenetDidMount() {
//         const studentsThunk = fetchStudents()
//         store.dispatch(studentsThunk)
//     }

//     render() {
//         return (
//             <studentList {...this.props}>
//                 );
//     }
// }

// const mapStateToProps = function (state) {
//     return {state};
// }

// export default connect(mapStateToProps)(StudentListLoader);