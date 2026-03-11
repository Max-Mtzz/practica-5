import '../styles/Table.css'

function CustomTable({ columns = [], data = [] }) {
    return (
        // Agregamos un contenedor para que sea responsive en celulares
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    {/* ¡Aquí faltaba este <tr>! */}
                    <tr>
                        {
                            columns.map((column) => (
                                <th key={column}>{column}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                {
                                    columns.map((column) => (
                                        <td key={column}>{item[column.toLowerCase()]}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CustomTable;