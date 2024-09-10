function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos pelo ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada objeto no array "dados"
    for (let dado of dados) {
      // Constrói o HTML para cada resultado, formatando os dados do objeto
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atribui o HTML gerado para o conteúdo da seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }

