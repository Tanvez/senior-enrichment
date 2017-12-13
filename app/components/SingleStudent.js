import React, { Link, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStudent } from '../reducers/oneStudent';
import { fetchStudents } from '../reducers/studentsReducer'
import store from '../store';
import axios from 'axios'

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
    handleDelete(evt) {
        evt.preventDefault();
        const id = evt.target.value;
        axios.delete(`/api/students/deletestudent/${id}`)
            .then(() => {
                console.log('hitting fetch')
                store.dispatch(fetchStudents())
            })
            .catch(err => console.log(err))
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
                        <TableHeaderColumn>Edit</TableHeaderColumn>
                        <TableHeaderColumn>Delete </TableHeaderColumn>
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
                        <TableRowColumn><button>edit</button></TableRowColumn>
                        <TableRowColumn> <button onClick={this.handleDelete} value={this.props.student.id}>Delete</button> </TableRowColumn>
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


