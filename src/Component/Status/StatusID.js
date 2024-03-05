import React from 'react'
import './Status.css';
import Search_Input from '../CommonComp/Search_Input';
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import MUIDataTable from 'mui-datatables';
import { createTheme } from "@mui/material/styles";
import { useParams } from 'react-router-dom';

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
});

export default function StatusID() {
    const { id } = useParams()
    const [responsive, setResponsive] = React.useState("standard");
    const [tableBodyHeight, setTableBodyHeight] = React.useState("470px");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = React.useState("");

    const column = [
        { name: "NAME", options: { filterOptions: { fullWidth: true } } },
        { name: "STATUS", options: { filter: false } },
        { name: "STATUS DATE", options: { filter: false } },
        { name: "OUT TIME", options: { filter: false } },
        { name: "IN TIME", options: { filter: false } },
        { name: "PROJECT", options: { filter: false } },
        { name: "TOTAL DAY BREAK", options: { filter: false } },
       
    ];

    const data = [
      
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
    )
}
