"use server";

export default async function createUser(formData) {
  const name = formData.get("name");
  console.log("Create User:", name);
}
