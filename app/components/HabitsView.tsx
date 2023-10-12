import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';
import { styles } from '../../styles';
import { ListItem } from 'react-native-elements';
import { HabitComponent } from '../components/Habit';

export function HabitsView(habits: any) {
    const [expanded, setExpanded] = useState(true);
    const [loading, setLoading] = useState<boolean>(true);

    // Data for new habit
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [unit, setUnit] = useState('');

    return (

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
                habits.map((habit: any) => (
                    <HabitComponent key={habit.name} habit={habit} />
                ))
            }
        </ScrollView>


    );
}