import dbConnect from "@/lib/db";
import Note from "@/models/note";

import { NextResponse } from "next/server";


export async function GET() {
  try {
    await dbConnect();
    const notes = await Note.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json({
      success: true,
      data: notes.map((note) => ({
        ...note,
        _id: note._id.toString()
      }))
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message
      },
      { status: 400 }
    );
  }
}


export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const note = await Note.create(body);
    const noteObj = note.toObject();

    return NextResponse.json(
      { success: true, data: { ...noteObj, _id: noteObj._id.toString() } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
