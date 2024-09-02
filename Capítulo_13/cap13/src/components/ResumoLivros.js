import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { inAxios } from "../config_axios";

const ResumoLivros = () => {
    // return <h2>Resumo</h2>;
    const [resumo, setResumo] = useState([]);
    const [grafico, setGrafico] = useState([]);
    
    const obterDados = async () => {
        try {
            const dadosResumo = await inAxios.get("livros/dados/resumo");
            setResumo(dadosResumo.data);

            const dadosGrafico = await inAxios.get("livros/dados/grafico");
            // Cria um array e adicona a primeira linha
            const arrayGrafico = [["Ano", "R$ Total"]];
            // Percorre cada linha do JSON e adicona ao array
            dadosGrafico.data.map((dado) => 
                arrayGrafico.push([dado.ano.toString(), dado.total])
            );
            setGrafico(arrayGrafico);
        } catch (error) {
            alert(`Erro... Não foi possível obter os dados: ${error}`);
        }
    };

    // Define o método que será executado assim que o componente for renderizado
    useEffect(() => {
        obterDados();
    }, []);

    return (
        <div className="container">
            <h4 className="mt-3">Resumo</h4>
            <span className="btn btn-outline-primary btn-lg">
                <p className="badge bg-danger">{resumo.num}</p>
                <p>Nº de Livros Candastrados</p>
            </span>
            <span className="btn btn-outline-primary btn-lg mx-2">
                <p className="badge bg-danger">
                    {Number(resumo.soma).toLocaleString("pt-br", {minimumFractionDigits: 2})}
                </p>
                <p>Total Investido em Livros</p>
            </span>
            <span className="btn btn-outline-primary btn-lg me-2">
                <p className="badge bg-danger">
                    {Number(resumo.maior).toLocaleString("pt-br", {minimumFractionDigits: 2})}
                </p>
                <p>Maior preço Cadastrado</p>
            </span>
            <span className="btn btn-outline-primary btn-lg">
                <p className="badge bg-danger">
                    {Number(resumo.media).toLocaleString("pt-br", {minimumFractionDigits: 2})}
                </p>
                <p>Preço Médio dos Livros</p>
            </span>

            <div className="d-flex justify-content-center">
                <Chart
                width={1000}
                height={420}
                chartType="ColumnChart"
                loader={<div>Carregando Gráfico...</div>}
                data={grafico}
                options={{
                    title: "Total de Investimentos em Livros - por Ano de Publicação",
                    chartArea: { width: "80%" },
                    hAxis: { title: "Ano de Publicação" },
                    vAxis: { title: "Preço Acumulado R$" },
                    legend: { position: "none" },
                }}
                />
            </div>            
        </div>
    );
};

export default ResumoLivros;
