import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { loadHabits, createHabit } from './HabitsProvider';
import { ScrollView } from 'react-native-gesture-handler';
import HabitComponent from './Habit';
import HabitStructure from './Habit'

export default function HabitsView() {
    const navigation = useNavigation();
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

    // Data for new habit
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [unit, setUnit] = useState('');

    // Data for existing habits
    const [habits, setHabits] = useState<typeof HabitStructure[]>([]);


    useEffect(() => {
        loadHabits().then((habits) => {
            setHabits(habits);
            setLoading(false);
            console.log(habits);
        });
    }, []);


    return (
        loading ?
            <View><Text>Loading</Text></View> :
            <ScrollView>
                <ListItem.Accordion
                    content={
                        <ListItem.Content>
                            <ListItem.Title style={styles.title}>New Habit</ListItem.Title>
                        </ListItem.Content>
                    }
                    isExpanded={expanded}
                    onPress={() => setExpanded(!expanded)}
                >
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder='Name'
                            onChangeText={(val) => setName(val)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Description'
                            onChangeText={(val) => setDescription(val)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Unit'
                            onChangeText={(val) => setUnit(val)}
                        />
                        <Button
                            title='Create Habit'
                            onPress={() => {
                                // createHabit(name, description, unit);
                                setExpanded(false);
                            }}
                        />
                    </>
                </ListItem.Accordion>
                {
                    habits.map((habit) => (
                        <HabitComponent habit={habit} />
                    ))
                }
            </ScrollView>

    );
}