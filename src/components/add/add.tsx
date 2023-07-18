import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {useRef} from "react"

interface AddProps {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add: React.FC<AddProps> = ({ slug, columns, setOpen }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(`http://localhost:8800/api/${slug}`, {
        method: "post",
        headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
        body: JSON.stringify({
          id: 111,
          img: "",
          lastName: "Hello",
          firstName: "Test",
          email: "text@gmail.com",
          phone: "42141",
          createdAt: "04.07.2023",
          verified: true
        })
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`${slug}`]);
    }
  });


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation()

    mutation.mutate()
    setOpen(false)
  };


  
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form  onSubmit={handleSubmit}>
         <table>
         {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => {
              return (
                <tr key={column.headerName} className="item">
                  <td>
                    {" "}
                    <label>{column.headerName}</label>
                  </td>
                  <td>
                    {" "}
                    <input type={column.type} placeholder={column.field} />
                  </td>
                </tr>
              );
            })}
         </table>
         <button className="sendBtn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
