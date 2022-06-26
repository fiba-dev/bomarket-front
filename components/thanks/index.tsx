import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Root } from "./styled";

import { Large, Subtitle, Title } from "components/ui/texts";
import { getOrder } from "lib/hooks";

export function ThanksWindows() {
	const router = useRouter();
	const [data, setData] = useState({} as any);
	const externalReference = router.query["external_reference"];
	useEffect(() => {
		if (externalReference) {
			const fetchData = async () => {
				const res = await getOrder(externalReference);
				setData(res);
			};
			fetchData().catch(console.error);
		}
	}, [externalReference]);
	let status = data.data ? data.data.status : "";
	const estado =
		status == "closed"
			? "FUE EXITOSO"
			: status == "opened"
			? " ESTA PENDIENTE"
			: status == "expired"
			? "FUE RECHAZADO"
			: "ESTA PROCESANDO";

	return (
		<Root>
			<Title>Gracias por comprar en COMPRALO</Title>
			<Subtitle>SU PAGO {estado}</Subtitle>
			<a
				onClick={() => {
					router.push("/");
				}}
			>
				<Large fucsia={true}>Volver al Home </Large>
			</a>
		</Root>
	);
}
