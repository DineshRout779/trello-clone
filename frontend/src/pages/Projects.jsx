import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { BsFilter } from 'react-icons/bs';

const todos = [
  {
    id: 1,
    title: 'Design- App',
    description:
      'Modifying Career, Scholarship and Entrance exam screen Acc to new design pattern ',
    userId: 1,
    status: 'todo',
  },
  {
    id: 2,
    title: 'Prototyping',
    description: 'Account -> Profile Section',
    userId: 2,
    status: 'todo',
  },
  {
    id: 3,
    title: 'Frontend',
    description:
      'As a Content Annotator, I should be able add tags in colleges, So that colleges can improve',
    userId: 3,
    status: 'progress',
  },
  {
    id: 4,
    title: 'Backend',
    description:
      'Create API for search colleges ,exams, scholarships, career_pathways',
    userId: 1,
    status: 'progress',
  },
];

const Projects = () => {
  return (
    <div>
      <Header />
      <div className='flex space-between items-center mb-2 mt-2'>
        <h2 style={{ fontWeight: '500' }}>Projects</h2>
        <p className='flex items-center filter'>
          <BsFilter /> Filter
        </p>
      </div>
      <div className='grid-3'>
        <TodoList
          title='To do'
          list={todos.filter((todo) => todo.status === 'todo')}
        />
        <TodoList
          title='In progress'
          list={todos.filter((todo) => todo.status === 'progress')}
        />
        <TodoList
          title='Completed'
          list={todos.filter((todo) => todo.status === 'completed')}
        />
      </div>
    </div>
  );
};
export default Projects;
