import {Snake} from "@/domain/models/Snake/props";
import {Food} from "@/domain/models/Food/props";
import {GameStatusType} from "@/domain/models/GameSession/constants";

export interface GridDimensions {
    readonly width: number;
    readonly height: number;
}

export interface GameSessionProps  {
    readonly snake: Snake;
    readonly food: Food | null;
    readonly grid: GridDimensions;
    readonly status: GameStatusType;
    readonly score: number;
}