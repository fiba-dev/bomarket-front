import { MostrarProductos, NavContainer, Root, SpinnerContainer, Total } from "./styled";
import { useGetPagination } from "lib/hooks";
import { useEffect, useState } from "react";
import { SpinnerLoader } from "ui/loaders";
import { Body, Subtitle } from "ui/texts";
import { useRouter } from "next/router";
import { Filter } from "ui/textFields";
import { Next, Prev } from "ui/logos";
import { Card } from "ui/card";

export function ShowProducts() {
	const router = useRouter();
	const q = router.query.q as string;
	const [products, setProducts] = useState() as any;

	const { data, offset, setQ, setOffset } = useGetPagination();

	useEffect(() => {
		setProducts(data);
	}, [data]);


	useEffect(() => {
		setOffset(0);
		setQ(q);
	}, [q]);


	function handleSort(e: any) {
		if (e.target.value == "Mayor") {
			let mayor = products?.results.sort((a: any, b: any) => {
				return b["Unit cost"] - a["Unit cost"];
			})
			setProducts({ ...products, results: mayor })
			console.log("MAYOR", mayor);
		}
		if (e.target.value == "Menor") {
			let menor = products?.results.sort((a: any, b: any) => {
				return a["Unit cost"] - b["Unit cost"];
			})
			setProducts({ ...products, results: menor })
			console.log("MENOR", menor);
		}
	}

	function handlePrev() {
		if (offset >= 4) {
			setOffset(offset - 4);
		}
	}
	function handleNext() {
		if (offset < data.pagination.total - 4) {
			setOffset(offset + 4);
		}
	}


	if (products) {
		return (
			<Root>
				<Filter onChange={handleSort} label="Ordenar por"></Filter>
				<Total>
					<Body>{products.results.length} resultados de {products.pagination.total}</Body>
				</Total>
				<MostrarProductos>
					{products.results.map((r: any) => (
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
				<NavContainer>
					<Prev onClick={handlePrev}></Prev>
					<Next onClick={handleNext}></Next>
				</NavContainer>
			</Root>
		);
	} else {
		return <SpinnerContainer style={{ padding: 12 }}>
			<Subtitle style={{ textAlign: "center" }}> ¡Buscá el producto que querés! </Subtitle>
			<SpinnerLoader />
		</SpinnerContainer>
	}
}
