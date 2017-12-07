import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';

function StudentList(props) {

    console.log( 'ahh', props.students);
    return (
        <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
        {props.students.map(student=>{
            console.log(student)
                    return (
                        <TableRow key={student.id}>
                            <TableRowColumn>{student.id}</TableRowColumn>
                            <TableRowColumn>{student.fullName}</TableRowColumn>
                            <TableRowColumn>Current Stu</TableRowColumn>
                        </TableRow>
                        )
                })}
        </TableBody>
</Table>
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

const mapStateToProps = function (state) {
    return {students:state.students}
};

export default withRouter (connect(mapStateToProps)(StudentList));
