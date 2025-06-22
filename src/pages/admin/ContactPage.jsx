// src/pages/admin/ContactPage.jsx
import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstances";

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axiosInstance.get("/admin/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Queries</h2>
      {contacts.length === 0 ? (
        <p>No queries received yet.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((c) => (
            <div
              key={c.id}
              className="bg-white p-4 rounded shadow border border-gray-200"
            >
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm text-gray-600">
                <strong>Subject:</strong> {c.subject}
              </p>
              <p className="text-sm text-gray-800 mt-1">{c.message}</p>
              <p className="text-xs text-gray-400">
                📧 {c.email} | {new Date(c.contactDate).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactPage;
