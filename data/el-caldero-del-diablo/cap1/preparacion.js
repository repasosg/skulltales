ChapterLoader.registerContent('preparacion', `
<center>
	<img src="img/aventura.png" alt="Aventura">
	<div class="objetivo"><strong>Objetivo: </strong>Encontrar los tres archivos con toda la información para localizar la isla donde fue a parar el Tesoro del Dorado y regresar a la barca.</div>
	<table style="width: 90%; border-collapse: collapse; margin-top: 10px;">
		<tbody>
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Losetas y Bandera:</strong></td>
			</tr>
			<tr>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>Tipos de loseta:</strong></td>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;">Villa (v)</td>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong><img src="img/bpirata.png" alt="Bandera Pirata" class="icono-personaje"></strong></td>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>20</strong></td>
</tr>
			<!-- Fila 3: Cabecera Enemigos (Oscura) -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigos:</strong></td>
			</tr>
			<!-- Fila 4: Enemigos -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Casaca.png" alt="Casaca Roja" class="icono-personaje"><br> Casaca Roja</td>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Oficial.png" alt="Oficial" class="icono-personaje"><br> Oficial</td>
				<td style="border: 1px solid #b89b65; padding: 5px;" colspan="2"><img src="img/Enemigo - Cazarrecompensas.png" alt="Cazarrecompensas" class="icono-personaje"><br> Cazarrecompensas</td>
			</tr>
			<!-- Fila 5: Cabecera Enemigo Perdido (Oscura) -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigo perdido:</strong></td>
			</tr>
			<!-- Fila 6: Enemigo Perdido -->
			<tr>
			  <td style="border: 1px solid #b89b65; padding: 5px;" colspan="4"><img src="img/Enemigo - Cazarrecompensas.png" alt="Cazarrecompensas" class="icono-personaje"><br> Cazarrecompensas</td>
			</tr>
		  </tbody>
	</table>
</center>
<p style="text-align: justify;"><strong>Preparación:</strong></p>
<ul style="text-align: justify;">
	<li>Prepara las losetas <strong>i7, v1, v2, v3 y v4</strong>, y colócalas tal y como se indican. Serán las losetas de Inicio. Coloca los Personajes dentro de la barca de la loseta i7.</li>
	<li>Coloca <strong>6 marcadores de Loseta (ML) de Cueva</strong> al azar en las habitaciones indicadas de las losetas de Inicio. Cuando un Personaje abra una puerta que contenga un marcador NO hagas una tirada en la Tabla de Enemigos. En su lugar, revela el marcador y comprueba la tabla de Momentos Narrativos.</li>
	<li>Coloca bocabajo y al azar los <strong>ML del i1 al i15</strong> sobre las casillas del Tablero de Aventuras, tal y como se muestra en la imagen.</li>
	<center><img src="losetas/2/Cam 2 - Cap 1 - Tablero.png" alt="Loseta" class="imagen-loseta2"></center>
	<li>Durante esta Aventura ignora las reglas habituales referentes al avance de la <img src="variosimg/banderapirata.png" class="icono-personaje2">. En su lugar, durante la Fase de Sucesos, tira un dado y avanza el indicador de <img src="variosimg/banderapirata.png" class="icono-personaje2"> 1 casilla si obtienes un resultado de 1 o 2. Cuando un Personaje consiga ciertos Objetivos, aumentará el resultado necesario tal y como se indica en la Tabla de Incendio.</li>

	<table style="width: 60%; border-collapse: collapse; margin: 20px auto;">
  <thead>
    <tr>
      <th style="border: 1px solid #b89b65; padding: 8px;" colspan="2">Tabla de Incendio</th>
    </tr>
    <tr>
      <th style="border: 1px solid #b89b65; padding: 8px;">Objetivos conseguidos</th>
      <th style="border: 1px solid #b89b65; padding: 8px;">Tirada</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">1</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">1-3 Avanza la <img src="variosimg/banderapirata.png" class="icono-personaje2"> 1 casilla</td>
    </tr>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">2</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">1-4 Avanza la <img src="variosimg/banderapirata.png" class="icono-personaje2"> 1 casilla</td>
    </tr>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px; text-align: center;">3</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">1-5 Avanza la <img src="variosimg/banderapirata.png" class="icono-personaje2"> 1 casilla</td>
    </tr>
  </tbody>
</table>
	<li>Además, si un Personaje no consigue éxito al 'Buscar', avanza el indicador de <img src="variosimg/banderapirata.png" class="icono-personaje2"> 1 casilla en el Tablero de Aventuras.</li>
	<li>Cada vez que el indicador de <img src="variosimg/banderapirata.png" class="icono-personaje2"> alcance una casilla con un marcador de Loseta, voltea el marcador y colócalo en la habitación indicada con el mismo número en la imagen de losetas iniciales. Considera esta habitación en llamas (ver Reglas de Incendio).</li>
</ul>



<p style="text-align: justify;"><strong>REGLAS DE INCENDIO:</strong></p>
<ul style="text-align: justify;">
	<li>Una miniatura que se encuentre en una habitación en llamas al inicio de su turno, o que durante su turno atraviese una habitación incendiada, deberá superar una tirada de <img src="variosimg/fuerza.png" class="icono-personaje2"> 4, de lo contrario, recibirá <img src="variosimg/Herida.png" class="icono-personaje2"> 1.</li>
	<li>Un Enemigo en una habitación en llamas no realiza Tiradas de Conducta. En su lugar, tratará de huir de la habitación incendiada desplazándose <img src="variosimg/Movimiento.png" class="icono-personaje2"> x2 hacia la salida más cercana y deteniendo su movimiento cuando alcance una casilla vacía en una zona que NO esté en llamas.</li>
	<li>Si un Enemigo en una habitación incendiada está adyacente a un Personaje, dicho Enemigo realizará un ataque si puede y a continuación realizará el desplazamiento descrito anteriormente. Los Enemigos no seguirán a los Personajes al interior de una habitación en llamas. En su lugar, se quedarán lo más cerca posible de la habitación en llamas y tratarán de usar ataques <img src="variosimg/Distancia.png" class="icono-personaje2"> contra los Personajes.</li>
</ul>
<center><img src="losetas/2/Cam 2 - Cap 1 - loseta i7-v1-v2-v3-v4.png" alt="Loseta" class="imagen-loseta2"></center>
`);
LosetasMegaexpansión

