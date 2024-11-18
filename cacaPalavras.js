
    document.addEventListener("DOMContentLoaded", () => {
        const palavras = ["ZUMBI", "IGUALDADE", "RESPEITO", "DIVERSIDADE", "IDENTIDADE"];
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const tamanho = 10; // Tamanho da grade
        const grade = document.querySelector(".caca-palavras .grade");
        const mensagem = document.getElementById("mensagem");
        let selecionadas = "";

        // Função para gerar a grade
        function gerarGrade() {
            for (let i = 0; i < tamanho * tamanho; i++) {
                const div = document.createElement("div");
                div.textContent = letras[Math.floor(Math.random() * letras.length)];
                grade.appendChild(div);
            }
        }

        // Adicionar palavras na grade
        function adicionarPalavras() {
            palavras.forEach((palavra) => {
                const inicio = Math.floor(Math.random() * (tamanho * tamanho - palavra.length));
                for (let i = 0; i < palavra.length; i++) {
                    grade.children[inicio + i].textContent = palavra[i];
                }
            });
        }

        // Seleção de letras
        grade.addEventListener("click", (e) => {
            if (e.target.tagName === "DIV") {
                e.target.classList.toggle("selecionado");
                selecionadas += e.target.textContent;

                if (palavras.includes(selecionadas)) {
                    mensagem.textContent = `Você encontrou a palavra: ${selecionadas}`;
                    selecionadas = "";
                    grade.querySelectorAll(".selecionado").forEach((el) => el.classList.remove("selecionado"));
                }
            }
        });

        // Inicialização
        gerarGrade();
        adicionarPalavras();
    });