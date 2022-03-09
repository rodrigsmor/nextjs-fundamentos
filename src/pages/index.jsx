import Navegador from '../components/Navegador';

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navegador destino={'/estiloso'} texto={'Estiloso'} />
            <Navegador destino={'/exemplo'} texto={'Exemplo'} cor={'#9400d3'}/>
            <Navegador destino={'/jsx'} texto={'JSX'} cor={'crimson'} />
            <Navegador destino={'/navegacao/'} texto={'Navegação #01'} cor={'green'} />
            <Navegador destino={'/cliente/sp-2/123'} texto={'Navegação #02'} cor={'blue'} />
            <Navegador destino={'/estado'} texto={'Componente com Estado'} cor={'#f56'} />
            <Navegador destino={'/integracao_1'} texto={'Integração com API #01'} cor={'#7abc32'} />
            <Navegador destino={'/estatico'} texto={'Conteúdo Estático'} cor={'#fa054a'} />
        </div>
    );
}