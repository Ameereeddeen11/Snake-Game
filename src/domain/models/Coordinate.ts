import { DirectionType, DIRECTIONS } from "@/domain/models/Direction";

export interface Coordinate {
    readonly x: number;
    readonly y: number;
}

export const createCoordinate = (
    x: number,
    y: number
): Coordinate => ({
    x,
    y
});

export const areCoordinatesEqual = (
    a: Coordinate,
    b: Coordinate
): boolean => {
    return a.x === b.x && a.y === b.y;
};

export const getNextCoordinate = (
    currentCoordinate: Coordinate,
    direction: DirectionType
): Coordinate => {
    switch (direction) {
        case DIRECTIONS.UP:
            return {
                x: currentCoordinate.x,
                y: currentCoordinate.y - 1
            };
        case DIRECTIONS.DOWN:
            return {
                x: currentCoordinate.x,
                y: currentCoordinate.y + 1
            };
        case DIRECTIONS.LEFT:
            return {
                x: currentCoordinate.x - 1,
                y: currentCoordinate.y
            };
        case DIRECTIONS.RIGHT:
            return {
                x: currentCoordinate.x + 1,
                y: currentCoordinate.y
            };
    }
};