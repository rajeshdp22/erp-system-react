import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import {totalProducts,totalOrders} from "../Data"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../style.css";
import ChartGeo from "../components/Chart";
import CountUp from "react-countup";
import Chart3d from "../components/Chart3d";

function Dashboard() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
                  <Card
                    sx={{
                      p: 1.5,
                      minWidth: { xs: "100%", md: "49%" },
                      height: 194,
                      backgroundColor: "#a8a8ff8a",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h2">
                      <Inventory2Icon sx={{ fontSize: 40 }} />
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span>
                          {" "}
                          <CountUp
                            delay={1}
                            start={0}
                            end={totalProducts}
                            duration={4}
                          />
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        Total Products
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      p: 1.5,
                      minWidth: { xs: "100%", md: "49%" },
                      height: 194,
                      backgroundColor: "#a8a8ff8a",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h2">
                        <ShoppingCartIcon  sx={{ fontSize: 40 }}/>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span>
                          {" "}
                          <CountUp
                            delay={1}
                            start={0}
                            end={totalOrders}
                            duration={4}
                          />
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Card sx={{ height: { xs: "60vh", md: "100%" }, mt: 2 }}>
                  <CardContent>
                    <ChartGeo />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={2}>
                  <Card sx={{ p: 0.3, backgroundColor: "#5ee1ff7a" }}>
                    <CardContent>
                      <span>
                        ${" "}
                        <CountUp
                          delay={1}
                          start={0}
                          end={237238}
                          duration={4}
                        />
                        K
                      </span>
                      <br />
                      <span>Total Income</span>
                    </CardContent>
                  </Card>
                  <Card sx={{ p: 0.3, backgroundColor: "#5ee1ff7a" }}>
                    <CardContent>
                      <span>
                        ${" "}
                        <CountUp delay={1} start={0} end={30020} duration={4} />
                        K
                      </span>
                      <br />
                      <span>Total Income</span>
                    </CardContent>
                  </Card>
                  <Card sx={{ height: { xs: "60vh", md: "100%" } }}>
                    <CardContent>
                      <h3 style={{ textAlign: "center" }}>Popular Product</h3>
                      <Chart3d />
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
