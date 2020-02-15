import { IsString, MaxLength, IsUUID } from "class-validator";

export class CreateTweetDTO {
    @IsString()
    @MaxLength(140)
    tweet: string;

    @IsUUID()
    userId: string;
}