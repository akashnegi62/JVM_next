"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ProjectForm = {
  slug: string;
  name: string;
  city: string;
  tagline: string;
  description: string;
  images: string[];
  features: string[];
  location: string;
  price: string;
  status: string;
  area: string;
  projectDetails: Record<string, unknown>;
};

export default function NewProjectPage() {
  const router = useRouter();

  const [form, setForm] = useState<ProjectForm>({
    slug: "",
    name: "",
    city: "",
    tagline: "",
    description: "",
    images: [],
    features: [],
    location: "",
    price: "",
    status: "Ongoing",
    area: "",
    projectDetails: {},
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(form),
    });

    router.push("/admin/projects");
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Add Project</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          placeholder="Slug"
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          className="w-full border p-2"
        />

        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2"
        />

        <input
          placeholder="City"
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          className="w-full border p-2"
        />

        <input
          placeholder="Tagline"
          onChange={(e) => setForm({ ...form, tagline: e.target.value })}
          className="w-full border p-2"
        />

        <textarea
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border p-2"
        />

        <input
          placeholder="Images (comma separated)"
          onChange={(e) =>
            setForm({ ...form, images: e.target.value.split(",") })
          }
          className="w-full border p-2"
        />

        <input
          placeholder="Features (comma separated)"
          onChange={(e) =>
            setForm({ ...form, features: e.target.value.split(",") })
          }
          className="w-full border p-2"
        />

        <input
          placeholder="Location"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full border p-2"
        />

        <input
          placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full border p-2"
        />

        <input
          placeholder="Area"
          onChange={(e) => setForm({ ...form, area: e.target.value })}
          className="w-full border p-2"
        />

        <button className="bg-black text-white px-4 py-2">Create</button>
      </form>
    </div>
  );
}
