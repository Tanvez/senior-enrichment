import React, { Link, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStudent } from '../reducers/oneStudent';
import store from '../store';

import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';

class SingleStudent extends Component {

    componentDidMount() {
        const single = fetchStudent((this.props.match.params.id));
        store.dispatch(single);
    }

    render() {
        console.log('single student is running', this.props.campus && this.props.campus.name)
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

                    <TableRow key='PlaceHolder'>
                        <TableRowColumn>{this.props.student.id}</TableRowColumn>
                        <TableRowColumn>
                            {this.props.student.fullName}
                        </TableRowColumn>
                        <TableRowColumn>{this.props.student.gpa}</TableRowColumn>
                        <TableRowColumn>{this.props.campus && this.props.campus.name //have to short circuit because this.props.campus.name will throw an error instead of undefined
                            // this.props will produce undefined
                        }</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}


// export default SingleStudent;
const mapToState = function (state) {
    return {
        student: state.student,
        campus: state.student.campus
    }
}

export default withRouter(connect(mapToState)(SingleStudent));







// NO SINGLE STUDENT ROUTE - FETCHES DATA FROM ALLSTUDENTS
// function SingleStudent(props) {
//     const id = props.id; // why is this a string? cuz of html?
//     const singleStu = props.students.find(stu => {
//         return stu.id === Number(id)
//     })
//     console.log('single', singleStu);
//     return (
//         <Table>
//             <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
//                 <TableRow>
//                     <TableHeaderColumn>ID</TableHeaderColumn>
//                     <TableHeaderColumn>Name</TableHeaderColumn>
//                     <TableHeaderColumn>GPA</TableHeaderColumn>
//                     <TableHeaderColumn>Status</TableHeaderColumn>
//                 </TableRow>
//             </TableHeader>
//             <TableBody displayRowCheckbox={false}>

//                 <TableRow key='PlaceHolder'>
//                     <TableRowColumn>{singleStu.id}</TableRowColumn>
//                     <TableRowColumn>
//                         {singleStu.fullName}
//                     </TableRowColumn>
//                     <TableRowColumn>{singleStu.gpa}</TableRowColumn>
//                     <TableRowColumn>{singleStu.campus.name}</TableRowColumn>
//                 </TableRow>
//             </TableBody>
//         </Table>
//     )
// }


