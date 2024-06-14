import { useRef } from "react";
import Input from "../RU-components/Input";
import Modal from "../RU-components/Modal";

export default function NewProject({ CancleForm, onAddProject }) {

  const modal = useRef()
  const title = useRef()
  const des = useRef()
  const date = useRef()

  function handleSave() {
    const enterTitle = title.current.value
    const enterDes = des.current.value
    const enterDate = date.current.value

    if (enterTitle.trim() === "" ||
      enterDes.trim() === "" ||
      enterDate.trim() === "") {
      modal.current.disp()
      return
    }
    onAddProject({ title: enterTitle, des: enterDes, date: enterDate })
  }

  return (
    <>
      <Modal ref={modal} btntitle="Okay">
        <h1 className="text-xl font-bold text-stone-700 my-4">
          Please fill all the fields
        </h1>
        <p className="text-stone-600 mb-4">
          You must fill all the fields
        </p>
        <p className="text-stone-600 mb-4">
          to create a new project
        </p>
        <p className="text-stone-600 mb-4">
          Thank you
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>

            <button
              className="text-stone-800 hover:text-stone-950"
            onClick={CancleForm}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" label="Title" />
          <Input ref={des} label="Description" textarea />
          <Input ref={date} type="date" label="Due Date" />
        </div>
      </div>
    </>
  )

}