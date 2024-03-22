import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Contact() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", bgcolor: "#eceff1" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={{ m: 2 }}>
                <CardHeader
                  title={"Contact Us"}
                  subheader={"We accept questions from customers using the inquiry form."}
                  sx={{ p: 5, bgcolor: "#f3f4f6" }}
                />  
                <CardContent sx={{ p: 5 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="message"
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    sx={{ mt: 2, bgcolor: "aliceblue", color: "black" }}
                  >
                    Submit
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
