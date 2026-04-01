export default function NewProjectPage() {
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Add Project</h1>

      <form className="space-y-3 bg-white p-6 rounded shadow">
        <input
          placeholder="Project Name"
          className="w-full border p-2 rounded"
        />

        <input
          placeholder="Location"
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded"
        />

        <button className="bg-black text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
}