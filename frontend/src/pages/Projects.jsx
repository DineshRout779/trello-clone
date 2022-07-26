import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { BsFilter } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllTodos, updateTodo } from '../features/todo/todoActions';

import { DragDropContext } from 'react-beautiful-dnd';
import TodoDetailed from '../components/TodoDetailed';

const Projects = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  let add,
    todo = todos.filter((todo) => todo.status === 'todo'),
    progress = todos.filter((todo) => todo.status === 'progress'),
    completed = todos.filter((todo) => todo.status === 'completed');

  useEffect(() => {
    dispatch(fetchAllTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (source.droppableId === 'todo') {
      add = todo[source.index];
      todo.splice(source.index, 1);
    } else if (source.droppableId === 'progress') {
      add = progress[source.index];
      progress.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    // update
    dispatch(
      updateTodo({
        todo: { ...add, status: destination.droppableId },
        userInfo,
      })
    );

    if (destination.droppableId === 'todo') {
      todo.splice(destination.index, 0, add);
    } else if (destination.droppableId === 'progress') {
      progress.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add);
    }
  };

  return (
    <div>
      <Header />
      <div className='flex space-between items-center mb-2 mt-2'>
        <h2 style={{ fontWeight: '500' }}>Projects</h2>
        <p className='flex items-center filter'>
          <BsFilter /> Filter
        </p>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='grid-3 todo-container'>
          <TodoList title='To do' type='todo' list={todo} />
          <TodoList title='In progress' type='progress' list={progress} />
          <TodoList title='Completed' type='completed' list={completed} />

          <TodoDetailed />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Projects;
