import React from 'react';
import { createRoot } from 'react-dom/client';

import { TasksProvider } from './TaskContext';
import TaskEditor from './components/TaskEditor';
import TaskList from './components/TaskList';

//We import the styles for the app. This just processes the CSS files & outputs them to /public.
//You still need to import them through the index.html file.
import './styles/app.css';

const App = () => {
    //We use Provider/Context to allow easy passing of properties. Read more: https://beta.reactjs.org/learn/passing-data-deeply-with-context
    return <TasksProvider>
        <TaskEditor />
        <TaskList />
    </TasksProvider>;
};

//When the browser finished loading...
document.addEventListener('DOMContentLoaded', () => {
    //HTML element on which we'll render our React app
    const rootElement = document.getElementById('root');

    //We create the virtual root and render the ToDo application starting with the Router component.
    createRoot(rootElement).render(<App />);
});
