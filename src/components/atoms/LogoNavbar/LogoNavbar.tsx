import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { SportsSoccer } from '@mui/icons-material';

import styles from './LogoNavbar.module.scss';

const LogoNavbar: FC = () => {
    return (
        <Box className={styles.logoNavbar}>
            <SportsSoccer color='primary' fontSize='large' />
            <Typography variant='h5'>FutbolStat</Typography>
        </Box>
    );
};

export default LogoNavbar;
