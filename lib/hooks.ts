import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetchApi } from "./api";

export function useMe() {
  const { data, error } = useSWR("/me", fetchApi);
  return data;
}

export function refreshPage() {
  window.location.reload();
}

export async function editMe({ name, adress, phone, photo, description }: any) {
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

