ChapterLoader.registerContent('mn', `
<center>
    <h2>Momentos Narrativos y tablas</h2>
</center>
<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
    <thead>
        <tr>
            <th style="border: 1px solid #b89b65;">DESENCADENANTE</th>
            <th style="border: 1px solid #b89b65;">MN</th>
            <th style="border: 1px solid #b89b65;">LOSETA</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #b89b65;">Al explorar la primera loseta</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN117')">117</button></td>
            <td style="border: 1px solid #b89b65;">-</td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Si se explora la loseta i11</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN126')">126</button></td>
            <td style="border: 1px solid #b89b65;">
            <button onclick="mostrarPopupLoseta('losetas/Cap 3 - loseta i11.png', [
                    {id:'MN126', num:'126', texto:"Si se explora la loseta i11"}
                ])">I11</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Si se explora la loseta i10</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN27')">027</button></td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="mostrarPopupLoseta('losetas/Cap 3 - loseta i10.png', [
                    {id:'MN27', num:'027', texto:"Si se explora la loseta i10"}
                ])">I10</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Al Buscar con éxito en la Loseta i16</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN10')">010</button></td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="mostrarPopupLoseta('losetas/Cap 3 - loseta i16.png', [
                    {id:'MN10', num:'010', texto:"Al Buscar con éxito en la Loseta i16"}
                ])">I16</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Al Buscar con éxito en la Loseta c1</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN128')">128</button></td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="mostrarPopupLoseta('losetas/Cap 3 - loseta c1.png', [
                    {id:'MN128', num:'128', texto:"Al Buscar con éxito en la Loseta c1"}
                ])">C1</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Si se explora la loseta c2</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN24')">024</button></td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="mostrarPopupLoseta('losetas/Cap 3 - loseta c2.png', [
                    {id:'MN24', num:'024', texto:"Si se explora la loseta c2"}
                ])">C2</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Si los personajes logran continuar a la siguiente aventura</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN52')">052</button></td>
            <td style="border: 1px solid #b89b65;">-</td>
        </tr>
        <tr>
            <td colspan="3" style="border: 1px solid #b89b65; text-align: center;">
                <button onclick="cargarTexto('MN3')">003</button>
                <button onclick="cargarTexto('MN32')">032</button>
                <button onclick="cargarTexto('MN59')">059</button>
                <button onclick="cargarTexto('MN67')">067</button>
                <button onclick="cargarTexto('MN89')">089</button>
                <button onclick="cargarTexto('MN143')">143</button>
            </td>
        </tr>
    </tbody>
</table>`);

