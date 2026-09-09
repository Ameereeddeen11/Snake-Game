import { StyleSheet } from "react-native";
import { BOARD_SIZE, CELL_SIZE } from "@/components/GameBoard/constants";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
    boardContainer: {
        width: BOARD_SIZE * CELL_SIZE,
        height: BOARD_SIZE * CELL_SIZE,
        position: "relative",
        overflow: "hidden",
        backgroundColor: Colors.backgroundBoard,
        borderColor: Colors.borderColor,
        borderWidth: 2,
    },
    cell: {
        position: "absolute",
        width: CELL_SIZE,
        height: CELL_SIZE
    },
    snake: {
        backgroundColor: Colors.snake,
    },
    food: {
        backgroundColor: Colors.food,
        borderRadius: CELL_SIZE / 2,
    }
});