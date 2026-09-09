import { StyleSheet } from "react-native";
import {Colors} from "@/constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundScreen,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
    },
    header: {
        alignItems: "center",
        marginTop: 10,
    },
    scoreText: {
        color: Colors.scoreText,
        fontSize: 28,
        fontWeight: "bold"
    },
    gameOverText: {
        color: Colors.gameOverText,
        fontSize: 20,
        fontWeight: '600',
        marginTop: 6,
    },
    boardContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    footer: {
        marginBottom: 20,
        minHeight: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    hintText: {
        color: Colors.hintText,
        fontSize: 14,
    },
    button: {
        backgroundColor: Colors.buttonBackground,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: Colors.buttonText,
        fontSize: 16,
        fontWeight: '600'
    },
});