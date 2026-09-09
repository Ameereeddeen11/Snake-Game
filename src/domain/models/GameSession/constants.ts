export const GameStatus = {
    IDLE: 'IDLE',
    RUNNING: 'RUNNING',
    PAUSED: 'PAUSED',
    GAME_OVER: 'GAME_OVER',
    VICTORY: 'VICTORY',
} as const;

export type GameStatusType = (typeof GameStatus)[keyof typeof GameStatus];

export const TickInterval = 150;