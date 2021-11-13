import React from 'react';
import Counter from './Counter/Counter';
import Profile from './Profile/Profile';
import user from '../user.json';
import PhonebookApp from './Phonebook/PhonebookApp';
import ChatApp from './Chat/ChatApp';
import Player from './Player/Player.js'
import ModalApp from './Modal/AppModal';
import ChatRealApp from './ChatReal/ChatRealApp';
import FetchApp from './Fetch/FetchApp';
import TaskApp from './Task/TaskApp';
import NewTaskApp from './NewTask/NewTaskApp';
import TaskTodoHookApp from './TaskTodoHook/TaskTodoHookApp';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import NotesApp from './Notes/NotesApp';
import DropdownNew from './DropdownNew/DropdownNew';
import CounterNew from './CounterNew/CounterNew';
import Form from './Form/Form';
import TaskNewApp from './TaskNew/TaskNewApp';
import CoffeApp from './CoffeHomeWork/CoffeApp';
import PhoneBookNewApp from './PhoneBookNew/PhoneBookNewApp';
import LifeCycleApp from './LifeCycle/LifeCycleApp';
import Modal1App from './Modal1/Modal1App';
import SerchImgApp from './SerchImg/SerchImgApp';
import RouteApp from './Route/RouteApp';
import CinemaSearchApp from './CinemaSearch/CinemaSearchApp';
import AppTimerPosts from './Timer/AppTimerPosts';



const App = () => (
    <div>
        
        <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} 
        />
        <Counter step={5} />
        <PhonebookApp />
        <ChatApp />
        <Player source="http://techslides.com/demos/sample-videos/small.mp4" />
        <ModalApp />
        <ChatRealApp />
        <FetchApp />
        <TaskApp />
        <NewTaskApp />
        <TaskTodoHookApp />
        <ErrorNotification />
        <NotesApp />
        <DropdownNew />
        <CounterNew />
        <Form />
        <TaskNewApp />
        <CoffeApp />
        <PhoneBookNewApp />
        <LifeCycleApp />
        <Modal1App />
        <SerchImgApp />
        {/* <RouteApp /> */}
        <CinemaSearchApp />
        <AppTimerPosts />
    </div>
);

export default App;