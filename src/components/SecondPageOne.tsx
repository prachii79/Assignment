import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export default function SecondPageOne() {
   
    const [data, setData] = React.useState([])
    
    interface Posts {
        userId: number,
        id: number,
        title: string,
        body: string
    }
    
    const rows: GridRowsProp = data.map((val: Posts) => {
        return(
            {id: val.id, col1: val.title, col2: val.body}
        )
    })

    const columns: GridColDef[] = [
      { field: 'col1', headerName: 'Column 1', width: 150 },
      { field: 'col2', headerName: 'Column 2', width: 150 },
    ];


    React.useEffect(function() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(info => setData(info))
    }, [])


    return (
        <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
