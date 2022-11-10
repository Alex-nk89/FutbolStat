import { FC, memo } from 'react';
import { Toolbar, Box } from '@mui/material';

import { NavbarButton } from '../../../atoms';
import { FullSearch } from '../../../molecules';

import style from './Header.module.scss';

interface IHeader {
    toogleNavbar: () => void;
}

const Header: FC<IHeader> = memo(({ toogleNavbar }) => {
    return (
        <Toolbar className={style.header}>
            <Box sx={{ display: { lg: 'none' } }}>
                <NavbarButton toogleNavbar={toogleNavbar} />
            </Box>
        </Toolbar>
    );
});

export default Header;
