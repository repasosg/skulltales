ChapterLoader.registerContent('exito', `
<div class="objetivos-container">
    <p style="margin-bottom: 10px;"><em>Consulta tu desenlace para ver la recompensa o consecuencia:</em></p>
    
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
            <tr>
                <th style="border: 1px solid #b89b65; padding: 10px;">Condición</th>
                <th style="border: 1px solid #b89b65; padding: 10px;">Recompensa</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid #b89b65; padding: 10px;">Cada Pirata que ha completado la aventura con éxito</td>
                <td style="border: 1px solid #b89b65; padding: 10px; text-align: center;">10 <img src='variosimg/prestigio.png' class='icono-inline'> + 10 <img src='variosimg/oro.png' class='icono-inline'></td>
            </tr>
            <tr>
                <td style="border: 1px solid #b89b65; padding: 10px;">Tu Pirata no ha completado la aventura con éxito, pero los demás si</td>
                <td style="border: 1px solid #b89b65; padding: 10px; text-align: center;">5 <img src='variosimg/prestigio.png' class='icono-inline'> + 5 <img src='variosimg/oro.png' class='icono-inline'></td>
            </tr>
            <tr>
                <td style="border: 1px solid #b89b65; padding: 10px;">Habéis encontrado al Capitán Phillips, pero no habéis escapado de la isla con él</td>
                <td style="border: 1px solid #b89b65; padding: 10px; text-align: center;">Puedes continuar la campaña</td>
            </tr>
            <tr>
                <td style="border: 1px solid #b89b65; padding: 10px;">No habéis encontrado al Capitán Phillips, o está muerto</td>
                <td style="border: 1px solid #b89b65; padding: 10px; text-align: center;">Repite la Aventura</td>
            </tr>
        </tbody>
    </table>
    <div style="text-align: center; margin-top: 20px;">
        <button class="boton-dorado" onclick="window.location.href='la-ira-de-tlanchana-cap3.html'">Siguiente Capítulo</button>
    </div>
</div>
`);
