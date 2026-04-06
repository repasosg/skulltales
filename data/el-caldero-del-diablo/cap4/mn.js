ChapterLoader.registerContent('mn', `
<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
  <thead>
    <tr>
      <th style="border: 1px solid #b89b65; padding: 8px;">Condición</th>
      <th style="border: 1px solid #b89b65; padding: 8px;">Evento</th>
      <th style="border: 1px solid #b89b65; padding: 8px;">Loseta</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">Al iniciar la Fase de Aventura</td>
      <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN1595')">1595</button></td>
      <td style="border: 1px solid #b89b65; padding: 8px;" rowspan="3"><button class="boton-dorado" onclick="mostrarPopupLoseta('losetas/2/Cam 2 - Cap 4 - loseta v1-v4.png', [
                    {id:'MN1595', num:'1595', texto:"Al iniciar la Fase de Aventura"},
                    {id:'MN1959', num:'1959', texto:"Si se entra en la habitación B"},
                    {id:'MN2644', num:'2644', texto:"Si se entra en la habitación C"}
                ])">Ver V1-V4</button></td>
    </tr>
    <tr>
        <td style="border: 1px solid #b89b65; padding: 8px;">Si se entra en la habitacion B</td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN1959')">1959</button></td>
    </tr>
    <tr>
        <td style="border: 1px solid #b89b65; padding: 8px;">Si se entra en la habitacion C</td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN2644')">2644</button></td>
    </tr>
    <tr>
        <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se revele el marcador de Losetas t1</td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN2661')">2661</button></td>
        <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
        <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se revele el marcador de Losetas t2</td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN2722')">2722</button></td>
        <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
        <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se revele el marcador de Losetas t3</td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN1426')">1426</button></td>
        <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
        <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se revele el marcador de Losetas t4</td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN1935')">1935</button></td>
        <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
        <td style="border: 1px solid #b89b65; padding: 8px;">Si se explora la loseta s1</td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN2917')">2917</button></td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-dorado" onclick="mostrarPopupLoseta('losetas/2/Cam 2 - Cap 4 - loseta s1.png', [
                    {id:'MN2917', num:'2917', texto:"Si se explora la loseta s1"}
                ])">Ver S1</button></td>
    </tr>
    <tr>
        <td style="border: 1px solid #b89b65; padding: 8px;">Si se explora la loseta s3</td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN2879')">2879</button></td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-dorado" onclick="mostrarPopupLoseta('losetas/2/Cam 2 - Cap 4 - loseta s3.png', [
                    {id:'MN2879', num:'2879', texto:"Si se explora la loseta s3"}
                ])">Ver S3</button></td>
    </tr>
    <tr>
        <td style="border: 1px solid #b89b65; padding: 8px;">Si se explora la loseta s4</td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN1556')">1556</button></td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-dorado" onclick="mostrarPopupLoseta('losetas/2/Cam 2 - Cap 4 - loseta s4.png', [
                    {id:'MN1556', num:'1556', texto:"Si se explora la loseta s4"}
                ])">Ver S4</button></td>
    </tr>
    <tr>
        <td style="border: 1px solid #b89b65; padding: 8px;">La primera vez que te enfrentes a un Cazarrecompensas</td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN1988')">1988</button></td>
        <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
        <td style="border: 1px solid #b89b65; padding: 8px;">Si los Personajes logran continuar a la siguiente Aventura</td>
        <td style="border: 1px solid #b89b65; padding: 8px;"><button class="boton-mn" onclick="cargarTexto('MN2023')">2023</button></td>
        <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
      <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;" colspan="3">
        <button class="boton-mn" onclick="cargarTexto('MN1154')">1154</button> <button class="boton-mn" onclick="cargarTexto('MN1356')">1356</button> <button class="boton-mn" onclick="cargarTexto('MN1471')">1471</button> <button class="boton-mn" onclick="cargarTexto('MN2074')">2074</button> <button class="boton-mn" onclick="cargarTexto('MN2903')">2903</button> 
      </td>
    </tr>
  </tbody>
</table>
`);


