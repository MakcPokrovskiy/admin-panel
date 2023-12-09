import {useState} from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import {GridColDef} from "@mui/x-data-grid";
import {products} from "../../data";
import Add from "../../components/add/Add.tsx";
// import {useQuery} from "@tanstack/react-query";

const columns: GridColDef[] = [
    {field: "id", headerName: "ID", width: 90},
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt=""/>;
        },
    },
    {
        field: "title",
        type: "string",
        headerName: "Название",
        width: 200,
    },
    {
        field: "color",
        type: "string",
        headerName: "Цвет",
        width: 100,
    },
    {
        field: "price",
        type: "string",
        headerName: "Цена",
        width: 100,
    },
    {
        field: "producer",
        headerName: "Производитель",
        type: "string",
        width: 120,
    },
    {
        field: "createdAt",
        headerName: "Создан в",
        width: 120,
        type: "string",
    },
    {
        field: "inStock",
        headerName: "В Наличии",
        width: 150,
        type: "boolean",
    },
];

const Products = () => {
    const [open, setOpen] = useState(false);

    // TEST THE API

    // const {isLoading, data} = useQuery({
    //     queryKey: ["allproducts"],
    //     queryFn: () =>
    //         fetch("http://localhost:8800/api/products").then(
    //             (res) => res.json()
    //         ),
    // });

    return (
        <div className="products">
            <div className="info">
                <h1>Товары</h1>
                <button onClick={() => setOpen(true)}>Добавить новый товар</button>
            </div>
            <DataTable slug="products" columns={columns} rows={products}/>
            {/* TEST THE API */}

            {/*{isLoading ? (*/}
            {/*    "Loading..."*/}
            {/*) : (*/}
            {/*    <DataTable slug="products" columns={columns} rows={data}/>*/}
            {/*)}*/}
            {open && <Add slug="product" columns={columns} setOpen={setOpen}/>}
        </div>
    );
};

export default Products;