import useSWRImmutable from "swr/immutable";
import { fetchApi } from "./api";
import swal from 'sweetalert';
import useSWR from "swr";

export function useMe() {
  const { data, error } = useSWR("/me", fetchApi);
  return data;
}

export function refreshPage() {
  window.location.reload();
}

type userData = {
  description: string,
  adress: string,
  photo: string,
  phone: number,
  name: string,
}

export async function editMe({ name, adress, phone, photo, description }: userData) {

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

export function useFeaturedProducts(
  q: any = " ",
  offset: any = 0,
  limit: any = 50
) {
  const url = q
    ? +"/search?q=" + q + "&offset=" + offset + "&limit=" + limit
    : null;
  const { data, error } = useSWRImmutable(
    () =>
      q ? "/search?q=" + q + "&offset=" + offset + "&limit=" + limit : null,
    fetchApi
  );
  if (data) {
    data.results.sort(function (a: any, b: any) {
      return a["Unit cost"] - b["Unit cost"];
    });
    let cortado = data.results.slice(0, 3);
    console.log("SOY CORTADO", cortado);

    return cortado;
  }
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

type productData = {
  name: string,
  price: number,
  stock: number,
  images: string,
  category: string,
  description: string,
  id?: string,
}

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
      body: { id, name, price, description, category, stock, images }

    }).catch(() => {
      swal({ title: "Ups...", text: "Algo salió mal", icon: "error" });

    }).then(() => {
      swal({ title: "Yes!", text: "Producto Editado!", icon: "success" });
    });

  } else {
    return await fetchApi("/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { name, price, description, category, stock, images }

    }).catch(() => {
      swal({ title: "Ups...", text: "Algo salió mal", icon: "error" });

    }).then(() => {
      swal({ title: "Yes!", text: "Producto publicado!", icon: "success" });
    });
  }
}

export async function deleteProduct(productId: string) {

  if (productId) {
    return await fetchApi(`/products/${productId.toString()}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },

    }).catch(() => {
      swal({ title: "Ups...", text: "Algo salió mal", icon: "error" });

    }).then(() => {
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
