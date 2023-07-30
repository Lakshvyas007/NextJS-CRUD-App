import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import EmpData from "@/models/EmpData";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newEmpId: empid, newEmpName: empname, newEmail: email, newContact: contact } = await request.json();
  await connectMongoDB();
  await EmpData.findByIdAndUpdate(id, { empid, empname, email, contact });
  return NextResponse.json({ message: "Entry updated" }, { status: 200 });
}


export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const empdata = await EmpData.findOne({ _id: id });
  return NextResponse.json({ empdata }, { status: 200 });
}