"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProjectPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState<{
    name: string;
    city: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((res) => res.json())
      .then(setForm);
  }, [id]);

  if (!form) return <p>Loading...</p>;

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`/api/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(form),
    });

    router.push("/admin/projects");
  };

  const handleDelete = async () => {
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    router.push("/admin/projects");
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Edit Project</h1>

      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2"
        />

        <input
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          className="w-full border p-2"
        />

        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border p-2"
        />

        <button className="bg-blue-600 text-white px-4 py-2">Update</button>
      </form>

      <button
        onClick={handleDelete}
        className="mt-4 bg-red-600 text-white px-4 py-2"
      >
        Delete
      </button>
    </div>
  );
}
