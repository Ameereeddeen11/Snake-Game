import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSnakeGame } from "@/hooks/useSnakeGame";
import { GameBoard } from "@/components/GameBoard/GameBoard";
import { GameStatus } from "@/domain/models/GameSession/constants";
import { styles } from "@/styles/index";

export default function GameScreen() {
    const {
        snake,
        food,
        score,
        status,
        changeDirection,
        resetGame,
        startGame
    } = useSnakeGame();

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.scoreText}>Score: {score}</Text>
                {status === GameStatus.GAME_OVER &&
                    <Text style={styles.gameOverText}>
                        Game Over!
                    </Text>
                }
            </View>

            <View style={styles.boardContainer}>
                <GameBoard
                    snake={snake.body}
                    food={food ? food.position : null}
                    changeDirection={changeDirection}
                />
            </View>

            <View style={styles.footer}>
                {status === GameStatus.IDLE && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={startGame}
                    >
                        <Text style={styles.buttonText}>
                            Start Game
                        </Text>
                    </TouchableOpacity>
                )}
                
                {status === GameStatus.GAME_OVER && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={resetGame}
                    >
                        <Text style={styles.buttonText}>
                            Play Again
                        </Text>
                    </TouchableOpacity>
                )}
                
                {status !== GameStatus.IDLE && status !== GameStatus.GAME_OVER && (
                    <Text style={styles.hintText}>
                        Swipe anywhere on the board to steer
                    </Text>
                )}
            </View>
        </SafeAreaView>
    );
}