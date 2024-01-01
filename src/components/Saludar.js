import React from "react";

export default function Saludar(props) {
    console.log([props.userinfo.nombre])
    console.log([props.userinfo.edad])
    console.log([props.userinfo.color])
    return (
        <p>Hola {props.userinfo.nombre} edad {props.userinfo.edad} 
        tu color favorito es {props.userinfo.color}</p>

    );


}
