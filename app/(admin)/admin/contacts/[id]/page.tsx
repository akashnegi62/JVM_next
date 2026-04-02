/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
};

export default function ContactDetailPage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id as string;

  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  // FETCH CONTACT
  useEffect(() => {
    if (!id) return;

    const fetchContact = async () => {
      try {
        const res = await fetch(`/api/contacts/${id}`);

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setContact(data);
      } catch (err) {
        setError("Failed to load contact");
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  // DELETE CONTACT
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    setDeleting(true);

    try {
      const res = await fetch(`/api/contacts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      router.push("/admin/contacts");
    } catch (err) {
      alert("Error deleting contact");
    } finally {
      setDeleting(false);
    }
  };

  // STATES
  if (loading) {
    return <p className="text-gray-500">Loading contact...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!contact) {
    return <p>No contact found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Contact Details</h1>

        <button
          onClick={() => router.push("/admin/contacts")}
          className="text-sm text-gray-500 underline"
        >
          ← Back
        </button>
      </div>

      {/* CARD */}
      <div className="bg-white shadow rounded-xl p-6 space-y-4 border">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="font-medium">{contact.name}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium">{contact.email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Phone</p>
          <p className="font-medium">{contact.phone || "Not provided"}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Message</p>
          <p className="font-medium whitespace-pre-line">{contact.message}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Submitted At</p>
          <p className="font-medium">
            {new Date(contact.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4">
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          {deleting ? "Deleting..." : "Delete Contact"}
        </button>
      </div>
    </div>
  );
}
