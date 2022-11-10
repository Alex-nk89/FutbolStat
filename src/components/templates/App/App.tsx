import { useState } from 'react';
import { AppBar } from '@mui/material';

import { Header, MobileNavbar, DesktopNavbar } from '..';

function App() {
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(!true);

    const toogleMobileHandler = () => {
        setIsMobileNavbarOpen(!isMobileNavbarOpen);
    };

    return (
        <AppBar position='fixed'>
            <Header toogleNavbar={toogleMobileHandler} />
            <MobileNavbar
                isOpen={isMobileNavbarOpen}
                onClose={toogleMobileHandler}
            />
            <DesktopNavbar />
        </AppBar>
    );
}

export default App;
