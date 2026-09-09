import { useState, useEffect, useCallback } from "react";
import { DirectionType } from "@/domain/models/Direction/constants";
import { changeDirection, createGameSession, tick, startGame as startGameSession } from "@/domain/models/GameSession/GameSession";
import { GameSessionProps } from "@/domain/models/GameSession/props";
import {GameStatus, TickInterval} from "@/domain/models/GameSession/constants";

export function useSnakeGame(
    gridWidth = 20,
    gridHeight = 20
) {
    const [session, setSession] = useState<GameSessionProps>(
        () => createGameSession({
            width: gridWidth,
            height: gridHeight
        })
    );

    useEffect(() => {
        if (session.status !== GameStatus.RUNNING) {
            return;
        }

        const timer = setInterval(() => {
            setSession((prevSession) => tick(prevSession));
        }, TickInterval);

        return () => clearInterval(timer);
    }, [session.status]);

    const handleDirectionChange = useCallback(
        (newDirection: DirectionType) => {
            setSession(
                (prevSession) => changeDirection(prevSession, newDirection)
            );
        }, []
    );

    const resetGame = useCallback(() => {
        setSession(
            createGameSession({
                width: gridWidth,
                height: gridHeight
            })
        );
    }, [gridWidth, gridHeight]);

    const startGame = useCallback(() => {
        setSession((prevSession) => startGameSession(prevSession));
    }, []);

    return {
        session,
        score: session.score,
        status: session.status,
        snake: session.snake,
        food: session.food,
        changeDirection: handleDirectionChange,
        resetGame,
        startGame,
    };
}