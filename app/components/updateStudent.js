import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import store from '../store';
import { fetchStudents } from '../reducers/studentsReducer';
import { fetchCampuses } from '../reducers/campus';
import { addStudent } from '../reducers/studentsReducer';

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

const style = {
    marginLeft: 20
};

export default class AddStudents extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gpa: 0,
            campuses: [],
            value: 1,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount() {
        axios.get('/api/campus/')
            .then(res => res.data)
            .then(campuses => {
                this.setState({ campuses })
            })
            .catch(err => console.log(err))

    }
    handleChange(evt, index, value) {
        this.setState({ value: value });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName, // connects to name tag in html
            email: evt.target.email.value,
            gpa: +evt.target.gpa.value,
            campusId: this.state.value
        }
        const studentId = store.getState().newStudent;
        console.log('puting', store.getState());
        axios.put(`/api/students/updatestudent/${studentId}`, student)
            .then(res => res.data)
            .then(student => {
                store.dispatch(fetchStudents());//updates store so it can cause rerender of new students/updated students
                return store.dispatch(addStudent(student));
            })
            .then(() => this.props.history.push('/campus/allstudents')); // cause the submit button to reroute to this page


    }
    render() {
        console.log('update form', store.getState())
        // const id = store.getState().campusStudents
        // if(store.get)
        return (
            <Paper zDepth={2}>
                <label ><font size="4">Update Student Form</font></label>
                <form onSubmit={this.handleSubmit}>
                    <label ><font size="4">First Name</font></label>
                    <TextField onChange={(evt) => this.setState({ firstName: evt.target.value })} name='fName' hintText="First name" style={style} underlineShow={false} />
                    <Divider />
                    <label><font size="4">Last Name</font></label>
                    <TextField onChange={(evt) => this.setState({ lastName: evt.target.value })} name='lName' hintText="Last name" style={style} underlineShow={false} />
                    <Divider />
                    <label> <font size="4">Email</font></label>
                    <TextField onChange={(evt) => this.setState({ email: evt.target.value })} name='email' hintText="Email address" style={style} underlineShow={false} />
                    <Divider />
                    <label><font size="4"> GPA</font></label>
                    <TextField onChange={(evt) => this.setState({ gpa: evt.target.value })} name='gpa' hintText="GPA" style={style} underlineShow={false} />
                    <Divider />
                    <SelectField value={this.state.value} onChange={this.handleChange} maxHeight={200}>
                        {this.state.campuses.map(campi => {
                            return <MenuItem name='campusId' value={campi.id} key={campi.id} primaryText={campi.name} />
                        })
                        }
                    </SelectField>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </Paper>)
    }
}

