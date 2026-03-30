ChapterLoader.registerContent('preparacion', `
<div class="instrucciones">
<center>
	<img src="img/aventura.png" alt="Aventura">
	<div class="objetivo"><strong>Objetivo: </strong>Encontrad la tercera parte del mapa, liberad a Paolo Miras y escapad de la villa. La aventura finaliza inmediatamente cuando un Personaje tiene el Objetivo 5 y todos los Personajes vivos y Paolo Miras están en la zona de inicio.</div>
	<table style="width: 90%; border-collapse: collapse; margin-top: 10px;">
		<tbody>
			<!-- Fila 1: Tipos de Loseta -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Losetas y Bandera:</strong></td>
			</tr>
			<tr>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>Tipos de loseta:</strong></td>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;">Villa, Cueva, Calabozo y Cripta.</td>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong><img src="img/bpirata.png" alt="Bandera Pirata" class="icono-personaje"></strong></td>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>18</strong></td>
</tr>
			<!-- Fila 3: Cabecera Enemigos (Oscura) -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigos:</strong></td>
			</tr>
			<!-- Fila 4: Enemigos -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Casaca.png" alt="Casaca Roja" class="icono-personaje"> Casaca Roja</td>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Oficial.png" alt="Oficial" class="icono-personaje"> Oficial</td>
				<td style="border: 1px solid #b89b65; padding: 5px;" colspan="2"><img src="img/Esqueleto.png" alt="Esqueleto" class="icono-personaje"> Esqueleto</td>
			</tr>
			<!-- Fila 5: Cabecera Enemigo Perdido (Oscura) -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigo perdido:</strong></td>
			</tr>
			<!-- Fila 6: Enemigo Perdido -->
			<tr>
			  <td style="border: 1px solid #b89b65; padding: 5px;" colspan="4"><img src="img/Casaca.png" alt="Casaca Roja" class="icono-personaje"> Casaca Roja</td>
			</tr>
	  </tbody>
	</table>
</center>
<strong>Preparación:</strong><br>
Mezcla los marcadores de <strong>Loseta v1 y v3</strong> en una pila para levantar losetas de Villa.<br>
Mezcla los marcadores de <strong>Loseta c1 a c5</strong> en otra pila para levantar losetas de Cueva.<br>
Prepara la <strong>Loseta v2</strong> como se indica, será la loseta de inicio. Coloca los Personajes en la zona verde.<br>
Cuando comience la Fase de Aventura, los jugadores deben leer <button onclick="cargarTexto('MN110')">110</button>.
<center><img src="losetas/Cap 4 - loseta v2.png" alt="Loseta" class="imagen-loseta2"></center>
</div>`);



