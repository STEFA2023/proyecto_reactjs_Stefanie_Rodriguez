import { useState } from "react";
import { CheckoutPresentacional } from "./CheckoutPresentacional";

export const CheckoutContainer = () => {
    const [infoUsuario, setInfoUsuario] = useState({
        name: "",
        lastName: "",
        email: "",
        adress:"",
        phoneNumber:"",
    });


    const enviarFormulario = (event) => {
        event.preventDefault();
        console.log(infoUsuario);
    };
    const capturar = (event) => {
        setInfoUsuario({...infoUsuario, [event.target.name] : event.target.value })
    };

    return <CheckoutPresentacional enviarFormulario={enviarFormulario} capturar = {capturar}/>;
};
