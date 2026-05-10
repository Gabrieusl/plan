const grade = [
        </td>

        <td>

          <input
            class="campo"
            value="${atividade}"
            onblur="salvarCampo(${index}, 'atividade', this.value)"
          >

        </td>

      </tr>

    `;

  });

}

semanaInput.addEventListener("change", () => {

  renderizar();

  verificarPendencias();

});

filtroDia.addEventListener("change", renderizar);
filtroTurma.addEventListener("change", renderizar);
filtroDisciplina.addEventListener("change", renderizar);

// RELATÓRIO

document
  .getElementById("verRelatorio")
  .addEventListener("click", () => {

    let html = `

      <html>

      <head>

        <title>Relatório Geral</title>

        <style>

          body {
            font-family: Arial;
            padding: 20px;
            background: #f3f4f6;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
          }

          th {
            background: #
