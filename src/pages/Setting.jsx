import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Divider } from '@mui/joy';

function Setting() {
    const [name, setName] = useState('');
    const [savedName, setSavedName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSaveName = () => {
        setSavedName(name);
        setName('');
    };

    return (
        <>
            <Navbar />
            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1 style={{ marginTop: '50px' }} > Setting </h1>
                    <TextField
                        id="name"
                        label="Your Name"
                        value={name}
                        onChange={handleNameChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <Button onClick={handleSaveName} variant="contained" color="primary">
                        Save Name
                    </Button>
                    {savedName && (
                        <Typography paragraph>
                            Your name &quot;{savedName}&quot; has been saved.
                        </Typography>
                    )}  
                    <Divider/>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                        posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Setting;
