export default function Form({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
        text: e.target.elements.text.value,
        id: Date.now()
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <button>Add task</button>
    </form>
  );
}
