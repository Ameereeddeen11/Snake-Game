import {Coordinate} from "@/domain/models/Coordinate/CoordinateInterface";
import {DirectionType} from "@/domain/models/Direction/constants";

export interface Snake {
    readonly body: readonly Coordinate[];
    readonly direction: DirectionType;
}
