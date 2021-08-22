import { useEffect } from "react";
import { useTasks } from "../hooks/context/tasksContext";

import Header from "../components/Header";

const HomePage = () => {
  const { getAll, deleteTask, state } = useTasks();

  useEffect(() => {
    console.log("cargo");
    (async () => {
      await getAll();
    })();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    await getAll();
  };

  function mapStateArray() {
    return state.array.map((task: any, index: number) => {
      return (
        <div className="col-md-4 p-2" key={index}>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">{task.title}</h1>
              <p>{task.description}</p>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(task._id)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  if (state.fetching) {
    return <div className="spinner-border" role="status"></div>;
  }

  return (
    <div className="container py-5">
      <Header />
      <div className="row">{mapStateArray()}</div>
    </div>
  );
};

export default HomePage;
