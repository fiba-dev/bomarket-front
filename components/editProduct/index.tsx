import { MyDropzone } from "components/dropzone";
import { uploadOrEditProduct } from "lib/hooks";
import { BodyBold, Subtitle } from "ui/texts";
import { Placeholder } from "ui/textFields";
import { BotonNaranja } from "ui/buttons";
import { useForm } from "react-hook-form";
import { useProducts } from "lib/hooks";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormProd } from "./styled";
import swal from 'sweetalert';


export function EditProduct() {

    const router = useRouter();
    const [ image, setImage ] = useState(null as any);
    const product = useProducts(router.query.productId);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const getImage = (img: any) => {
        setImage(img);
    }

    const onSubmit = (data: any) => {
        // console.log({ data, image });

        const productData = {
            images: image,
            name: data["product-name"],
            stock: data["product-stock"],
            price: data["product-price"],
            description: data["product-desc"],
            category: data["product-category"],
            id: router.query.productId?.toString(),
        }

        image ? uploadOrEditProduct(productData) : swal({ title: "Upss...", text: "Faltó la imagen!", icon: "error" });
    }

    return <FormProd onSubmit={handleSubmit(onSubmit) }>
        
        <Subtitle style={{ margin: 25 }} > Publish your product! </Subtitle>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Name </label>
            <Placeholder style={{ marginBottom: 10 }} { ...register("product-name", { required: true } )} profile="Product-name" placeholder={product?.object?.Name} />
            { errors["product-name"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Category </label>
            <Placeholder style={{ marginBottom: 10 }} { ...register("product-category", { required: true } )} profile="Product-category" placeholder={product?.object?.category} />
            { errors["product-category"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Price </label>
            <Placeholder type="number" style={{ marginBottom: 10 }} { ...register("product-price", { required: true } )} profile="Product-price" placeholder={product?.object["Unit cost"] + " Bs."} />
            { errors["product-price"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Stock </label>
            <Placeholder type="number" style={{ marginBottom: 10 }} { ...register("product-stock", { required: true } )} profile="Product-stock" placeholder={product?.object?.stock} />
            { errors["product-stock"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div>
            { product?.object?.Images[0].url ?  <MyDropzone src={product?.object?.Images[0].url}></MyDropzone> : <MyDropzone img={getImage}></MyDropzone> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label style={{ alignSelf: "baseline", marginLeft: 8 }}> Price </label>
            <textarea className="container" { ...register("product-desc", { required: true } )} placeholder={product?.object?.Description}  />
            { errors["product-desc"] && <span className="error-style"> This field is required! </span> }
        </div>

        <BotonNaranja> Guardar </BotonNaranja>
        <BodyBold onClick={() => router.push("/")} style={{ color: "red", paddingTop: 10, cursor: "pointer" }}> Cancelar </BodyBold>

    </FormProd>
}