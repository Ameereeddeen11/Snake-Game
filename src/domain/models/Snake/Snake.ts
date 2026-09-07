import { areCoordinatesEqual, getNextCoordinate } from "@/domain/models/Coordinate/Coordinate";
import { Coordinate } from "@/domain/models/Coordinate/CoordinateInterface";
import { DirectionType } from "@/domain/models/Direction/constants";
import { Snake } from "./props";

export const createSnake = (
    initialCoordinates: Coordinate[],
    initialDirection: DirectionType,
): Snake => ({
    body: initialCoordinates,
    direction: initialDirection,
});

export const moveSnake = (
    snake: Snake,
    shouldGrow: boolean
): Snake => {
    const currentHead = snake.body[0];
    const newHead = getNextCoordinate(currentHead, snake.direction);

    const newBody = shouldGrow ?
        [newHead, ...snake.body] :
        [newHead, ...snake.body.slice(0, -1)];

    return {
        ...snake,
        body: newBody
    };
};

export const hasSelfCollision = (
    snake: Snake,
    nextHead: Coordinate,
    willGrow: boolean
): boolean => {
    const segmentsToCheck = willGrow ? snake.body : snake.body.slice(0, -1);
    return segmentsToCheck.some((
        segment: Coordinate) => areCoordinatesEqual(segment, nextHead)
    );
}