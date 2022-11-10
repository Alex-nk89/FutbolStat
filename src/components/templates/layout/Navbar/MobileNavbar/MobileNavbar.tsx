import { FC } from 'react';
import { Drawer } from '@mui/material';

import { Navbar } from '../../../';

interface IMobileNavbar {
    isOpen: boolean;
    onClose: () => void;
}

const MobileNavbar: FC<IMobileNavbar> = ({ isOpen, onClose }) => {
    return (
        <Drawer
            variant='temporary'
            open={isOpen}
            onClose={onClose}
            ModalProps={{ keepMounted: true }}
            sx={{
                display: { xs: 'block', lg: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box' },
            }}
        >
            <Navbar />
        </Drawer>
    );
};

export default MobileNavbar;
