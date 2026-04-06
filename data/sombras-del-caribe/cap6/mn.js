ChapterLoader.registerContent('mn', `
<center>
    <h2>Momentos Narrativos y tablas</h2>
</center>
<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
    <thead>
        <tr>
            <th style="border: 1px solid #b89b65; background-color: #5c3d1a; color: #fff; padding: 10px;">DESENCADENANTE</th>
            <th style="border: 1px solid #b89b65; background-color: #5c3d1a; color: #fff; padding: 10px;">MN</th>
            <th style="border: 1px solid #b89b65; background-color: #5c3d1a; color: #fff; padding: 10px;">LOSETA</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #b89b65; padding: 8px;">Al iniciar la fase de Aventura</td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
                <button onclick="cargarTexto('MN81')">081</button>
            </td>
            <td style="border: 1px solid #b89b65; padding: 8px;"></td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65; padding: 8px;">Si juegas en modo solitario y no dispones de Aliados, al Exploar por primera vez</td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
                <button onclick="cargarTexto('MN40')">040</button>
            </td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65; padding: 8px;">Si se explora la Loseta i4</td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
                <button onclick="cargarTexto('MN113')">113</button>
            </td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
                <button onclick="mostrarPopupLoseta('losetas/Cap 6 - loseta i4.png', [
                    {id:'MN113', num:'113', texto:'Si se explora la Loseta i4'}
                ])">I4</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65; padding: 8px;">Si se Busca con éxito en la Loseta i5</td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
                <button onclick="cargarTexto('MN31')">031</button>
            </td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65; padding: 8px;">Si se explora la Loseta i7</td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
                <button onclick="cargarTexto('MN35')">035</button>
            </td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65; padding: 8px;">Si se explora la Loseta i13</td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
                <button onclick="cargarTexto('MN12')">012</button>
            </td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
                <button onclick="mostrarPopupLoseta('losetas/Cap 6 - loseta i13.png', [
                    {id:'MN12', num:'012', texto:'Si se explora la Loseta i13'}
                ])">I13</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65; padding: 8px;">Si los Personajes logran continuar a la siguiente aventura</td>
            <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">
                <button onclick="cargarTexto('MN127')">127</button>
            </td>
            <td style="border: 1px solid #b89b65; padding: 8px;"></td>
        </tr>
        <tr>
            <td colspan="3" style="border: 1px solid #b89b65; padding: 10px; text-align: center;">
                <button onclick="cargarTexto('MN71')">071</button>
                <button onclick="cargarTexto('MN21')">021</button>
                <button onclick="cargarTexto('MN144')">144</button>
            </td>
        </tr>
    </tbody>
</table>
`);


