import React, { useContext, useRef } from 'react';

import Button from './Button';
import { TasksContext } from '../TaskContext';

export default TaskEditor = () => {
    const { currentTask, actions } = useContext(TasksContext);

    const changeTitle = ev => currentTask.set({ ...currentTask.value, title: ev.target.value });

    // const changeTitle = ev => setCurrentTask({ ...currentTask, title: ev.target.value });
    const enterKeyPressed = ev => { if (ev.key === 'Enter') doSaveTask(); };
    const deleteTask = () => actions.deleteCurrentTask();

    //Create a reference to the input (assigned later)
    const inputRef = useRef(null);

    const doSaveTask = () => {
        if (currentTask.value.title.length > 0) //Validate if there's any title to the task before saving it.
            actions.saveCurrentTask();

        if (inputRef.current) //If the reference was assigned to the input, after the button press reassign focus to it.
            inputRef.current.focus();
    };

    return <>
        <h4>Edit</h4>
        <div className='edit'>
            <label htmlFor='task-content'>To Do:</label>
            <input
                id='task-content'
                type='text'
                onChange={changeTitle}
                value={currentTask.value.title}
                onKeyDown={enterKeyPressed}
                ref={inputRef}
                autoFocus
            />
            <Button className='icon-plus' onClick={doSaveTask} tooltip='Save' />
            <Button className='icon-bin' onClick={deleteTask} tooltip='Delete' />
        </div>
    </>;
};
