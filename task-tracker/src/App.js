import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = ()  => {
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

  const deleteTask = (id) => {
    //show list of tasks whose ids don't match the one that is clicked.
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No Tasks to Show')}
    </div>
  );
}

export default App;
