import { tasksActions } from "../actions/tasksActions";

type State = {
  fetching: boolean;
  array: [];
  current: {};
  error: null | object;
  ok?: boolean;
};

type TasksAction = {
  type: string;
  payload?: any;
};

export const initialState = {
  fetching: false,
  array: [],
  current: [],
  error: null,
};

export function tasksReducer(state: State, actions: TasksAction) {
  const { type, payload } = actions;

  switch (type) {
    case tasksActions.CREATE_TASK:
      return {
        ...state,
        fetching: true,
      };
    case tasksActions.CREATE_TASK_SUCCESS:
      return {
        ...state,
        fetching: false,
        array: [...state.array, payload],
      };
    case tasksActions.DELETE_TASK:
      return {
        ...state,
        fetching: true,
      };
    case tasksActions.DELETE_TASK_SUCCESS:
      return {
        ...state,
        fetching: false,
        ok: true,
      };
    case tasksActions.DELETE_TASK_ERROR:
      return {
        ...state,
        fetching: false,
        error: payload,
      };
    case tasksActions.EDIT_TASK:
      return {
        ...state,
        fetching: true,
      };
    case tasksActions.EDIT_TASK_SUCCESS:
      return {
        ...state,
        fetching: false,
        ok: true,
      };
    case tasksActions.EDIT_TASK_ERROR:
      return {
        ...state,
        fetching: false,
        error: payload,
      };
    case tasksActions.GET_ALL:
      return {
        ...state,
        fetching: true,
      };
    case tasksActions.GET_ALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        array: payload,
      };
    case tasksActions.GET_ALL_ERROR:
      return {
        ...state,
        fetching: false,
        error: payload,
      };
    case tasksActions.GET_ONE:
      return {
        ...state,
        fetching: true,
      };
    case tasksActions.GET_ONE_ERROR:
      return {
        ...state,
        fetching: false,
        current: payload,
      };
    case tasksActions.CLEAR_CURRENT:
      return {
        ...state,
        current: {},
      };
    default:
      return state;
  }
}
