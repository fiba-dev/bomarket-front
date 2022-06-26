import type { NextPage } from "next";
const BASE_URL = "https://bomarket.vercel.app/api";
async function fetchApi(input: RequestInfo, options: any) {
	const url = BASE_URL + input;
	const token = localStorage.getItem("token");
	const newOption: any = options ? options : {};

	if (token) {
		newOption.headers ||= {};
		newOption.method = newOption.method ? newOption.method : "GET";
		newOption.headers.Authorization = "bearer " + token;
	}
	if (newOption.body && newOption.method != "GET") {
		newOption.body = JSON.stringify(newOption.body);
	}
	try {
		const res = await fetch(url, newOption);

		if (res) {
			if (res.status >= 200 && res.status < 300) {
				return res.json();
			} else {
				return false;
			}
		} else {
			return false;
		}
	} catch (error) {
		return error;
	}
}
async function sendCode(email: string) {
	return fetchApi("/auth", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: { email },
	});
}
async function getToken(email: string, code: string) {
	let data = await fetchApi("/auth/token", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: { email, code: parseInt(code) },
	});

	if (data.token) {
		saveToken(data.token);
		saveEmail(email);
		return true;
	} else {
		return false;
	}
}
export function saveToken(token: string) {
	return localStorage.setItem("token", token);
}
export function saveEmail(email: string) {
	if (typeof window !== "undefined") {
		return localStorage.setItem("email", email);
	}
}

export function getSaveitem(item: string) {
	if (typeof window !== "undefined") {
		return localStorage.getItem(item);
	} else return null;
}
export function removeItem(item: string) {
	return localStorage.removeItem(item);
}
export { fetchApi, sendCode, getToken };
