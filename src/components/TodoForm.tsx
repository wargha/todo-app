import { FormEvent, useState } from 'react';

interface TodoFormProps {
  onSubmit: (newItem: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState<string>('');
  const handleChangeNewItem = (item: string) => {
    setNewItem(item);
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!newItem) return;

    onSubmit(newItem);
    setNewItem('');
  }

  return (
    <form className="flex flex-col gap-4 mb-8" onSubmit={handleSubmit}>
      <div className="flex items-center">
        <label htmlFor="todo" className="mr-2">
          New Todo:
        </label>
        <input
          value={newItem}
          type="text"
          placeholder="Add Todo"
          name="todo"
          onChange={(event) => handleChangeNewItem(event.target.value)}
          className="flex-1 border border-gray-300 rounded-md px-2 py-1"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};
