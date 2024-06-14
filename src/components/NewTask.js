import { useState } from "react";

export default function NewTask({Addtask,DelTask}) {

    const [taskValue, settaskvalue] = useState()

    function handleValue(event) {
        settaskvalue(event.target.value);
    }

    function addTask(){
        if(!taskValue) return
        Addtask(taskValue)
        settaskvalue("")
    }
    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleValue}
                value={taskValue}
            />
            <button
                className="text-stone-700 hover:text-stone-950"
                onClick={addTask}
            >
                Add Task
            </button>
        </div>
    );
}