import React, { createContext } from 'react';
import { nanoid, makeObservable } from './utilities';

export const TasksContext = createContext();
export const TasksProvider = ({ children }) => {
    const tasks = makeObservable([]);
    const currentTask = makeObservable({ title: '', done: false });

    const actions = {
        saveTask(task) {
            if (!task.id) task.id = nanoid();
            if (!task.timestamp) task.timestamp = Date.now();

            tasks.set([...tasks.value, task].sort((a, b) => a.timestamp - b.timestamp));
        },
        deleteTask(id) {
            tasks.set(tasks.value.filter(t => t.id !== id));
        },
        saveCurrentTask() {
            currentTask.value.done = false;
            this.saveTask(currentTask.value);
            currentTask.delete();
        },
        deleteCurrentTask() {
            currentTask.delete();
        },
        editTask(task) {
            this.deleteTask(task.id);
            currentTask.set(task);
        },
        refresh() {
            tasks.set([...tasks.value]);
        },
    };

    return <TasksContext.Provider value={{ tasks, actions, currentTask }}>
        {children}
    </TasksContext.Provider>;
};