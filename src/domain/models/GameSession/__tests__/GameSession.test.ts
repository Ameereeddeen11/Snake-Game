import {changeDirection, createGameSession, startGame, tick} from "@/domain/models/GameSession/GameSession";
import {DIRECTIONS} from "@/domain/models/Direction/constants";
import {GameSessionProps} from "@/domain/models/GameSession/props";
import {GameStatus} from "@/domain/models/GameSession/constants";

describe("GameSession", () => {
    it("moves the snake head forward on a tick when running", () => {
        const session = startGame(
            createGameSession({
                width: 20,
                height: 20,
            })
        );

        const nextSession = tick(session);

        expect(
            nextSession.snake.body[0]
        ).toEqual({
            x: 10,
            y: 9
        });
    });

    it('should ignore an immediate 180-degree turn', () => {
        const session = startGame(
            createGameSession({
                width: 20,
                height: 20,
            })
        );

        const updateSession = changeDirection(session, DIRECTIONS.DOWN);

        expect(updateSession.snake.direction).toBe(DIRECTIONS.UP);
    });

    it('should update direction when given a valid perpendicular turn', () => {
        const session = startGame(
            createGameSession({
                width: 20,
                height: 20
            })
        );

        const updateSession = changeDirection(session, DIRECTIONS.RIGHT);

        expect(updateSession.snake.direction).toBe(DIRECTIONS.RIGHT);
    });

    it('should end the game when the snake hits a wall', () => {
        const initialSession: GameSessionProps = {
            ...createGameSession({ width: 10, height: 10 }),
            status: GameStatus.RUNNING,
            snake: {
                body: [
                    { x: 0, y: 0 },
                    { x: 0, y: 1 },
                    { x: 0, y: 2 }
                ],
                direction: DIRECTIONS.UP
            }
        };

        const nextSession = tick(initialSession);

        expect(nextSession.status).toBe(GameStatus.GAME_OVER);
    });

    it('should allow moving into the tail position if no food is eaten', () => {
        const session: GameSessionProps = {
            ...createGameSession({ width: 10, height: 10 }),
            status: GameStatus.RUNNING,
            food: {
                position: {
                    x: 9,
                    y: 9
                }
            },
            snake: {
                body: [
                    { x: 2, y: 2 },
                    { x: 3, y: 2 },
                    { x: 3, y: 1 },
                    { x: 2, y: 1 }
                ],
                direction: DIRECTIONS.UP
            }
        };

        const nextSession = tick(session);

        expect(nextSession.status).toBe(GameStatus.RUNNING);
        expect(nextSession.snake.body[0])
            .toEqual({
                x: 2,
                y: 1
            });
    });

    it('should grow the snake and increments score when food is eaten', () => {
        const session: GameSessionProps = {
            ...createGameSession({ width: 10, height: 10}),
            status: GameStatus.RUNNING,
            food: {
                position: {
                    x: 6,
                    y: 5
                },
            },
            snake: {
                body: [
                    { x: 5, y: 5 },
                    { x: 4, y: 5 },
                    { x: 3, y: 5 }
                ],
                direction: DIRECTIONS.RIGHT
            },
            score: 0,
        };

        const nextSession = tick(session);

        expect(nextSession.snake.body).toHaveLength(4);
        expect(nextSession.score).toBe(10);
        expect(nextSession.snake.body[0])
            .toEqual({
                x: 6,
                y: 5
            });
    });

    it('should transition to victory when the snake fills the entire grid', () => {
        const session: GameSessionProps = {
            ...createGameSession({ width: 2, height: 2 }),
            status: GameStatus.RUNNING,
            food: {
                position: {
                    x: 1,
                    y: 1
                }
            },
            snake: {
                body: [
                    { x: 1, y: 0 },
                    { x: 0, y: 0 },
                    { x: 0, y: 1 }
                ],
                direction: DIRECTIONS.DOWN
            },
            score: 20,
        };

        const nextSession = tick(session);

        expect(nextSession.status).toBe(GameStatus.VICTORY);
        expect(nextSession.food).toBeNull();
        expect(nextSession.snake.body).toHaveLength(4);
    });
});