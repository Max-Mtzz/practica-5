function CustomTable({columns = [], data = []}){
    return(
        <>
            <table>
                <thead>
                    {
                        columns.map((column) =>(
                            <th key={column}>{column}</th>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        data.map((item) =>(
                            <tr key={item.id}>
                                {
                                    columns.map((column) =>(
                                        <td key={column}>{item[column.toLowerCase()]}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default CustomTable;