import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchCampStu } from '../reducers/oneCampus';
import store from '../store';
import {writeStudent, postStudent} from '../reducers/addStudent';
import {getCampusId, campusSelector} from '../reducers/campusSelector';


import {
    Table, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import { Field, reduxForm, formValueSelector } from 'redux-form';


const style = {
    marginLeft: 20
};




function AddStudents(props) {
const {campusValue} = props;
console.log(props)
    return (<Paper zDepth={2}>
    <form onSubmit={props.handleSubmit}>
        <label ><font size="4">First Name</font></label>
        <TextField name='fName' hintText="First name" style={style} underlineShow={false} />
        <Divider />
        <label><font size="4">Last Name</font></label>
        <TextField name='lName'  hintText="Last name" style={style} underlineShow={false} />
        <Divider />
        <label> <font size="4">Email</font></label>
        <TextField name='email' hintText="Email address" style={style} underlineShow={false} />
        <Divider />
        <label><font size="4"> GPA</font></label>
        <TextField name='gpa' hintText="GPA" style={style} underlineShow={false} />
        <Divider />
        <div>
        <label><font size = '4'>Campuses </font></label>
        <SelectField value ={props.selectCampus} onChange={props.handleChange} maxHeight={200}>
         {
        props.campus.map(campi=>{
        return(<MenuItem  name= 'campusId' value={campi.id} key={campi.id} primaryText={campi.name}/>)
        }
    )
}
</SelectField>
          {/* <Field name="campus" component="select">
            <option></option>
            {props.campus.map(campi=>{
                return(<option  key={campi.id}
                    onChange={props.handleChange} value={campi.id}>{campi.name}</option>)
            })}
          </Field> */}
        </div>
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
const mapDispatchToProps = function (dispatch){

    return{
    handleChange(evt, index, value){
        dispatch(campusSelector(value))
        },
        handleSubmit(evt){
        evt.preventDefault();
        console.log('adding',evt)
          const students= {
            firstName : evt.target.fName.value,
            lastName:evt.target.lName.value, // connects to name tag in html
            email:evt.target.email.value,
            gpa:evt.target.gpa.value,
            campusId: evt.target.campusId.value,

           }

            const postStu =  postStudent(students);
             dispatch(postStu);
             console.log('adding', evt.target.campusId)
            //  console.log('color',this.props)

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