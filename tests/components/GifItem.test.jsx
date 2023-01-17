import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem.jsx', () => {
    const titulo = 'Saitama';
    const urlEnviado = 'https://one-punch.com/saitama.jpg';

    test('Debe coincidir con el snapshot', () => {
        const {container} = render(
            <GifItem 
                title={titulo}
                url={urlEnviado}
            />
        )

        expect(screen.getByTestId('pTitulo').innerHTML).toContain('123');
        
        

    });
});