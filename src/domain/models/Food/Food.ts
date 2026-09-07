import { areCoordinatesEqual } from "@/domain/models/Coordinate/Coordinate";
import { Coordinate } from "@/domain/models/Coordinate/CoordinateInterface";
import { Food } from "./props";

export const spawnFood = (
    occupation: readonly Coordinate[],
    gridSize: {
        width: number,
        height: number
    }
): Food | null => {
    if (occupation.length >= gridSize.width * gridSize.height) {
        return null;
    }

    const randomX = Math.random() * gridSize.width;
    const randomY = Math.random() * gridSize.height;

    const newPosition: Coordinate = {
        x: Math.floor(randomX),
        y: Math.floor(randomY)
    };

    if (occupation.some((segment) => areCoordinatesEqual(segment, newPosition))) {
        return spawnFood(occupation, gridSize);
    }

    return {
        position: newPosition
    };
};