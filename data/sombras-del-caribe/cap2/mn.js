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
            <td style="border: 1px solid #b89b65;">Cuando se intenta abrir la puerta A</td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN30')">030</button>
            </td>
            <td style="border: 1px solid #b89b65;"></td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Cuando se intenta abrir la puerta B</td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN43')">043</button>
            </td>
            <td rowspan="4" style="border: 1px solid #b89b65;">
                <button onclick="mostrarPopupImagen('losetas/Cap 2 - loseta v1.png')">V1</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Al registrar al Enemigo C</td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN130')">130</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Cuando se intenta abrir la puerta D</td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN135')">135</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Al buscar con éxito en la habitación E</td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN123')">123</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Cuando se intenta abrir la puerta F</td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN8')">008</button>
            </td>
            <td rowspan="4" style="border: 1px solid #b89b65;">
                <button onclick="mostrarPopupImagen('losetas/Cap 2 - loseta v3.png')">V3</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Al buscar con éxito en la habitación G</td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN112')">112</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Al buscar con éxito en la habitación H</td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN92')">092</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Cuando se intenta abrir la puerta I</td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN9')">009</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Cuando se intenta abrir la puerta J</td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN122')">122</button>
            </td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="mostrarPopupImagen('losetas/Cap 2 - loseta v4.png')">V4</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Si los personajes logran continuar a la siguiente aventura</td>
            <td style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN22')">022</button>
            </td>
            <td style="border: 1px solid #b89b65;"></td>
        </tr>
        <tr>
            <td colspan="4" style="border: 1px solid #b89b65;">
                <button onclick="cargarTexto('MN4')">004</button>
                <button onclick="cargarTexto('MN82')">082</button>
                <button onclick="cargarTexto('MN85')">085</button>
                <button onclick="cargarTexto('MN118')">118</button>
                <button onclick="cargarTexto('MN123')">123</button>
                <button onclick="cargarTexto('MN131')">131</button>
                <button onclick="cargarTexto('MN148')">148</button>
            </td>
        </tr>
    </tbody>
</table>`);

