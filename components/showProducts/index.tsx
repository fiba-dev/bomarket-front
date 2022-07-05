import { MostrarProductos, Root, SpinnerContainer } from "./styled";
import { useSearchProducts } from "lib/hooks";
import { SpinnerLoader } from "ui/loaders";
import { Pagination } from "ui/pagination";
import { useRouter } from "next/router";
import { MainButton, PageButton } from "ui/buttons";
import { Subtitle } from "ui/texts";
import { Card } from "ui/card";
import { useEffect, useState } from "react";
import { Filter } from "ui/textFields";

export function ShowProducts() {
	const router = useRouter();
	const q = router.query;
	const [products, setProducts] = useState() as any
	let product = useSearchProducts(q.q, q.offset, q.limit);

	useEffect(() => {
		setProducts(product)
	}, [product])

	function VerMenos() {
		const q: any = router.query;
		let offset = parseInt(q.offset);
		let limit = parseInt(q.limit);

		if (product.pagination.total >= offset && offset > 0) {
			offset = offset - 5;
			let offsetString = offset.toString();
			let limitString = limit.toString();
			router.push(
				"/search?q=" + q.q + "&offset=" + offsetString + "&limit=" + limitString
			);
		}
	}
	function VerMas() {
		const q: any = router.query;
		let offset = parseInt(q.offset);
		let limit = parseInt(q.limit);

		if (
			product.pagination.total > offset + 5 &&
			product.pagination.total > limit
		) {
			offset = offset + 5;
			const offsetString = offset.toString();
			const limitString = limit.toString();
			router.push(
				"/search?q=" + q.q + "&offset=" + offsetString + "&limit=" + limitString
			);
		}
	}

	function handleSort(e: any) {
		if (e.target.value == "Mayor") {
			let mayor = products.results.sort((a: any, b: any) => {
				return b["Unit cost"] - a["Unit cost"];
			})

			setProducts({ ...products, results: mayor })
		}
		if (e.target.value == "Menor") {
			let menor = products.results.sort((a: any, b: any) => {
				return a["Unit cost"] - b["Unit cost"];
			})
			setProducts({ ...products, results: menor })
		}
	}

	if (products) {
		const results =
			product?.results.length == 0 ? "No se encontraron Resultados" : "";
		let limit = q.limit ? parseInt(q.limit.toString()) : 5;
		let offset = q.offset ? parseInt(q.offset.toString()) : 5;
		const paginaActual = product?.results.length == 0 ? "" : offset / 5 + 1;
		let verMas =
			product?.results.length > 0
				? offset >= product?.pagination.total - 5
					? "   "
					: "Pagina Siguiente"
				: "    ";
		const verMenos = q.offset == (0).toString() ? "   " : "Pagina Anterior";
		console.log("RESULTS", results);


		return (
			<Root>
				<Subtitle>{results}</Subtitle>
				{results == "" ? <Filter onChange={handleSort} label="Ordenar por"></Filter> : null}
				<MostrarProductos>
					{product.results.map((r: any) => (
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
				<Pagination>
					<PageButton onClick={VerMenos}> {verMenos} </PageButton>
					<PageButton> {paginaActual} </PageButton>
					<PageButton onClick={VerMas}> {verMas} </PageButton>
				</Pagination>
			</Root>
		);
	} else {
		return <SpinnerContainer style={{ padding: 12 }}>
			<Subtitle style={{ textAlign: "center" }}> ¡Buscá el producto que querés! </Subtitle>
			<SpinnerLoader />
		</SpinnerContainer>
	}
}
