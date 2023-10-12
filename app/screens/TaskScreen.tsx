import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, Button } from 'react-native';
import { useTaskManager } from '../hooks/useTaskManager';
import { useState } from 'react';
import { ListItem } from 'react-native-elements';
import { styles } from '../../styles';
import { TaskItem } from '../components/TaskItem';
import { HabitComponent } from '../components/Habit';
import { HabitStructure } from '../models/Habit';
import { useHabitManager } from '../hooks/useHabitManager';
import { Habit } from '../models/Habit';
type TaskScreenProps = {
  userId?: string;
};

/**
 * Displays the list of tasks and a form to add new tasks.
 */
export function TaskScreen({ userId }: TaskScreenProps) {
  const { habits, addHabit, completeHabit, deleteHabit } = useHabitManager(userId);
  const [expanded, setExpanded] = useState(false);
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
              addHabit(name, description, unit);
              setExpanded(false);
            }}
          />
        </>
      </ListItem.Accordion>
      {habits.length > 0 ?
        (
          habits.map((task) => (
            <HabitComponent habit={task} complete={completeHabit}/>
          ))) : (
          <Text>None</Text>
        )
      }
    </ScrollView>
  );
}