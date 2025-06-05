import { ProductsTable } from "./components/ProductsTable";
import Link from "next/link";

export default async function AdminPage() {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/all`
  ).then((res) => res.json());

  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">No products available.</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center">
        <p className="mt-4 text-lg max-w-lg">Admin Section</p>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          href="/admin/create"
        >
          Create New Product
        </Link>

        <ProductsTable products={products} />
      </div>
    </>
  );
}
