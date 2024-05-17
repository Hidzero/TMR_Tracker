import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { styles } from '../../assets/css/Css';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState('');
    const IP = process.env.IP;
    const PORT = process.env.PORT;

    useEffect(() => {
        getTasks();
    }, []);
    
    async function createTask() {
        const data = {
            description: inputValue,
            completed: false
        };
        const baseUrl = `http://${IP}:${PORT}/task`;
        await axios.post(baseUrl, data)
        .then(response => {
            setTasks([...tasks, { ...data, _id: response.data._id }]);
        }).catch(error => {
            console.log(error);
        });
    }

    async function getTasks() {
        const baseUrl = `http://${IP}:${PORT}/task`;
        await axios.get(baseUrl)
        .then(response => {
            setTasks(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    async function deleteTaskFromDB(taskData, index) {
        const baseUrl = `http://${IP}:${PORT}/task/${taskData._id}`;
        await axios.delete(baseUrl)
        .then(() => {
            const updatedTasks = tasks.filter((task, idx) => idx !== index);
            setTasks(updatedTasks);
        }).catch(error => {
            console.log(error);
        });
    }
    
    async function updateTask(taskData) {
        const data = {
            completed: taskData.completed
        };
        const baseUrl = `http://${IP}:${PORT}/task/${taskData._id}`;
        await axios.put(baseUrl, data)
        .catch(error => {
            console.log(error);
        });
    }

    function addTask() {
        if (inputValue.trim() !== '') {
            const newTask = {
                description: inputValue,
                completed: false
            };
            setTasks([...tasks, newTask]);
            createTask();
            setInputValue('');
        }
    };

    function markDone(index) {
        const updatedTasks = tasks.map((task, idx) => {
            if (idx === index) {
                const updatedTask = { ...task, completed: !task.completed };
                updateTask(updatedTask);
                return updatedTask;
            }
            return task;
        });
    
        const sortedTasks = updatedTasks.sort((a, b) => {
            return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
        });
    
        setTasks(sortedTasks);
    }

    function handleKeyDown(e) {
        if (e.nativeEvent.key === 'Enter') {
            addTask();
        }
    }
    
    function startEditing(task, index) {
        setEditingIndex(index);
        setEditText(task.description);
    }

    async function saveEdit(task, index) {
        const updatedTask = { ...task, description: editText };
        const baseUrl = `http://${IP}:${PORT}/task/${task._id}`;
        try {
            await axios.put(baseUrl, updatedTask);
            const updatedTasks = tasks.map((t, idx) => idx === index ? updatedTask : t);
            setTasks(updatedTasks);
            setEditingIndex(null); // Sair do modo de edição
            setEditText('');
        } catch (error) {
            console.error(error);
        }
    }
 
    return (
        <View style={styles.appTodo}>
            <View style={styles.header}>
                <FontAwesomeIcon icon={faClipboardCheck} style={styles.clipboardIcon} />
                <Text style={styles.title}>To-Do List</Text>
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={setInputValue}
                    onSubmitEditing={handleKeyDown}
                    placeholder="Add a new task..."
                />
                <TouchableOpacity style={styles.button} placeholder="Add" onPress={addTask} >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={[styles.task, item.completed ? styles.completed : null]}>
                        <TouchableOpacity onPress={() => markDone(index)}>
                            <Text style={styles.checkbox}>{item.completed ? '☑' : '☐'}</Text>
                        </TouchableOpacity>
                        {editingIndex === index ? (
                            <TextInput
                                style={styles.inputEdit}
                                value={editText}
                                onChangeText={setEditText}
                                onSubmitEditing={() => saveEdit(item, index)}
                            />
                        ) : (
                            <Text style={styles.textDescription} onPress={() => startEditing(item, index)}>
                                {item.description}
                            </Text>
                        )}
                        <TouchableOpacity onPress={() => deleteTaskFromDB(item, index)}>
                            <FontAwesomeIcon icon={faTrash} style={styles.trashIcon} />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
