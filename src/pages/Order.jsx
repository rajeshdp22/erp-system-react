import { useState } from "react";
import MUIDataTable from "mui-datatables";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {orders} from "../Data"
import Box from "@mui/material/Box";
    
const EditDeleteOrder = ({ order, onUpdateStatus, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(order.status);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateStatus = () => {
    onUpdateStatus({ ...order, status });
    handleClose();
  };

  const handleDelete = () => {
    onDelete(order.id);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Edit/Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit or Delete Order</DialogTitle>
        <DialogContent>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateStatus} color="primary">
            Update Status
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

EditDeleteOrder.propTypes = {
  order: PropTypes.object.isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const OrdersManagement = () => {
  const [data, setData] = useState(orders);

  const columns = [
    {
      name: "orderId",
      label: "Order ID",
    },
    {
      name: "customerName",
      label: "Customer Name",
    },
    {
      name: "orderDate",
      label: "Order Date",
    },
    {
      name: "status",
      label: "Status",
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta) => {
          const order = data[tableMeta.rowIndex];
          return (
            <EditDeleteOrder
              order={order}
              onUpdateStatus={handleUpdateOrderStatus}
              onDelete={handleDeleteOrder}
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

  const handleUpdateOrderStatus = (updatedOrder) => {
    setData(
      data.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
  };

  const handleDeleteOrder = (id) => {
    setData(data.filter((order) => order.id !== id));
  };

  return (
    <div style={{ background: "#eceff1", height: "100vh" }}>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <MUIDataTable
            title="Orders"
            data={data}
            columns={columns}
            options={options}
          />
        </Box>
      </Box>
    </div>
  );
};

export default OrdersManagement;