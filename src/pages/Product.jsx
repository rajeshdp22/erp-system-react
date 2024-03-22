import { useState } from "react";
import PropTypes from "prop-types";
import MUIDataTable from "mui-datatables";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import {products} from "../Data" 
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";

const EditDeleteProduct = ({ product, onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    onEdit({ ...product, name, category, price, stock });
    handleClose();
  };

  const handleDelete = () => {
    onDelete(product.id);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Edit/Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit or Delete Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEdit} color="primary">
            Edit
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};


EditDeleteProduct.propTypes = {
  product: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const AddProduct = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    onAdd({ name, category, price, stock });
    handleClose();
    setName("");
    setCategory("");
    setPrice(0);
    setStock(0);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// Define propTypes for AddProduct component
AddProduct.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

const ProductsManagement = () => {
  const [data, setData] = useState(products);

  const columns = [
      {
        name: "name",
        label: "Name",
      },
      {
        name: "category",
        label: "Category",
      },
      {
        name: "price",
        label: "Price",
      },
      {
        name: "stock",
        label: "Stock",
      },
      {
        name: "actions",
        label: "Actions",
        options: {
          customBodyRender: (value, tableMeta) => {
            const product = data[tableMeta.rowIndex];
            return (
              <EditDeleteProduct
                product={product}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
              />
            );
          },
        },
      },
    ];

    const options = {
      filter: true,
      sort: true,
      selectableRows: "none",
    };
  
    const handleEditProduct = (updatedProduct) => {
      setData(
        data.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
    };
  
    const handleDeleteProduct = (id) => {
      setData(data.filter((product) => product.id !== id));
    };
  
    const handleAddProduct = (newProduct) => {
      const id = Math.floor(Math.random() * 1000) + 1;
      setData([...data, { id, ...newProduct }]);
    };
  
    return (
      <div style={{ background: "#eceff1", height: "100vh" }}>
        <Navbar />
        <Box height={70} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: "calc(100% - 70px)",
          }}
        >
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              height: "100%",
              overflowY: "auto",
              flex: {
                xs: "auto",
              },
            }}
          >
            <MUIDataTable
              title="Products"
              data={data}
              columns={columns}
              options={options}
            />
            <div style={{ marginTop: "20px" }}>
              <AddProduct onAdd={handleAddProduct} />
            </div>
          </Box>
        </Box>
      </div>
    );
  };
  
  export default ProductsManagement;
