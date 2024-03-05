import React from 'react'
import Search_Input from '../CommonComp/Search_Input'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import './Leave.css'

function createData(email, employee, department) {
    return { email, employee, department };
}

const rows = [];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Leave() {
    return (
        <div >
            <div className="LeaveStyle">
                <Search_Input />
            </div>
            <div className='leavetableStyle'>
                <div style={{ display: "flex", justifyContent: 'space-between', padding: "40px 20px 20px 20px" }}>
                    <h3>Leave List</h3>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, background: "#343a40" }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell sx={{ color: "white" }}>IMAGE</TableCell>
                                <TableCell align="left" sx={{ color: "white" }}>EMPLOYEE NAME</TableCell>
                                <TableCell align="left" sx={{ color: "white" }}>LEAVE REASON</TableCell>
                                <TableCell align="left" sx={{ color: "white" }}>TOTAL LEAVE DAYS</TableCell>
                                <TableCell align="left" sx={{ color: "white" }}>LEAVE DATE</TableCell>
                                <TableCell align="left" sx={{ color: "white" }}>LEAVE TYPE</TableCell>
                                <TableCell align="left" sx={{ color: "white" }}>LEAVE STATUS</TableCell>
                                <TableCell align="left" sx={{ color: "white" }}>ACTION</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">
                                        <img src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png" width='50' height='50' />
                                    </TableCell>
                                    <TableCell align="left" sx={{ color: "white" }}>{row.email}</TableCell>
                                    <TableCell align="left" sx={{ color: "#17a2b8" }}>{row.employee}</TableCell>
                                    <TableCell align="left" sx={{ color: "white" }}>{row.department}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div >
    )
}

export default Leave
