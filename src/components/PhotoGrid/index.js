import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  }
});

const PhotoGrid = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} cols={3}>
        {data.map(photo => (
          <GridListTile key={photo}>
            <img
              src={photo}
              alt={photo}
              onClick={event => console.log(event.target)}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default PhotoGrid;
