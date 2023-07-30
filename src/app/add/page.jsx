"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function AddTopic() {
  const [empid, setEmpid] = useState("");
  const [empname, setEmpname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!empid || !empname || !email || !contact) {
      alert("All Feilds are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/empdata", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ empid, empname, email, contact }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setEmpid(e.target.value)}
        value={empid}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="ID"
      />

      <input
        onChange={(e) => setEmpname(e.target.value)}
        value={empname}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Employee Name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setContact(e.target.value)}
        value={contact}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Contact"
      />

      <Button type="submit" variant="outlined">
        Add Data
      </Button>
    </form>
  );
}
