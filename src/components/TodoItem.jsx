

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="flex justify-between items-center border p-2 rounded mb-2">
      <span className={`flex-grow ${todo.completed ? "line-through" : ""}`}>
        {todo.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(todo.id)}
          className="text-blue-500"
        >
          {todo.completed ? "Batal" : "Selesai"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500"
        >
          Hapus
        </button>
      </div>
    </li>
  );
};


export default TodoItem;
