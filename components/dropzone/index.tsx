import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const dropzoneStyle = {
    "flex-direction": "column",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: 30,
    display: "flex",
}

export function MyDropzone(props: any) {

    const [ img, setImg ] = useState(null as any);
    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = (res) => {
                setImg(res.target?.result);
                props.img(res.target?.result);
            }
            
            reader.readAsDataURL(file);
        });

    }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop})

    return <div style={dropzoneStyle} {...getRootProps()}>
        <input {...getInputProps()} />
        <p style={{ alignSelf: "center", maxWidth: 350 }}> Drag and drop some files here, or click *here* to select files </p>
        { img ? <img  src={img} alt="image" style={{ maxWidth: 300, maxHeight: 250 }} /> : <p> </p> }
    </div>
}