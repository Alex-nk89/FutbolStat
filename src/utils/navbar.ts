import { ITreeItem } from "../domain/tree";

export const tree: ITreeItem[] = [
    {
        id: 1,
        key: 'main',
        label: 'Главная',
        path: '/',
        children: null,
    },
    {
        id: 7,
        key: 'live',
        label: 'Live результаты',
        path: '/live',
        children: null,
    },
    {
        id: 2,
        key: 'players',
        label: 'Игроки',
        path: 'players',
        children: [
            {
                id: 3,
                key: 'searchPlayers',
                label: 'Поиск',
                path: '/players/search',
                children: null,
            },
            {
                id: 4,
                key: 'topGoals',
                label: 'Бомбардиры',
                path: '/players/topGoals',
                children: null,
            },
            {
                id: 5,
                key: 'topAssist',
                label: 'Ассистенты',
                path: '/players/topAssist',
                children: null,
            },
            {
                id: 6,
                key: 'topCards',
                label: 'Карточки',
                path: '/players/topCards',
                children: null,
            }
        ]
    },
]