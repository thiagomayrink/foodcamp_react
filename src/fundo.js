export default function Fundo({mensagemStatus, status}) {
    return (
        <div className="Fundo">
            <button className={status}>
                {mensagemStatus}
            </button>
        </div>
    );
}