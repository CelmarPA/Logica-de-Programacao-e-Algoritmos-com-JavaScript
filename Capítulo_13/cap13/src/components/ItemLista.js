import "./ItemLista.css";

const ItemLista = (props) => { 
    // const ItemLista = ({id, titulo, autor, ano, preco, foto}) => {...}Desse  modo, não é necessário preceder cada nome de variável por props no código.
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.titulo}</td>
            <td>{props.autor}</td>
            <td>{props.ano}</td>
            <td className="text-end">
                {Number(props.preco).toLocaleString("pt-br", {minimumFractionDigits: 2})}
            </td>
            <td className="text-center">
                <img src = {props.foto} alt="Capa do Livro" width="75" />
            </td>
            <td className="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={props.excluirClick}>&#10008;</i>
                <i className="altera text-success fw-bold ms-2" title="Alterar" onClick={props.alterarClick}>&#36;</i>
            </td>
        </tr>
    );
};

export default ItemLista;
