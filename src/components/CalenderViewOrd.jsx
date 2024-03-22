import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import MUIDataTable from "mui-datatables";
import { ordersForCalendar } from "../Data";
import "../style.css";

const TileContent = ({ date, view }) => {
  if (view === "month") {
    const ordersByDate = ordersForCalendar.filter(
      (order) => order.deliveryDate.toDateString() === date.toDateString()
    );
    return (
      <div>
        {ordersByDate.length > 0 && <p>{ordersByDate.length} orders</p>}
      </div>
    );
  }
  return null;
};

TileContent.propTypes = {
  date: PropTypes.instanceOf(Date),
  view: PropTypes.string,
};

const OrdersCalendarView = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "customer",
      label: "Customer",
    },
    {
      name: "product",
      label: "Product",
    },
  ];

  const ordersByDate = ordersForCalendar.filter(
    (order) => order.deliveryDate.toDateString() === date.toDateString()
  );

  const data = ordersByDate.map((order) => ({
    id: order.id,
    customer: order.customer,
    product: order.product,
  }));

  const options = {
    filter: true,
    search: false,
    selectableRows: "none",
    print: false,
    download: false,
    viewColumns: false,
    setTableProps: () => ({
      style: {
        minWidth: "95%",
        minHeight: "100px",
      },
    }),
  };

  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={80} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "row" }}>
            <div style={{ flex: "1" }}>
              <Calendar onChange={onChange} value={date} tileContent={TileContent} />
            </div>
            <div className="orders-list-container" style={{ flex: "1.5" }}>
              <h3>Orders for {date.toDateString()}</h3>
              <MUIDataTable title={"Orders"} data={data} columns={columns} options={options} />
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default OrdersCalendarView;
