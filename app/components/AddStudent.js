import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchCampStu } from '../reducers/oneCampus';
import store from '../store';
import {writeStudent, postStudent} from '../reducers/addStudent';


import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';
import { Field, reduxForm } from 'redux-form';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
const style = {
    marginLeft: 20
};




function AddStudents(props) {

console.log(props)
    return (<Paper zDepth={2}>
    <form onSubmit={props.handleSubmit}>
        <TextField name='fName' hintText="First name" style={style} underlineShow={false} />
        <Divider />
        <TextField name='lName'  hintText="Last name" style={style} underlineShow={false} />
        <Divider />
        <TextField name='email' hintText="Email address" style={style} underlineShow={false} />
        <Divider />
        <TextField name='gpa' hintText="GPA" style={style} underlineShow={false} />
        <Divider />
        <TextField name='campusId' hintText="campus Id" style={style} underlineShow={false} />
      <div>
            <button type="submit">Submit</button>
          </div>
      </form>
    </Paper>)
}

const mapStateToProps = function (state){
    return {
            campus: state.campus}
}
const mapDispatchToProps = function (dispatch, ownProps){
    return {
        handleChange(evt){
            console.log('target',  evt.target)

        },

        handleSubmit(evt){
        evt.preventDefault();

          const students= {
            firstName : evt.target.fName.value,
            lastName:evt.target.lName.value, // connects to name tag in html
            email:evt.target.email.value,
            gpa:evt.target.gpa.value,
            campusId: evt.target.campusId.value
           }
           console.log('event', students)
        //   const postStu =  postStudent(students);
        //    dispatch(postStu);
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddStudents))
{/* <SelectField value ={1} onChange={props.handleChange} maxHeight={200}>
{
    props.campus.map(campi=>{
        return(<MenuItem  value={campi.id} key={campi.id} primaryText={campi.name}/>)
        }
    )
}
</SelectField> */}
