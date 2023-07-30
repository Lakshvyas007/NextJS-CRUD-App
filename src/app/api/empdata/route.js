import connectMongoDB from "../../../../libs/mongodb";
import EmpData from "@/models/EmpData";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { empid, empname, email, contact } = await request.json();
    await connectMongoDB();
    await EmpData.create({ empid, empname, email, contact });
    return NextResponse.json({ message: "Entry Created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const empdatas = await EmpData.find();
    return NextResponse.json({ empdatas });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await EmpData.findByIdAndDelete(id);
    return NextResponse.json({ message: "Data deleted" }, { status: 200 });
  }