"use client";
import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DeleteButton from "../deleteButton/DeleteButton";

function TableEmp() {
  const [employee, setEmployee] = useState([]);

  const getEmployee = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/empdata");
      setEmployee(response.data.empdatas);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "ID",
      selector: function (row) {
        return row.empid;
      },
      sortable: true,
    },
    {
      name: "Employee Name",
      selector: (row) => row.empname,
      sortable: true,
    },
    {
      name: "Email ID",
      selector: (row) => row.email,
    },
    {
      name: "Contact",
      selector: (row) => row.contact,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Button>
            <Link href={`/view/${row._id}`}>Edit</Link>
          </Button>
          <DeleteButton id={row._id} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={employee}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="380px"
      highlightOnHover
    />
  );
}

export default TableEmp;
