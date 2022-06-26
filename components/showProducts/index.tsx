import { useRouter } from "next/router";
import { useSearchProducts } from "lib/hooks";
import { Card } from "components/ui/card";
import { PageButton } from "components/ui/buttons";
import { MostrarProductos, Root } from "./styled";
import { Pagination } from "components/ui/pagination";
import { Subtitle } from "components/ui/texts";

export function ShowProducts() {
	const router = useRouter();
	const q = router.query;
	const product = useSearchProducts(q.q, q.offset, q.limit);

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

	if (product) {
		const results =
			product.results.length == 0 ? "No se encontraron Resultados" : "";
		let limit = q.limit ? parseInt(q.limit.toString()) : 5;
		let offset = q.offset ? parseInt(q.offset.toString()) : 5;
		const paginaActual = product.results.length == 0 ? "" : offset / 5 + 1;
		let verMas =
			product.results.length > 0
				? offset >= product.pagination.total - 5
					? "   "
					: "Pagina Siguiente"
				: "    ";
		const verMenos = q.offset == (0).toString() ? "   " : "Pagina Anterior";
		return (
			<Root>
				<Subtitle>{results}</Subtitle>{" "}
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
					{" "}
					<PageButton onClick={VerMenos}> {verMenos} </PageButton>
					<PageButton> {paginaActual} </PageButton>
					<PageButton onClick={VerMas}> {verMas} </PageButton>
				</Pagination>
			</Root>
		);
	} else {
		return <div></div>;
	}
}
