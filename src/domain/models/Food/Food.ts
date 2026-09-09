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
    const emptyCells: Coordinate[] = [];

    for (let x = 0; x < gridSize.width; x++) {
        for (let y = 0; y < gridSize.height; y++) {
            const isOccupied = occupation.some(
                (segment) => segment.x === x && segment.y === y
            );

            if (!isOccupied) {
                emptyCells.push({ x, y });
            }
        }
    }

    if (emptyCells.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return {
        position: emptyCells[randomIndex]
    };
};