import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

let id = 0;
function createData(name, variety, msp) {
    id += 1;
    return { id, name, variety, msp };
}

const rows = [
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

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}));

export default function MspTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h4" component="h2">
                MSP : 2018-2019
            </Typography>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Commodity</StyledTableCell>
                        <StyledTableCell align="right">Calories</StyledTableCell>
                        <StyledTableCell align="right">Variety</StyledTableCell>
                        <StyledTableCell numeric align="right">MSP</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.variety}</StyledTableCell>
                            <StyledTableCell numeric align="right">{row.msp}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
