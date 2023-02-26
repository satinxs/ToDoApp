import React from 'react';
import Button from './Button';

export default TaskView = ({ task, actions }) => {
    const toggleDone = () => { task.done = !task.done; actions.refresh(); };

    const style = Object.assign({ whiteSpace: 'pre-wrap' }, task.done ? { textDecoration: 'line-through' } : {});
    const toggleClassName = task.done ? 'icon-cross' : 'icon-checkmark';
    const toggleTooltip = task.done ? 'Mark as Pending' : 'Mark as Done';

    return <article className='grid' key={task.id}>
        <span style={style} >{task.title}</span>
        <div>
            <Button className='icon-pencil' onClick={() => actions.editTask(task)} tooltip='Edit' />
            <Button className={toggleClassName} onClick={toggleDone} tooltip={toggleTooltip} />
        </div>
    </article>
};
