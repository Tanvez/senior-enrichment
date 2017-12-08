import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height:'100%',
        overflowY: 'auto',
    },
};


function CampusList(props) {
    const campus = props.campus; // array of campuses
    console.log('props??', campus);
    return (

        <div style={styles.root}>
            <GridList
                cellHeight={180}
                style={styles.gridList}>
                <Subheader>Campuses</Subheader>
                {campus.map((cam) => (
                    <GridTile
                        key={cam.id}
                        title={cam.name}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                        <img src={cam.imageUrl}/>
                    </GridTile>
                ))}
            </GridList>
        </div>


    )
}

const mapStateToProps = function (state) {
    return { campus: state.campus };
};

export default withRouter(connect(mapStateToProps)(CampusList));
