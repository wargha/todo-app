export interface Todo {
  id: string;
  completed: boolean;
  name: string;
}

interface TodoList {
  todos: Todo[];
  onToggleCheckbox: (id: string) => void;
  onDeleteClick: (id: string) => void;
}

export const TodoList: React.FC<TodoList> = ({
  todos,
  onToggleCheckbox,
  onDeleteClick,
}) => {
  return (
    <ul className="space-y-4">
      {todos.length === 0 && <p className="text-gray-500">No todos yet</p>}
      {todos.map((todo: Todo) => (
        <li key={todo.id} className="flex items-center">
          <input
            checked={todo.completed}
            type="checkbox"
            className="mr-2"
            onChange={() => onToggleCheckbox(todo.id)}
          />
          <span
            className={`flex-1 ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {todo.name}
          </span>
          <button
            onClick={() => onDeleteClick(todo.id)}
            className="text-red-500 hover:text-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
