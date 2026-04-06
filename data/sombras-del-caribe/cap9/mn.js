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
       <td style="border: 1px solid #b89b65; padding: 8px;"><button onclick="cargarTexto('MN140')">140</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Al Explorar la primera loseta</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button onclick="cargarTexto('MN39')">039</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Al Buscar con éxito en la habitación A</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button onclick="cargarTexto('MN107')">107</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;" rowspan=2"><button onclick="mostrarPopupLoseta('losetas/Cap 9 - loseta v1.png', [
                    {id:'MN107', num:'107', texto:'Al Buscar con éxito en la habitación A'},
                    {id:'MN56', num:'056', texto:'Al Buscar con éxito en la habitación B'}
                ])">V1</button></td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Al Buscar con éxito en la habitación B</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button onclick="cargarTexto('MN56')">056</button></td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Al Buscar con éxito en la habitación C</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button onclick="cargarTexto('MN14')">014</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button onclick="mostrarPopupLoseta('losetas/Cap 9 - loseta v3.png', [
                    {id:'MN14', num:'014', texto:'Al Buscar con éxito en la habitación C'}
                ])">V3</button></td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;">Si los personajes logran continuar a la siguiente aventura</td>
       <td style="border: 1px solid #b89b65; padding: 8px;"><button onclick="cargarTexto('MN17')">017</button></td>
       <td style="border: 1px solid #b89b65; padding: 8px;">-</td>
    </tr>
    <tr>
       <td style="border: 1px solid #b89b65; padding: 8px;" colspan="3">
         <button onclick="cargarTexto('MN37')">037</button>
         <button onclick="cargarTexto('MN145')">145</button>
       </td>
    </tr>
  </tbody>
</table>
`);

