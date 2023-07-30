"use client";
import { Button } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditForm = ({ id, empid, empname, email, contact }) => {
  const [newEmpId, setNewEmpId] = useState(empid);
  const [newEmpName, setNewEmpName] = useState(empname);
  const [newEmail, setNewEmail] = useState(email);
  const [newContact, setNewContact] = useState(contact);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/empdata/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newEmpId, newEmpName, newEmail, newContact }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Data");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
      onChange={(e) => setNewEmpId(e.target.value)}
      value={newEmpId}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="id"
      />

      <input
       onChange={(e) => setNewEmpName(e.target.value)}
       value={newEmpName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Employee Name"
      />
      <input
       onChange={(e) => setNewEmail(e.target.value)}
       value={newEmail}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Email"
      />
      <input
       onChange={(e) => setNewContact(e.target.value)}
       value={newContact}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Contact"
      />

      <Button type="submit"  variant="outlined">
        Edit Data
      </Button>
    </form>
  );
};

export default EditForm;
