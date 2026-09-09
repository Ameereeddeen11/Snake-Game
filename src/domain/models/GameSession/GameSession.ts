import { createSnake, moveSnake, hasSelfCollision } from "@/domain/models/Snake/Snake";
import {generateFood, spawnFood} from "@/domain/models/Food/Food";
import { areCoordinatesEqual, getNextCoordinate } from "@/domain/models/Coordinate/Coordinate";
import { Coordinate } from "@/domain/models/Coordinate/CoordinateInterface";
import { isOppositeDirection } from "@/domain/models/Direction/Direction";
import { DirectionType, DIRECTIONS } from "@/domain/models/Direction/constants";
import { GameStatus } from "./constants";
import { GridDimensions, GameSessionProps } from "./props";

export const createGameSession = (
    grid: GridDimensions = { width: 20, height: 20 }
): GameSessionProps => {
    const initialSnake = createSnake(
        [
            { x: Math.floor(grid.width / 2), y: Math.floor(grid.height / 2) },
            { x: Math.floor(grid.width / 2), y: Math.floor(grid.height / 2) + 1 },
            { x: Math.floor(grid.width / 2), y: Math.floor(grid.height / 2) + 2 },
        ],
        DIRECTIONS.UP
    );

    return {
        snake: initialSnake,
        lastMovedDirection: DIRECTIONS.UP,
        food: spawnFood(initialSnake.body, grid),
        grid,
        status: GameStatus.IDLE,
        score: 0,
    };
};

export const startGame = (
    session: GameSessionProps
): GameSessionProps => {
    if (session.status === GameStatus.RUNNING) return session;
    return {
        ...session,
        status: GameStatus.RUNNING
    };
};


export const pauseGame = (
    session: GameSessionProps
): GameSessionProps => {
    if (session.status !== GameStatus.RUNNING) return session;
    return {
        ...session,
        status: GameStatus.PAUSED
    };
};

export const changeDirection = (
    session: GameSessionProps,
    newDirection: DirectionType
): GameSessionProps => {
    if (session.status !== GameStatus.RUNNING) return session;
    if (isOppositeDirection(session.lastMovedDirection, newDirection)) return session;

    return {
        ...session,
        snake: {
            ...session.snake,
            direction: newDirection
        }
    };
};

export const isOutOfBounds = (
    coordinate: Coordinate,
    grid: GridDimensions
): boolean => {
    return (
        coordinate.x < 0 ||
            coordinate.x >= grid.width ||
            coordinate.y < 0 ||
            coordinate.y >= grid.height
    );
};

export const tick = (
    session: GameSessionProps
): GameSessionProps => {
    if (session.status !== GameStatus.RUNNING) return session;

    const nextHead = getNextCoordinate(session.snake.body[0], session.snake.direction);

    const eatsFood = session.food !== null && areCoordinatesEqual(nextHead, session.food.position);

    const hitsWall = isOutOfBounds(nextHead, session.grid);
    const hitsSelf = hasSelfCollision(session.snake, nextHead, eatsFood);

    if (hitsWall || hitsSelf) {
        return {
            ...session,
            status: GameStatus.GAME_OVER
        };
    }

    const updateSnake = moveSnake(session.snake, eatsFood);

    if (eatsFood) {
        const nextFood = spawnFood(updateSnake.body, session.grid);
        const hasWon = nextFood === null;

        return {
            ...session,
            snake: updateSnake,
            lastMovedDirection: session.snake.direction,
            food: nextFood,
            score: session.score + 10,
            status: hasWon ? GameStatus.VICTORY : GameStatus.RUNNING
        };
    }

    return {
        ...session,
        snake: updateSnake,
        lastMovedDirection: session.snake.direction
    };
};