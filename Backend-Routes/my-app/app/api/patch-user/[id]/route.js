import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "John Doe", email: "john@gmail.com", age: 25 },
  { id: 2, name: "Jane Smith", email: "jane@gmail.com", age: 30 },
  { id: 3, name: "Bob Johnson", email: "bob@gmail.com", age: 28 }
];

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const userId = Number(id);

    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const body = await request.json();

    users[index] = {
      ...users[index],
      ...body,
      id: userId
    };

    return NextResponse.json({
      success: true,
      data: users[index]
    });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 }
    );
  }
}
