import { FC } from 'react';
import { Drawer } from '@mui/material';

import { Navbar } from '../../../';

const DesktopNavbar: FC = () => {
    return (
        <Drawer
            variant='permanent'
            open
            sx={{
                display: { xs: 'none', lg: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box' },
            }}
        >
            <Navbar />
        </Drawer>
    );
};

export default DesktopNavbar;
