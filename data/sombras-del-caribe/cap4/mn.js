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
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN110')">110</button></td>
            <td style="border: 1px solid #b89b65;">-</td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Cuando se intente abrir la puerta A</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN121')">121</button></td>
            <td rowspan="3" style="border: 1px solid #b89b65;">
            <button onclick="mostrarPopupLoseta('losetas/Cap 4 - loseta v1-s4.png', [
                    {id:'MN121', num:'121', texto:'Cuando se intente abrir la puerta A'},
                    {id:'MN119', num:'119', texto:'Si un Personaje con el Objetivo 3 está en la habitación B sin Enemigos'},
                    {id:'MN88', num:'088', texto:'Cuando se intente abrir la puerta C'}
                ])">V1-S4</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Si un Personaje con el Objetivo 3 está en la habitación B sin Enemigos</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN119')">119</button></td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Cuando se intente abrir la puerta C</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN88')">088</button></td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Al buscar con éxito en la loseta c1</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN13')">013</button></td>
            <td style="border: 1px solid #b89b65;"><button onclick="mostrarPopupLoseta('losetas/Cap 4 - loseta c1.png', [
                    {id:'MN13', num:'013', texto:'Al buscar con éxito en la loseta c1'}
                ])">C1</button></td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Cuando se intente abrir la puerta F desde el exterior</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN133')">133</button></td>
            <td rowspan="2" style="border: 1px solid #b89b65;">
            <button onclick="mostrarPopupLoseta('losetas/Cap 4 - loseta v3-s1.png', [
                    {id:'MN133', num:'133', texto:'Cuando se intente abrir la puerta F desde el exterior'},
                    {id:'MN62', num:'062', texto:'Cuando se intente abrir la puerta G'}
                ])">V3-S1</button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Cuando se intente abrir la puerta G</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN62')">062</button></td>
        </tr>
        <tr>
            <td style="border: 1px solid #b89b65;">Si los Personajes logran continuar a la siguiente aventura</td>
            <td style="border: 1px solid #b89b65;"><button onclick="cargarTexto('MN66')">066</button></td>
            <td style="border: 1px solid #b89b65;">-</td>
        </tr>
        <tr>
            <td colspan="3" style="border: 1px solid #b89b65; text-align: center;">
                <button onclick="cargarTexto('MN124')">124</button>
                <button onclick="cargarTexto('MN134')">134</button>
                <button onclick="cargarTexto('MN72')">072</button>
                <button onclick="cargarTexto('MN90')">090</button>
            </td>
        </tr>
    </tbody>
</table>`);

