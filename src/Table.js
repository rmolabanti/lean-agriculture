import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from '@material-ui/core/Typography';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, variety, msp) {
  id += 1;
  return { id, name, variety, msp};
}

const data = [
  createData('Paddy', 'common', 1750),
  createData('Paddy', 'Grade A', 1770),
  createData('Jowar', 'Maldandi', 2450),
  createData('Bajra', '-', 1950),
  createData('Ragi', '-', 2897),
  createData('Maize', '-', 1700),
  createData('Tur (Arhar)', '-', 5675),
  createData('Moong', '-', 6975),
  createData('Urad', '-', 5600),
  createData('Groundnut', '-', 4890),
  createData('Sunﬂower Seed', '-', 5388),
  createData('Soyabean', '-', 3399),
  createData('Sesamum', '-', 6249),
  createData('Nigerseed', '-', 5877),
  createData('Cotton', 'Medium Staple', 2897),
  createData('Cotton', 'Long Staple', 2897),

];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
    <Typography variant="h4" component="h2">
          MSP : 2018-2019
    </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Commodity</CustomTableCell>
            <CustomTableCell>Variety</CustomTableCell>
            <CustomTableCell numeric>MSP</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell>{n.name}</CustomTableCell>
                <CustomTableCell >{n.variety}</CustomTableCell>
                <CustomTableCell numeric>{n.msp}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
