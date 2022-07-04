import { MostrarProductos, Root, Spinner } from "./styled";
import React, { useEffect, useState } from "react";
import { getUserCatalogue } from "lib/hooks";
import { WhatsappButton } from "ui/buttons";
import { Pagination } from "ui/pagination";
import { useRouter } from "next/router";
import { PageButton } from "ui/buttons";
import { Subtitle } from "ui/texts";
import { Card } from "ui/card";

export function ShowCatalogue() {
    const router = useRouter();
	const query = router.query;
    const [ userCatalogue, setUserCatalogue ] = useState(null as any);
    const [ phone, setPhone ] = useState(null as any);

	const catalogueOfUser = async () => {
		const catalogue = await getUserCatalogue((query.userId as string));
		setUserCatalogue(catalogue);
		setPhone(catalogue?.phone);
	}

	useEffect(() => {
		catalogueOfUser();
	}, [query]);

	function VerMenos() {
		const q: any = router.query;
		let offset = parseInt(q.offset);
		let limit = parseInt(q.limit);

		if (userCatalogue.pagination.total >= offset && offset > 0) {
			offset = offset - 5;
			let offsetString = offset.toString();
			let limitString = limit.toString();
			router.push(
				"/catalogue?UserId=" + q.q + "&offset=" + offsetString + "&limit=" + limitString
			);
		}
	}

	function VerMas() {
		const q: any = router.query;
		let offset = parseInt(q.offset);
		let limit = parseInt(q.limit);

		if (
			userCatalogue.pagination.total > offset + 5 &&
			userCatalogue.pagination.total > limit
		) {
			offset = offset + 5;
			const offsetString = offset.toString();
			const limitString = limit.toString();
			router.push(
				"/catalogue?UserId=" + q.q + "&offset=" + offsetString + "&limit=" + limitString
			);
		}
	}

	if (userCatalogue) {
		const results = userCatalogue.results.length == 0 ? "No se encontraron Resultados" : "";

		let limit = query.limit ? parseInt(query.limit.toString()) : 5;
		let offset = query.offset ? parseInt(query.offset.toString()) : 5;

		const paginaActual = userCatalogue.results.length == 0 ? "" : offset / 5;
		let verMas =
			userCatalogue.results.length > 0
				? offset >= userCatalogue.pagination.total - 5
					? "   "
					: "Pagina Siguiente"
				: "    ";
		const verMenos = query.offset == (0).toString() ? "   " : "Pagina Anterior";

		return (
			<Root>
				<Subtitle> {results} </Subtitle>{" "}
				<WhatsappButton number={phone} />
				<MostrarProductos>
					{userCatalogue.results.map((r: any) => (
						<Card
							onClick={() => {
								router.push("/item/" + r.objectID);
							}}
							key={r.objectID}
							nombre={r.Name}
							imagen={r.Images[0].url}
							precio={r["Unit cost"]}
						></Card>
					))}
				</MostrarProductos>
				<Pagination style={{ marginTop: 25, marginBottom: 25 }}>
					{" "}
					<PageButton onClick={VerMenos}> {verMenos} </PageButton>
					<PageButton> {paginaActual} </PageButton>
					<PageButton onClick={VerMas}> {verMas} </PageButton>
				</Pagination>
			</Root>
		);
	} else {
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
}