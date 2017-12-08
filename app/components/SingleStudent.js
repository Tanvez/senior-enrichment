import React, { Link , Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';
import {fetchStudent} from '../reducers/oneStudent';
import store from '../store';
     class SingleStudent extends Component {
    // const id = props.id; // why is this a string? cuz of html?
    // const singleStu = props.students.find(stu=>{
    //     return stu.id===Number(id)
    // })
    // console.log('single stu', singleStu)
    componentDidMount(){
        const oneStudent = fetchStudent(this.props.id);
        store.dispatch(oneStudent);
    }
    render ()
    {

        return (
            <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox ={false}>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>GPA</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody  displayRowCheckbox={false}>

                    <TableRow key='PlaceHolder'>
                        <TableRowColumn>PlaceHolder</TableRowColumn>
                        <TableRowColumn>
                        PlaceHolder
                        </TableRowColumn>
                        <TableRowColumn>PlaceHolder</TableRowColumn>
                        <TableRowColumn>Current Stu</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        )
}}

// export default SingleStudent;
const mapToState = function (state, ownProps) {
    return { students: state.students,
                id:ownProps.match.params.id }
}

export default withRouter(connect(mapToState)(SingleStudent));







