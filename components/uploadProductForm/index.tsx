import { MyDropzone } from "components/dropzone";
import { uploadOrEditProduct } from "lib/hooks";
import { BodyBold, Subtitle } from "ui/texts";
import { Placeholder } from "ui/textFields";
import { FormProd, Select } from "./styled";
import { BotonNaranja } from "ui/buttons";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import React, { useState } from "react";
import swal from 'sweetalert';


export function UploadProduct() {

    const router = useRouter();
    const [ image, setImage ] = useState(null as any);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const getImage = (img: any) => {
        setImage(img);
    }

    const onSubmit = async (data: any) => {
        console.log(data);

        const productData = {
            images: image,
            name: data["product-name"],
            description: data["product-desc"],
            category: data["product-category"],
            stock: parseInt(data["product-stock"]),
            price: parseInt(data["product-price"]),
        }

        if (image) {
            await uploadOrEditProduct(productData);
            await router.push("/");

        } else {
            swal({ title: "Upss...", text: "Faltó una imagen!", icon: "error" });
        }
    }

    return <FormProd onSubmit={handleSubmit(onSubmit) }>
        
        <Subtitle style={{ margin: 25 }} > Publish your product! </Subtitle>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Name </label>
            <Placeholder style={{ marginBottom: 10 }} { ...register("product-name", { required: true } )} profile="Product-name" placeholder="Product name"/>
            { errors["product-name"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }} placeholder="Product category">
            <label> Category </label>
            <Select style={{ marginBottom: 10 }} { ...register("product-category", { required: true } )}>
                <option value="Mouse"> Mouse </option>
                <option value="Teclados"> Teclados </option>
                <option value="Monitores"> Monitores </option>
                <option value="Auriculares"> Auriculares </option>
            </Select>
            { errors["product-category"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Price </label>
            <Placeholder type="number" style={{ marginBottom: 10 }} { ...register("product-price", { required: true } )} profile="Product-price" placeholder="Product price"/>
            { errors["product-price"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Stock </label>
            <Placeholder type="number" style={{ marginBottom: 10 }} { ...register("product-stock", { required: true } )} profile="Product-stock" placeholder="Product stock"/>
            { errors["product-stock"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div>
            <MyDropzone img={getImage}></MyDropzone>
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label style={{ alignSelf: "baseline", marginLeft: 8 }}> Description </label>
            <textarea className="container" { ...register("product-desc", { required: true } )} placeholder="Product description"/>
            { errors["product-desc"] && <span className="error-style"> This field is required! </span> }
        </div>

        <BotonNaranja> Publicar </BotonNaranja>
        <BodyBold onClick={() => router.push("/")} style={{ color: "red", paddingTop: 10, cursor: "pointer" }}> Cancelar </BodyBold>

    </FormProd>
}