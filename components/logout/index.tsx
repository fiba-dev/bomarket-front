import { getSaveitem, removeItem } from "lib/api";
import React, { useEffect } from "react";
import { refreshPage } from "lib/hooks";
import { Spinner } from "./styled";
import router from "next/router";

export function LogoutWindows() {
	const email = getSaveitem("email");
	useEffect(() => {
		if (email) {
			removeItem("email"), removeItem("token");
			refreshPage();
		}
		if (email == null) {
			router.push("/");
		}
	}, [email]);

	return <Spinner>
		<div className="spinner">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</Spinner>
}
