import { useState } from 'react';
import './App.css';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import Sidebar from './components/Sidebar';
import SelectedProject from './components/SelectedProject';

function App() {

  const [form, setform] = useState({
    toggle: undefined,
    projects: [],
    tasks: []
  })

  function addTask(value){
    setform(prv => {
      const newtask = {
        text : value,
        projectId: prv.toggle,
        id : Math.random()
      }
      return {
        ...prv,
        tasks: [newtask, ...prv.tasks, ]
      }
    })

  }
  function deleteTask(id){
    const check = form.tasks
    console.log(check)
    setform(prv => {
      return {
        ...prv,
        tasks: prv.tasks.filter((task) => task.id !== id)
      }
    })
  }
  // ---------------
  
  function selectProject(id) {
    setform(prv => {
      return {
        ...prv,
        toggle: id
      }
    })
  }

  function handleAddProject(projectData) {
    setform(prv => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      }
      return {
        ...prv,
        toggle: undefined,
        projects: [...prv.projects, newProject]
      }
    })
  }

  function deleteProject() {
    setform(prv => {
      return {
        ...prv,
        toggle: undefined,
        projects: prv.projects.filter((proj) => proj.id !== prv.toggle)
      }
    })
  }
  function toggleCancle() {
    setform(prv => {
      return {
        ...prv,
        toggle: undefined,
      }
    })
  }
  function handleform() {
    setform(prv => {
      return {
        ...prv,
        toggle: null
      }
    })
  }

  console.log(form)
  const selectedproject = form.projects.find(p => p.id === form.toggle)
  let content = <SelectedProject tasks={form.tasks} project={selectedproject} deleteProject={deleteProject} onAddTask={addTask} onDelTask={deleteTask}/>
  if (form.toggle === null) {
    content = <NewProject CancleForm={toggleCancle} onAddProject={handleAddProject} />
  } else if (
    form.toggle === undefined
  ) {
    content = <NoProjectSelected onToggleForm={handleform} />
  }
  return (
    <main className="h-screen my-8 flex gap-8 decoration-black">
      <Sidebar onToggleForm={handleform} projects={form.projects} onSelectProject={selectProject} selectedProjectId={form.toggle}/>
      {content}

    </main>
  );
}

export default App;
