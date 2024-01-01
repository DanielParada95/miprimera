import React from "react";

export default function Saludosf (props) {
    const{userinfo, Saludosf} = props;
    const{nombre = "Anonimo"} = userinfo;
    const{edad} = userinfo
    const{color} = userinfo
    console.log(props);
    console.log(userinfo);


    return(
        <div>
            <button onClick={ () => props.Saludosf(nombre, edad, color)}>Saludos</button>
        </div>
    );
}