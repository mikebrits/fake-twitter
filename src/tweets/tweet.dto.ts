import { IsString, MaxLength, IsUUID } from "class-validator";
import { User } from "src/users/user.entity";

export class CreateTweetDTO {
    @IsString()
    @MaxLength(140)
    tweet: string;

    user?: User;
}