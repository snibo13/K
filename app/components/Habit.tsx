import React, { memo } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../../styles';
import { HabitStructure } from '../models/Habit';
import { BSON } from 'realm';
import { Habit } from '../models/Habit';

type HabitProp = {
    habit: Habit
    complete: (habit: Habit) => void
};

export const HabitComponent = memo<HabitProp>(
    ({ habit, complete }) => {

        return (<View style={styles.card}>
            <Text>{habit.name}</Text>
            {habit.description != null &&
                <Text>{habit.description}</Text>
            }
            {habit.unit != null &&
                <Text>{habit.unit}</Text>
            }
            <Text>{habit.streak}</Text>
            <Button
                onPress={() => {
                    console.log("Updating");
                    console.log(habit);
                    complete(habit)
                }}
                title="Complete"
                color="#841584"
                accessibilityLabel="Complete the habit"
            />
        </View>
        )

    }
);