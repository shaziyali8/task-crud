import Button from "../RU-components/Button.js";

export default function NoProjectSelected({onToggleForm}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onToggleForm}>Create new project</Button>
      </p>
    </div>
  );
}