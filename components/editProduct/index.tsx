import { uploadOrEditProduct, deleteProduct } from "lib/hooks";
import { BodyBold, Subtitle, Large } from "ui/texts";
import { MyDropzone } from "components/dropzone";
import { FormProd, Select } from "./styled";
import { Placeholder } from "ui/textFields";
import { BotonNaranja } from "ui/buttons";
import { useForm } from "react-hook-form";
import { useProducts } from "lib/hooks";
import { useRouter } from "next/router";
import React, { useState } from "react";
import swal from 'sweetalert';


export function EditProduct() {

    const router = useRouter();
    const [ image, setImage ] = useState(null as any);
    const product = useProducts(router.query.productId);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const getImage = (img: any) => {
        setImage(img);
    }

    const onSubmit = async (data: any) => {
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

        if (image) {
            await uploadOrEditProduct(productData);
            await router.push("/");

        } else {
            swal({ title: "Upss...", text: "Faltó una imagen!", icon: "error" });
        }
    }

    async function notifyDeleteProduct(e: any) {
        e.preventDefault();

        swal({
            title: "Hey!",
            text: "Vas a eliminar un producto, estás segur@?",
            buttons: [true, "Eliminar"],

        }).then(async (response) => {

            if (response) {
                await deleteProduct((router.query.productId as string));
                await router.push("/");
            }
        });
    }

    return <FormProd onSubmit={handleSubmit(onSubmit) }>
        
        <Subtitle style={{ margin: 25 }} > Publish your product! </Subtitle>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Name </label>
            <Placeholder style={{ marginBottom: 10 }} { ...register("product-name", { required: true } )} profile="Product-name" placeholder={product?.object?.Name} />
            { errors["product-name"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }} placeholder="Product category">
            <label> Category </label>
            <Select style={{ marginBottom: 10 }} { ...register("product-category", { required: true } )}>
                <option className="option" value="Mouse"> Mouse </option>
                <option className="option" value="Teclados"> Teclados </option>
                <option className="option" value="Monitores"> Monitores </option>
                <option className="option" value="Auriculares"> Auriculares </option>
            </Select>
            { errors["product-category"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Price </label>
            <Placeholder type="number" style={{ marginBottom: 10 }} { ...register("product-price", { required: true } )} profile="Product-price" placeholder={product?.object["Unit cost"] + " Bs."} />
            { errors["product-price"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Stock </label>
            <Placeholder type="number" style={{ marginBottom: 10 }} { ...register("product-stock", { required: true } )} profile="Product-stock" placeholder={product?.object?.Stock} />
            { errors["product-stock"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div>
            { product?.object?.Images[0].url ?  <MyDropzone src={product?.object?.Images[0].url}></MyDropzone> : <MyDropzone img={getImage}></MyDropzone> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label style={{ alignSelf: "baseline", marginLeft: 8 }}> Description </label>
            <textarea className="container" { ...register("product-desc", { required: true } )} placeholder={product?.object?.Description}  />
            { errors["product-desc"] && <span className="error-style"> This field is required! </span> }
        </div>

        <BotonNaranja> Guardar </BotonNaranja>
        <Large onClick={notifyDeleteProduct} style={{ color: "red", marginTop: 25, marginBottom: 10, cursor: "pointer" }}> Eliminar </Large>
        <BodyBold onClick={() => router.push("/")} style={{ color: "black", paddingTop: 10, cursor: "pointer" }}> Cancelar </BodyBold>

    </FormProd>
}