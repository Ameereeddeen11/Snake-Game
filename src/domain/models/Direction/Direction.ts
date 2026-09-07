import { DIRECTIONS, DirectionType } from "./constants";

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