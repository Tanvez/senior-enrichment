import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchCampStu } from '../reducers/oneCampus';
import store from '../store';
import {writeStudent} from '../reducers/addStudent';


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
        <TextField name='emailß' hintText="Email address" style={style} underlineShow={false} />
        <Divider />
        <TextField  hintText="Campus" style={style} underlineShow={false} />
        <SelectField value ={props.choice} onChange={props.handleFirstChange} maxHeight={200}>
            {
                props.campus.map(campi=>{
                    return(<MenuItem value={campi.id} key={campi.id} primaryText={campi.name}/>)
                    }
                )
            }
      </SelectField>
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
        // handleFirstChange(evt){
        //     console.log('tarrget',  evt.target.value)
        //     dispatch(writeStudent(evt.target.value));
        // }

        handleSubmit(evt){
            evt.preventDefault();
           studentObj= {
            firstName : evt.target.fName.value,
            lastName:evt.target.lName.value, // connects to name tag in html
            email:evt.target.email.value,
            campus: evt.target.campus.value
           }
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddStudents))
