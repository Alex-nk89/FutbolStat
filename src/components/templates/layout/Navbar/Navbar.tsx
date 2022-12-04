import { FC } from 'react';
import { Box } from '@mui/material';

import { LogoNavbar } from '../../../atoms';
import { TreeView } from '../../../organisms';
import styles from './Navbar.module.scss';

const Navbar: FC = () => {
    return (
        <Box p={2} className={styles.navbar}>
            <LogoNavbar />
            <TreeView />
        </Box>
    );
};

export default Navbar;
