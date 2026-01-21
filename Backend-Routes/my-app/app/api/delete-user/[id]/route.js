import { NextResponse } from "next/server";

// ✅ DEFINE USERS HERE
let users = [
  { id: 1, name: "John Doe", email: "john@gmail.com", age: 25 },
  { id: 2, name: "Jane Smith", email: "jane@gmail.com", age: 30 },
  { id: 3, name: "Bob Johnson", email: "bob@gmail.com", age: 28 }
];

export async function DELETE(request, { params }) {
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

    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);

    return NextResponse.json({
      success: true,
      data: deletedUser,
      message: "User deleted!"
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
