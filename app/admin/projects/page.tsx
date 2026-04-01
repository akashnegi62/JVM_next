export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Projects</h1>

        <a
          href="/admin/projects/new"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Project
        </a>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-500">No projects yet</p>
      </div>
    </div>
  );
}