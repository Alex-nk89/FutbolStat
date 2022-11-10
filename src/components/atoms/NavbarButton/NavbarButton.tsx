import { FC } from 'react';
import { IconButton } from '@mui/material';
import { FormatIndentIncrease } from '@mui/icons-material';

interface INavbarButton {
    toogleNavbar: () => void;
}

const NavbarButton: FC<INavbarButton> = ({ toogleNavbar }) => {
    return (
        <IconButton color='primary' onClick={toogleNavbar}>
            <FormatIndentIncrease />
        </IconButton>
    );
};

export default NavbarButton;
