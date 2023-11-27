"use server";

export default async function getCategoryName() {
  const res = await fetch(
    "https://www.api.99thoughts.com/handleGetCategoryName"
  );
  const data = await res.json();
  if (!res.ok) throw new Error("failed to fetch data");

  return data;
}
