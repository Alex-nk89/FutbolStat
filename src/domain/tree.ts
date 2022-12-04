export interface ITreeItem {
    id: number,
    key: keysTree,
    label: string,
    path: string,
    children: ITreeItem[] | null,
}

export type keysTree = 'main' | 'live' | 'players' | 'searchPlayers' | 'topGoals' | 'topAssist' | 'topCards';