import { useCallback, useState } from 'react';
import { useQuery, useRealm } from '@realm/react';

import { Habit } from '../models/Habit';

export function useHabitManager(userId = 'SYNC_DISABLED') {
    const realm = useRealm();
    const habits = useQuery(Habit);


    const addHabit = useCallback(
        (name: string, description: string, unit: string) => {
            if (!name) return;
            realm.write(() => {
                realm.create(Habit, { name, description, unit });
            });
        },
        [realm, userId],
    );

    const completeHabit = useCallback(
        (habit: Habit) => {
            realm.write(() => {
                habit.streak += 1;
            });
        },
        [realm],
    );

    const deleteHabit = useCallback(
        (habit: Habit) => {
            realm.write(() => {
                realm.delete(habit);
            });
        },
        [realm],
    );

    return { habits, addHabit, completeHabit, deleteHabit };
}