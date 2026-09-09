import { DIRECTIONS, DirectionType } from "@/domain/models/Direction/constants";
import { MinSwipeDistance } from "@/adapters/input/constants";

export function getSwipeGesture(
    dx: number,
    dy: number
): DirectionType | null {
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (Math.max(absX, absY) < MinSwipeDistance) {
        return null;
    }

    if (absX > absY) {
        return dx > 0 ? DIRECTIONS.RIGHT : DIRECTIONS.LEFT
    } else {
        return dy > 0 ? DIRECTIONS.DOWN : DIRECTIONS.UP
    }
}