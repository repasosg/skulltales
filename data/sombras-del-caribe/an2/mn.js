ChapterLoader.registerContent('mn', `
<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
  <thead>
    <tr>
      <th style="border: 1px solid #b89b65; padding: 8px;">Lo desencadena...</th>
      <th style="border: 1px solid #b89b65; padding: 8px;">MN</th>
      <th style="border: 1px solid #b89b65; padding: 8px;">Loseta</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Al iniciar la Fase de Aventura</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN45')">045</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se intente abrir la puerta A</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN6')">006</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;" rowspan="3"><button onclick="mostrarPopupLoseta('losetas/Anexo 2- loseta s1-v3.png', [
                    {id:'MN6', num:'006', texto:'Cuando se intente abrir la puerta A'},
                    {id:'MN36', num:'036', texto:'Cuando se intente abrir la puerta B'},
                    {id:'MN114', num:'114', texto:'Cuando se intente abrir la puerta C'}
                ])">S1-V3</button></td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se intente abrir la puerta B</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN36')">036</button></td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se intente abrir la puerta C</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN114')">114</button></td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se intente abrir la puerta D</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN125')">125</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;" rowspan="3"><button onclick="mostrarPopupLoseta('losetas/Anexo 2- loseta v1.png', [
                    {id:'MN125', num:'125', texto:'Cuando se intente abrir la puerta D'},
                    {id:'MN50', num:'050', texto:'Cuando se intente abrir la puerta E'},
                    {id:'MN28', num:'028', texto:'Cuando se intente abrir la puerta F'}
                ])">V1</button></td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se intente abrir la puerta E</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN50')">050</button></td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se intente abrir la puerta F</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN28')">028</button></td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se intente abrir la puerta G</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN78')">078</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button onclick="mostrarPopupLoseta('losetas/Anexo 2- loseta v4.png', [
                    {id:'MN78', num:'078', texto:'Cuando se intente abrir la puerta G'}
                ])">V4</button></td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se intente abrir la puerta H</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN91')">091</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button onclick="mostrarPopupLoseta('losetas/Anexo 2- loseta v2.png', [
                    {id:'MN91', num:'091', texto:'Cuando se intente abrir la puerta H'}
                ])">V2</button></td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Cuando se realice el primer ataque a distancia</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN54')">054</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Cuando los Personajes tengan los Objetivos 3 y 4 y esté en juego la loseta V4</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN132')">132</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Si los personajes logran continuar a la próxima aventura</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button class="btn-mn" onclick="cargarTexto('MN137')">137</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;" colspan="3">
          <button class="btn-mn" onclick="cargarTexto('MN34')">034</button>
          <button class="btn-mn" onclick="cargarTexto('MN138')">138</button>
          <button class="btn-mn" onclick="cargarTexto('MN142')">142</button>
          <button class="btn-mn" onclick="cargarTexto('MN51')">051</button>
       </td>
    </tr>
  </tbody>
</table>
`);

