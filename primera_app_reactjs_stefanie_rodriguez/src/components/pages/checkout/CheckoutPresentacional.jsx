import { Button } from "@mui/material";

export const CheckoutPresentacional = ({enviarFormulario, capturar}) => {
    return <div>
        <h1>Datos de Facturación</h1>
        <form onSubmit={ enviarFormulario }>
            <input type = " text " placeholder= "Ingrese su nombre" onChange={capturar} name = "name" />
            <br></br>
            <input type = " text " placeholder= "Ingrese su apellido" onChange={capturar} name = "lastName" />
            <br></br>
            <input type = " email " placeholder= "Ingrese su email" onChange={capturar} name = "email" />
            <br></br>
            <input type = " text " placeholder= "Ingrese su dirección" onChange={capturar} name = "adress" />
            <br></br>
            <input type = " text " placeholder= "Ingrese su teléfono" onChange={capturar} name = "phoneNumber" />
            <br></br>
            <Button  type= "submit" variant="contained">Enviar datos</Button>
        </form>
    </div>;
};
