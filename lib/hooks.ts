import useSWRImmutable from "swr/immutable";
import { fetchApi } from "./api";
import swal from "sweetalert";
import useSWR from "swr";
import { useState } from "react";

export function useMe() {
  const { data, error } = useSWR("/me", fetchApi);
  return data;
}

export function useGetPagination() {
  const [offset, setOffset] = useState(0);
  const [q, setQ] = useState("");
  const { data, error } = useSWR(
    q ? `/search?q=${q}&offset=${offset}&limit=4` : null,
    fetchApi,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    data,
    offset,
    setQ,
    setOffset,
  };
}

export function refreshPage() {
  window.location.reload();
}

type userData = {
  description: string;
  adress: string;
  photo: string;
  phone: number;
  name: string;
};

export async function editMe({
  name,
  adress,
  phone,
  photo,
  description,
}: userData) {
  return await fetchApi("/me", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: { name, adress, phone, photo, description },
  });
}

export function useProducts(productId: any) {
  const { data, error } = useSWRImmutable(
    () => (productId ? "/products/" + productId : null),
    fetchApi
  );
  return data;
}

export function useSearchProducts(q: any, offset: any = 0, limit: any = 5) {
  const url = q
    ? +"/search?q=" + q + "&offset=" + offset + "&limit=" + limit
    : null;
  const { data, error } = useSWRImmutable(
    () =>
      q ? "/search?q=" + q + "&offset=" + offset + "&limit=" + limit : null,
    fetchApi
  );
  return data;
}

export async function createOrder(productId: any, quantity: number) {
  return productId
    ? await fetchApi("/order?productId=" + productId, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { quantity },
    })
    : false;
}

export async function getOrder(externalReference: any) {
  return externalReference
    ? await fetchApi("/order/" + externalReference, {
      headers: { "Content-Type": "application/json" },
    })
    : false;
}

export async function getUserCatalogue(userId: string) {
  if (userId) {
    const catalogue = await fetchApi(`/catalogue?UserId=${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return catalogue;
  }
}

export async function featuredProducts() {

  const catalogue = await fetchApi(`/featuredProducts`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return catalogue;
}

type productData = {
  name: string;
  price: number;
  stock: number;
  images: string;
  category: string;
  description: string;
  id?: string;
};

export async function uploadOrEditProduct(productData: productData) {
  let id = productData.id;
  let name = productData.name;
  let price = productData.price;
  let stock = productData.stock;
  let images = productData.images;
  let category = productData.category;
  let description = productData.description;

  if (productData.id) {
    return await fetchApi(`/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: { id, name, price, description, category, stock, images },
    })
      .catch(() => {
        swal({ title: "Ups...", text: "Algo sali?? mal", icon: "error" });
      })
      .then(() => {
        swal({ title: "Yes!", text: "Producto Editado!", icon: "success" });
      });
  } else {
    return await fetchApi("/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { name, price, description, category, stock, images },
    })
      .catch(() => {
        swal({ title: "Ups...", text: "Algo sali?? mal", icon: "error" });
      })
      .then(() => {
        swal({ title: "Yes!", text: "Producto publicado!", icon: "success" });
      });
  }
}

export async function deleteProduct(productId: string) {
  if (productId) {
    return await fetchApi(`/products/${productId.toString()}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .catch(() => {
        swal({ title: "Ups...", text: "Algo sali?? mal", icon: "error" });
      })
      .then(() => {
        swal({ title: "Yes!", text: "Producto eliminado!", icon: "success" });
      });
  }
}

export async function syncBothDB() {
  return await fetchApi("/sync", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}
