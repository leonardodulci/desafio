        const formData = {
            segundo: form.segundo.value,
            nome: form.nome.value,
            cpf: form.cpf.value,
            rg: form.rg.value,
            sexo: form.sexo.value,
            nasc: form.nasc.value,
            cargo: form.cargo.value,
            c1: form.c1.value,
            ativ: form.ativ.value,
            // Adiciona o campo "epi" com base no estado do checkbox
            epi: document.querySelector(".usaEPI").checked ? "Não usa EPI" : "Usa EPI",
            ca: form.ca.value,
            doc: form.doc.value
        };
        
        document.addEventListener("DOMContentLoaded", function () {
    const mostrarFormularioBtn = document.querySelector(".addfuncionario");
    const formulario = document.querySelector("#form");
    const formInicial = document.querySelector(".form");
  
    // Verifica se os elementos foram encontrados
    if (mostrarFormularioBtn && formulario && formInicial) {
      // Adiciona um evento de clique ao botão para mostrar o formulário completo
      mostrarFormularioBtn.addEventListener("click", function () {
        // Oculta o elemento com a classe .form
        formInicial.style.display = "none";
        
        // Exibe o formulário completo
        formulario.style.display = "block";
      });
    }
  });
  
  
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

       

        // Estrutura JSON com os dados do formulário
        const jsonData = {
            users: [formData]
        };

        console.log(jsonData); // Exibe o objeto JSON no console (para fins de verificação)

     
    });
});
// Adicione um evento de envio ao formulário
document.querySelector("#form").addEventListener("submit", function (event) {
    // Impedir o comportamento padrão de envio, que recarregaria a página
    event.preventDefault();
  
    // Coleta os valores dos campos do #form
    const nome = this.querySelector("#nome").value;
    const cpf = this.querySelector("#cpf").value;
    const atividade = this.querySelector("#atividade").value;
    const cargo = this.querySelector("#cargo").value;
  
    // Exibe os dados no .form
    const dadosInseridos = document.querySelector(".dados-inseridos");
    dadosInseridos.innerHTML = `
      Nome: ${nome}<br>
      CPF: ${cpf}<br>
      Atividade: ${atividade}<br>
      Cargo: ${cargo}
    `;
  
    // Exibe o .form e oculta o #form
    const formOculto = document.querySelector("#form");
    const formVisivel = document.querySelector(".form");
    formVisivel.style.display = "block";
    formOculto.style.display = "none";
  });
  