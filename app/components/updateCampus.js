import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import { fetchCampuses } from '../reducers/campus';
import { writeCampus } from '../reducers/addCampus';
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

export default class updateCampus extends Component {
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
        const campusId = store.getState().campi.id;
        console.log('update campus id', campusId)
        axios.put(`/api/campus/updatecampus/${campusId}`, this.state)// could refactor into a thunk but might break it...
            .then(res => res.data)
            .then(campus => {
                store.dispatch(writeCampus(campus))
                return store.dispatch(fetchCampuses());//for rerendering
            })
            .then(() => this.props.history.push('/campus'));//for redirecting to campus page

    }
    render() {
        return (
            <Paper zDepth={2}>
                <label ><font size="6">Update Campus Form</font></label>
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
