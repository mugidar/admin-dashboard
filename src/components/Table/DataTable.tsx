import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./datatable.scss";
import { Link } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";

interface DataTableProps {
  columns: GridColDef[];
  rows: object[];
  slug: string;
}
const DataTable: React.FC<DataTableProps> = ({ columns, rows, slug }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(`http://localhost:8800/api/${slug}/${id}`, {
        method: "delete"
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`${slug}`]);
    }
  });


  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="actions">
          <div className="view">
            <Link to={`/${slug}/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>
          </div>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {" "}
      <DataGrid
        className="grid_table"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15
            }
          }
        }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
