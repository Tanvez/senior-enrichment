import React, { Link } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';

function SingleStudent(props) {

    const id = props.match.params.id;
    const singleStu = props.students.filter(elem => {
        console.log('elem id'.elem.id)
        return elem.id === id;
    })
    console.log('single student', singleStu)
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

                <TableRow key={singleStu.id}>
                    <TableRowColumn>{singleStu.id}</TableRowColumn>
                    <TableRowColumn>
                        {singleStu.fullName}
                    </TableRowColumn>
                    <TableRowColumn>{singleStu.gpa}</TableRowColumn>
                    <TableRowColumn>Current Stu</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    )
}
// export default SingleStudent;
const mapToState = function (state) {
    return { students: state.students }
}

export default withRouter(connect(mapToState)(SingleStudent));







