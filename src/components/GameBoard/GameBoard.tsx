import { useRef } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { getSwipeGesture } from "@/adapters/input/swipeGesture";
import { styles } from "@/components/GameBoard/styles";
import { GameBoardProps } from "@/components/GameBoard/props";
import { CELL_SIZE } from "@/components/GameBoard/constants";

export function GameBoard(
    {
        snake,
        food,
        changeDirection
    } : GameBoardProps
) {
    const hasSwiped = useRef(false);

    const panGesture = Gesture.Pan()
        .runOnJS(true)
        .onBegin(() => {
            hasSwiped.current = false;
        })
        .onUpdate((event) => {
            if (hasSwiped.current) return;

            const direction = getSwipeGesture(event.translationX, event.translationY);
            if (direction) {
                changeDirection(direction);
                hasSwiped.current = true;
            }
        });

    return (
        <GestureDetector gesture={panGesture}>
            <View style={styles.boardContainer}>
                {food && (
                    <View
                        style={[
                            styles.cell,
                            styles.food,
                            {
                                left: food.x * CELL_SIZE,
                                top: food.y * CELL_SIZE,
                            }
                        ]}
                    />
                )}

                {snake.map((segment) => (
                    <View
                        key={`${segment.x}-${segment.y}`}
                        style={[
                            styles.cell,
                            styles.snake,
                            {
                                left: segment.x * CELL_SIZE,
                                top: segment.y * CELL_SIZE
                            }
                        ]}
                    />
                ))}
            </View>
        </GestureDetector>
    )
}