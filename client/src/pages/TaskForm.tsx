import { FormEvent, useState } from "react";
import { useTasks } from "../hooks/context/tasksContext";
import { useHistory } from "react-router-dom";
import { ChangeEvent } from "react";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const { createTask } = useTasks();
  const history = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTask(task);
    history.push("/");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTask({ ...task, [e.target.name]: e.target.value });

  return (
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-md-4 offset-md-4 my-auto">
          {/* Task Form */}
          <form className="card card-body" onSubmit={handleSubmit}>
            <h1 className="h3">Create a Task</h1>

            <div className="mb-2">
              <label htmlFor="title">Title:</label>
              <input
                name="title"
                type="text"
                className="form-control"
                placeholder="Title"
                onChange={handleChange}
                autoFocus
              />
            </div>
            <div className="mb-2">
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                rows={2}
                placeholder="Write a description"
                className="form-control"
                onChange={handleChange}
              ></textarea>
              <button className="btn btn-primary mt-4 w-100">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
