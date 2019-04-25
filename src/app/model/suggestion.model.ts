import { User } from './user.model';

export interface Suggestion {
    id: number;
    place: string;
    time: string;
    voters: User[];
}