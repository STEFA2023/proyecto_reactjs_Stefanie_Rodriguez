
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export const CheckoutPresentacional = ({ enviarFormulario, capturar }) => {

    return (
        <div>
            <h1>Datos de Facturación:</h1>
            <form onSubmit={enviarFormulario}></form>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Nombre:</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                                label="Nombre"
                                onChange={capturar}
                                name="name"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Apellido:</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                                label="Apellido"
                                onChange={capturar}
                                name="lastname"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Email:</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                                label="Email"
                                onChange={capturar}
                                name="email"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Telefono:</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                                label="Telefono"
                                onChange={capturar}
                                name="phoneNumber"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Direccion:</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                                label="Direccion"
                                onChange={capturar}
                                name="address"
                            />
                        </FormControl>
                        <Button type="submit" variant="contained" style={{ margin: '10px' }} onClick={enviarFormulario} >Enviar datos</Button>
                    </div>
                </Box>
            </div>
        );
}