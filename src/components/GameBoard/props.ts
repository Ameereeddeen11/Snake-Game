import {DirectionType} from "@/domain/models/Direction/constants";
import {Coordinate} from "@/domain/models/Coordinate/CoordinateInterface";

export interface GameBoardProps {
    snake: Coordinate[];
    food: Coordinate | null;
    changeDirection: (direction: DirectionType) => void;
}