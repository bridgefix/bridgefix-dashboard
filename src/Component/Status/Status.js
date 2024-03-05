import React from 'react';
import './Status.css';
import Search_Input from '../CommonComp/Search_Input';
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import MUIDataTable from 'mui-datatables';
import { createTheme } from "@mui/material/styles";
import { Link } from 'react-router-dom';

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
});

export default function Status() {
    const [responsive, setResponsive] = React.useState("standard");
    const [tableBodyHeight, setTableBodyHeight] = React.useState("470px");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = React.useState("");

    const column = [
        { name: "ID", options: { filter: false } },
        { name: "USERNAME", options: { filter: false } },
        { name: "NAME", options: { filterOptions: { fullWidth: true } } },
        { name: "DEPARTMENT", options: { filter: false } },
        {
            name: "SHOW STATUS",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const id = tableMeta.rowData[0];
                    return (
                        <Link to={`/status/${id}/`} style={{ cursor: "pointer",textDecoration:"none" }}>
                            {value}
                        </Link>
                    );
                }
            }
        },
    ];

    const data = [
        ["1", "vishupatidar10@gmail.com", "Vishal Patidar", "Development", "Click"],
        ["2", "test@gmail.com", "Test", "None", "Click"],
        ["3", "sshrikant919@gmail.com", "Shrikant Sharma", "Development", "Click"],
        ["4", "sahuharshit409@gmail.com", "Harshit Sahu", "Development", "Click"],
        ["5", "pbirle2015@gmail.com", "Pooja Birla", "Development", "Click"],
    ];

    const options = {
        search: true,
        download: true,
        print: true,
        viewColumns: true,
        filter: true,
        filterType: "dropdown",
        responsive,
        tableBodyHeight,
        tableBodyMaxHeight,
        setCellProps: (cellValue, columnIndex) => {
            return { style: { textAlign: 'center' } };
        },
        selectableRows: 'none',
    };

    return (
        <div className='employeeStyle'>
            <div className="statusStyle">
                <Search_Input />
            </div>
            <div className='m-4'>
                <CacheProvider value={muiCache}>
                    <ThemeProvider theme={createTheme()}>
                        <MUIDataTable
                            title={"Employee Status Update"}
                            data={data}
                            columns={column}
                            options={options}
                            className="custom-table" 
                        />
                    </ThemeProvider>
                </CacheProvider>
            </div>
        </div>
    );
}
