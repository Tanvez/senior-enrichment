import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import { writeCampus } from '../reducers/addCampus';
import { fetchStudents } from '../reducers/studentsReducer';
import { fetchCampuses } from '../reducers/campus';
//material ui
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

export default class AddCampus extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            imageUrl: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        axios.post('/api/campus/addcampus', this.state)
            .then(res => res.data)
            .then(campus => {
                store.dispatch(writeCampus(campus))// afraid to delete dont know what will happen...
                return store.dispatch(fetchCampuses());// update store to rerender
            })
            .then(() => this.props.history.push('/campus'));
        fetchStudents();
    }
    render() {
        return (
            <Paper zDepth={2}>
                <form onSubmit={this.handleSubmit}>
                    <label ><font size="4">Campus Name</font></label>
                    <TextField onChange={(evt) => this.setState({ name: evt.target.value })} name='campusName' hintText="Campus Name" style={style} underlineShow={false} />
                    <Divider />
                    <label ><font size="4">Campus image Url</font></label>
                    <TextField onChange={(evt) => this.setState({ imageUrl: evt.target.value })} name='campusUrl' hintText="CampusUrl" style={style} underlineShow={false} />
                    <Divider />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </Paper>
        )
    }


}
