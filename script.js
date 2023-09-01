document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

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
            epi: document.getElementById("usaEPI").checked ? "Usa EPI" : "Não usa EPI",
            ca: form.ca.value,
            doc: form.doc.value
        };

        // Estrutura JSON com os dados do formulário
        const jsonData = {
            users: [formData]
        };

        console.log(jsonData); // Exibe o objeto JSON no console (para fins de verificação)

     
    });
});