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
            <td style="border: 1px solid #b89b65;">Al iniciar la fase de aventura</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN77')">077</button></td>
            <td style="border: 1px solid #b89b65;">--</td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Al Buscar con éxito en la loseta i2</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN57')">057</button></td>
            <td style="border: 1px solid #b89b65;">
            <button onclick="mostrarPopupImagen('losetas/Cap 5 - loseta i2.png')">I2</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Si se Explora la loseta i4</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN80')">080</button></td>
            <td style="border: 1px solid #b89b65;"><button onclick="mostrarPopupImagen('losetas/Cap 5 - loseta i4.png')">I4</button></td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Si se Explora la loseta i10</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN104')">104</button></td>
            <td style="border: 1px solid #b89b65;"><button onclick="mostrarPopupImagen('losetas/Cap 5 - loseta i10.png')">I10</button></td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Si se Explora la loseta t2</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN129')">129</button></td>
            <td style="border: 1px solid #b89b65;"><button onclick="mostrarPopupImagen('losetas/Cap 5 - loseta t2.png')">T2</button></td>
        </tr>
        <tr>
            <td colspan="3" style="border: 1px solid #b89b65; text-align: center;">
                <button onclick="cargarTexto('MN7')">007</button>
                <button onclick="cargarTexto('MN25')">025</button>
                <button onclick="cargarTexto('MN53')">053</button>
                <button onclick="cargarTexto('MN95')">095</button>
                <button onclick="cargarTexto('MN105')">105</button>
                <button onclick="cargarTexto('MN146')">146</button>
            </td>
        </tr>
    </tbody>
</table>`);

