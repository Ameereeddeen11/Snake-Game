import {areCoordinatesEqual, Coordinate, getNextCoordinate} from "@/domain/models/Coordinate";
import { DirectionType } from "@/domain/models/Direction";
import {snap} from "@expo/ui/jetpack-compose/modifiers";


export interface Snake {
    readonly body: readonly Coordinate[];
    readonly direction: DirectionType;
}

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
        segment) => areCoordinatesEqual(segment, nextHead)
    );
}