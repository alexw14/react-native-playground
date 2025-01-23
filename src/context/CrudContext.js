import createDataContext from './createDataContext';

const postReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete_post':
      return state.filter((post) => post.id !== action.payload);
    case 'edit_post':
      return state.map((p) => {
        return p.id === action.payload.id ? action.payload : p;
      });
    default:
      return state;
  }
};

const addPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_post', payload: { title, content } });
    if (callback) callback();
  };
};

const deletePost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_post', payload: id });
  };
};

const editPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_post', payload: { id, title, content } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  postReducer,
  { addPost, deletePost, editPost },
  [{ title: 'Test Title', content: 'Test Content', id: 1 }]
);
