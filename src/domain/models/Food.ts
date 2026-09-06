import {areCoordinatesEqual, Coordinate} from "@/domain/models/Coordinate";

export interface Food {
    readonly position: Coordinate;
}

export const spawnFood = (
    occupation: Coordinate[],
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