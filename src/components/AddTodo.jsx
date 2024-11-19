import{ useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="border p-2 rounded"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Tambah Todo"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white p-2 rounded ml-2"
      >
        Tambah
      </button>
    </div>
  );
};

export default AddTodo;
