import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { TreeView as TreeViewMui, TreeItem, treeItemClasses } from '@mui/lab';
import { Home, Groups, LiveTv } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import { ITreeItem, keysTree } from '../../../domain/tree';
import { tree } from '../../../utils/navbar';
import styles from './TreeView.module.scss';
import { clsx } from '@mantine/core';

const icons: {
    [key in keysTree]: JSX.Element | null;
} = {
    main: <Home />,
    players: <Groups />,
    live: <LiveTv />,
    searchPlayers: null,
    topAssist: null,
    topCards: null,
    topGoals: null,
};

const TreeView: FC = () => {
    const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
        [`& .${treeItemClasses.content}`]: {
            color: 'var(--text-gray)',
            borderTopLeftRadius: 'var(--border-r-4)',
            borderBottomLeftRadius: 'var(--border-r-4)',
            '&:hover': {
                background: 'var(--bg-color-white05)',
            },
            '&.Mui-expanded': {
                color: 'var(--text-blue)',
                background: 'none',
                '& svg': {
                    fill: 'var(--text-blue)',
                },
            },
            '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
                backgroundColor: 'var(--bg-color-white05)',
            },
        },
    }));

    const createTreeView = (treeItems: ITreeItem[], nested?: boolean): any => {
        return treeItems.map(({ id, key, label, path, children }) => {
            const cn = clsx(styles.treeItem, {
                [styles.treeItemWithoutIcon]: icons[key] ? true : false,
                [styles.nested]: nested,
            });

            const labelContent = (
                <Box className={cn}>
                    {icons[key]}
                    <Typography variant='subtitle1' fontWeight={500}>
                        {label}
                    </Typography>
                </Box>
            );

            return (
                <StyledTreeItem
                    nodeId={id.toString()}
                    label={
                        children ? (
                            labelContent
                        ) : (
                            <a href={path}>{labelContent}</a>
                        )
                    }
                    key={id}
                    className={styles.link}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--size-s)',
                    }}
                >
                    {children ? createTreeView(children, true) : null}
                </StyledTreeItem>
            );
        });
    };

    return (
        <TreeViewMui
            className={styles.treeView}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--size-s)',
            }}
        >
            {createTreeView(tree)}
        </TreeViewMui>
    );
};

export default TreeView;
