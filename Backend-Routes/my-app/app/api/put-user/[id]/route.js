import { NextResponse } from "next/server";

// ✅ DATA DEFINED IN THE SAME FILE
let users = [
  { id: 1, name: "John Doe", email: "john@gmail.com", age: 25 },
  { id: 2, name: "Jane Smith", email: "jane@gmail.com", age: 30 },
  { id: 3, name: "Bob Johnson", email: "bob@gmail.com", age: 28 }
];

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const userId = Number(id);

    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const { name, email, age } = await request.json();

    if (!name || !email || !age) {
      return NextResponse.json(
        { success: false, error: "name, email and age are required" },
        { status: 400 }
      );
    }

    users[userIndex] = {
      id: userId,
      name,
      email,
      age
    };

    return NextResponse.json({
      success: true,
      data: users[userIndex],
      message: "User updated!"
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update user" },
      { status: 500 }
    );
  }
}
