/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then(setContacts);
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`/api/contacts/${id}`, {
      method: "DELETE",
    });

    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>

      <div className="space-y-4">
        {contacts.map((c) => (
          <div key={c.id} className="border p-4">
            <p>
              <b>{c.name}</b>
            </p>
            <p>{c.email}</p>
            <p>{c.phone}</p>
            <p>{c.message}</p>

            <button
              onClick={() => handleDelete(c.id)}
              className="mt-2 bg-red-500 text-white px-3 py-1"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
