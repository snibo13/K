
import React from 'react';
import { useState } from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
export default function HabitComponent(habit) {
    habit = habit.habit;
    return (
        <SafeAreaView>

            <StatusBar hidden={true} />
            <View style={styles.card}>
                <Text>{habit.name}</Text>
                {habit.description != null &&
                    <Text>{habit.description}</Text>
                }
                {habit.unit != null &&
                    <Text>{habit.unit}</Text>
                }
                <Text>{habit.streak}</Text>
                <Text>{habit.streakRecord}</Text>
                <Button
                    onPress={() => { }}
                    title="Complete"
                    color="#841584"
                    accessibilityLabel="Complete the habit"
                />
            </View>
        </SafeAreaView>
    )

}

type HabitStructure = {
    name: string;
    description: string;
    unit: string;
    streak: number;
    streakRecord: number;
    started: Date;
    lastCompleted: Date;
}