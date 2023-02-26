import React, { useContext, useState } from 'react';
import { TasksContext } from '../TaskContext';

import Checkbox from './Checkbox';
import TaskView from './TaskView';

export default TaskList = () => {
    const { tasks, actions } = useContext(TasksContext);

    const [showDone, setShowDone] = useState(false);
    const [showPending, setShowPending] = useState(true);

    const doneTasks = tasks.value.filter(t => t.done);
    const pendingTasks = tasks.value.filter(t => !t.done);

    return <>
        <Checkbox value={showDone} setValue={setShowDone} id='show-done'>Show Done</Checkbox>
        <Checkbox value={showPending} setValue={setShowPending} id='show-pending'>Show Pending</Checkbox>
        {showPending
            ? <>
                <h5>Pending ({pendingTasks.length} tasks)</h5>
                {pendingTasks.map(task => <TaskView task={task} actions={actions} />)}
            </>
            : null}
        {showDone
            ? <>
                <h5>Done ({doneTasks.length} tasks)</h5>
                {doneTasks.map(task => <TaskView task={task} actions={actions} />)}
            </>
            : null}
    </>;
};