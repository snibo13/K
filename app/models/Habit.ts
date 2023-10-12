import Realm, { BSON } from 'realm';

export class Habit extends Realm.Object {
    _id: Realm.BSON.ObjectId = new Realm.BSON.ObjectId();
    name!: string;
    unit!: string;
    streak: number = 0;
    description: string = '';
    createdAt: Date = new Date();

    static primaryKey: string = '_id';
}

export type HabitStructure = {
    name: string;
    description: string;
    unit: string;
    streak: number;
    streakRecord: number;
    started: Date;
    lastCompleted: Date;
}