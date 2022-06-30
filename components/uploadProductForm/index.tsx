import React, { useState, useEffect } from "react";
import { MyDropzone } from "components/dropzone";
import { BodyBold, Subtitle } from "ui/texts";
import { Placeholder } from "ui/textFields";
import { BotonNaranja } from "ui/buttons";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { FormProd } from "./styled";
import swal from 'sweetalert';

const errorStyle = {
    "flex-direction": "column",
    "alignS-slf": "center",
    "margin-bottom": 20,
    display: "flex",
    color: "red",
}

export function UploadProduct() {

    const router = useRouter();
    const [ image, setImage ] = useState(null as any);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const getImage = (img: any) => {
        setImage(img);
    }

    const onSubmit = (data: any) => {
        console.log({ data, image });
        image ? swal({ title: "Yes!", text: "Se puede ejecutar", icon: "success" }) : swal({ title: "Upss...", text: "La imagen es requerida", icon: "error" });
    }

    return <FormProd onSubmit={handleSubmit(onSubmit) }>
        
        <Subtitle style={{ margin: 25 }} > Publish your product! </Subtitle>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Name </label>
            <Placeholder style={{ marginBottom: 10 }} { ...register("product-name", { required: true } )} profile="Product-name" placeholder="Product name"/>
            { errors["product-name"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label> Price </label>
            <Placeholder type="number" style={{ marginBottom: 10 }} { ...register("product-price", { required: true } )} profile="Product-price" placeholder="Product price"/>
            { errors["product-price"] && <span className="error-style"> This field is required! </span> }
        </div>

        <div>
            <MyDropzone img={getImage}></MyDropzone>
        </div>

        <div style={{ alignSelf: "baseline", marginLeft: 8, display: "flex", flexDirection: "column" }}>
            <label style={{ alignSelf: "baseline", marginLeft: 8 }}> Price </label>
            <textarea className="container" { ...register("product-desc", { required: true } )} placeholder="Product description"/>
            { errors["product-desc"] && <span className="error-style"> This field is required! </span> }
        </div>

        <BotonNaranja> Publicar </BotonNaranja>
        <BodyBold onClick={() => router.push("/")} style={{ color: "red", paddingTop: 10, cursor: "pointer" }}> Cancelar </BodyBold>

    </FormProd>
}