// import NewTask from './NewTask.jsx';

import NewTask from "./NewTask";

export default function Tasks({tasks, onTaskAdd, onTaskDel}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">My Tasks</h2>
      <NewTask Addtask={onTaskAdd} DelTask={onTaskDel}/>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onTaskDel(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}