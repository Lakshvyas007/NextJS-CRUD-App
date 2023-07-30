"use client";
import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const removeData = async () => {
    const confirmed = confirm("Do you want to delete this entry?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/empdata?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      } 
    }
  };

  return <Button onClick={removeData}>Delete</Button>;
};

export default DeleteButton;
