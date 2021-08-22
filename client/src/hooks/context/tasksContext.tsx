import { createContext, useContext, useMemo, useReducer } from "react";
import { initialState, tasksReducer } from "../reducer/tasksReducer";
import { tasksActions } from "../actions/tasksActions";
import axios from "axios";

type Task = {
  title: string;
  description: string;
};

const TasksContext = createContext<any>(initialState);

export const TasksProvider = (props: any) => {
  const url = "http://localhost:4000/tasks";

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  async function createTask(newTask: Task) {
    dispatch({ type: tasksActions.CREATE_TASK });
    try {
      const res = await axios.post(url, newTask);
      if (res.status === 201) {
        dispatch({ type: tasksActions.CREATE_TASK_SUCCESS, payload: res.data });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: tasksActions.CREATE_TASK_ERROR, payload: error });
    }
  }

  async function editTask(id: string, updatedTask: Task) {
    dispatch({ type: tasksActions.EDIT_TASK });
    try {
      const res = await axios.put(`${url}/${id}`, updatedTask);
      if (res.status === 200) {
        dispatch({
          type: tasksActions.EDIT_TASK_SUCCESS,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: tasksActions.EDIT_TASK_ERROR, payload: error });
    }
  }

  async function deleteTask(id: string) {
    dispatch({
      type: tasksActions.DELETE_TASK,
    });
    try {
      const res = await axios.delete(`${url}/${id}`);
      if (res.status === 204) {
        dispatch({ type: tasksActions.DELETE_TASK_SUCCESS });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: tasksActions.DELETE_TASK_ERROR, payload: error });
    }
  }

  const getAll = async () => {
    dispatch({ type: tasksActions.GET_ALL });
    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        dispatch({ type: tasksActions.GET_ALL_SUCCESS, payload: res.data });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: tasksActions.GET_ALL_ERROR, payload: error });
    }
  };

  const value = useMemo(() => {
    return {
      state,
      createTask,
      editTask,
      deleteTask,
      getAll
    };
  }, [state]);

  return <TasksContext.Provider value={value} {...props} />;
};

export function useTasks() {
  const context = useContext(TasksContext);
  if (!context) {
    throw Error("useTasks is out Provider");
  }
  return context;
}
