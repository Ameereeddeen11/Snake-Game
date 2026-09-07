export const DIRECTIONS = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
} as const;

export type DirectionType = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];