import { useState } from "react";
import Layout from "../components/layout";

export default function Estado() {
    const [ numero, setNumero ] = useState(0);

    function incrementar() {
        setNumero(numero++);
    }

    return (
        <Layout titulo={'Componente com Estado'}>
            <span>{ numero }</span>
            <button onClick={incrementar}>
                Incremenentar
            </button>
        </Layout>
    );
}