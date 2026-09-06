export const DIRECTIONS = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
} as const;

export type DirectionType = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];

export const OppositeDirections: Record<DirectionType, DirectionType> = {
    [DIRECTIONS.UP]: DIRECTIONS.DOWN,
    [DIRECTIONS.DOWN]: DIRECTIONS.UP,
    [DIRECTIONS.LEFT]: DIRECTIONS.RIGHT,
    [DIRECTIONS.RIGHT]: DIRECTIONS.LEFT
};

export const isOppositeDirection = (
    currentDirection: DirectionType,
    nextDirection: DirectionType
): boolean => {
    return OppositeDirections[currentDirection] === nextDirection;
}