export default function Topo(props) {
    const {titulo, subtitulo} = props;
    return (
        <div className="Topo">
            <h1 className="titulo">{titulo}</h1>
            <h2 className="subtitulo">{subtitulo}</h2>
        </div>
    );
}