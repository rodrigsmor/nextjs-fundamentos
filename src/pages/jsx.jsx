import Layout from "../components/layout";

export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>
    
    function subtitulo() {
        return <h2>{'Muito legal'.toUpperCase()}</h2>
    }

    return (
        <Layout titulo={'Entendendo o JSX'}>
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    { JSON.stringify({ nome: 'João', idade: 30 }) }
                </p>
            </div>
        </Layout>
    );
}