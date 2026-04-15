/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  createdAt: string;
};

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("/api/contacts");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setContacts(data);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        console.error("Failed to fetch contacts:", err);
        setError("Failed to load contacts. Please try again.");
        setContacts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    try {
      const res = await fetch(`/api/contacts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete contact");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 p-6 text-white">
        <h1 className="mb-6 text-3xl font-bold text-blue-400">Contacts</h1>
        <div className="animate-pulse rounded-xl border border-slate-800 bg-slate-900 p-6 text-slate-400">
          Loading contacts...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 p-6 text-white">
        <h1 className="mb-6 text-3xl font-bold text-blue-400">Contacts</h1>
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-5 text-red-300">
          {error}
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 text-white">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Contacts
          </h1>
          <p className="mt-1 text-sm text-slate-400 sm:text-base">
            Manage all user contact messages
          </p>
        </div>

        <div className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white shadow-lg sm:w-fit">
          Total Contacts:{" "}
          <span className="font-semibold text-blue-400">{contacts.length}</span>
        </div>
      </div>

      {/* Empty State */}
      {contacts.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center text-slate-400 sm:p-10">
          No contacts found.
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          {/* Desktop Table Header */}
          <div className="hidden grid-cols-6 gap-4 border-b border-slate-800 bg-slate-800/50 px-4 py-4 text-xs font-semibold uppercase tracking-wide text-blue-300 lg:grid xl:px-6">
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Message</div>
            <div>Date</div>
            <div className="text-right">Actions</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800">
            {contacts.map((c) => (
              <div
                key={c.id}
                className="grid grid-cols-1 gap-4 px-4 py-5 transition hover:bg-slate-800/40 sm:px-5 lg:grid-cols-6 lg:items-center xl:px-6"
              >
                <div>
                  <p className="text-xs text-slate-400 lg:hidden">Name</p>
                  <p className="text-sm font-semibold text-white sm:text-base">
                    {c.name}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 lg:hidden">Email</p>
                  <p className="break-all text-sm text-slate-300 sm:text-base">
                    {c.email}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 lg:hidden">Phone</p>
                  <p className="text-sm text-slate-300 sm:text-base">
                    {c.phone || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 lg:hidden">Message</p>
                  <p className="line-clamp-3 text-sm text-slate-300 sm:text-base">
                    {c.message}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 lg:hidden">Date</p>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:justify-end">
                  <button
                    onClick={() =>
                      (window.location.href = `/admin/contacts/${c.id}`)
                    }
                    className="w-full rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/20 sm:w-auto"
                  >
                    View
                  </button>

                  <button
                    onClick={() => handleDelete(c.id)}
                    className="w-full rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 sm:w-auto"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
