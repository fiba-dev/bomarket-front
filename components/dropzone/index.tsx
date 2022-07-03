import React, { useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { DropzoneDiv } from './styled';

export function MyDropzone({ img, src }: any) {

    const [ image, setImg ] = useState(null as any);
    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = (res) => {
                setImg(res.target?.result);
                img(res.target?.result);
            }
            
            reader.readAsDataURL(file);
        });

    }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop})

    return <DropzoneDiv {...getRootProps()}>
        <input {...getInputProps()} />
        <p className='text'> Soltá imagenes acá o hace click aquí para añadir una foto de perfil. </p>
        { image ? <img src={image} alt="image" style={{ maxWidth: 300, maxHeight: 250 }} /> : src ? <img src={src} alt="image" style={{ maxWidth: 300, maxHeight: 250 }} /> : false }
    </DropzoneDiv>
}