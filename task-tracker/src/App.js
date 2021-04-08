import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = ()  => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 8th at 12:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Gym',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 4,
      text: 'DryClean',
      day: 'Feb 6th at 10:30pm',
      reminder: true,
    },
    {
      id: 5,
      text: 'Dinner at Home',
      day: 'Feb 9th at 6:30pm',
      reminder: true,
    }
  ])

  //Add Task
  const addTask = (task) => {
    console.log('clicked')
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = { id, ...task } 
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    //show list of tasks whose ids don't match the one that is clicked.
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} showAdd={showAddTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks to Show')}
    </div>
  );
}

export default App;
