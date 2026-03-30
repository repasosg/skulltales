ChapterLoader.registerContent('preparacion', `
<center>
	<img src="img/aventura.png" alt="Aventura">
	<div class="objetivo"><strong>Objetivo: </strong>Encontrar a Acpaxapo y escapar con ella de la isla.</div>
	<table style="width: 90%; border-collapse: collapse; margin-top: 10px;">
		<tbody>
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Losetas y Bandera:</strong></td>
			</tr>
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>Tipos de loseta:</strong></td>
				<td style="border: 1px solid #b89b65; padding: 5px; width: 25%;">Cuevas y pantano</td>
				<td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong><img src="img/bpirata.png" alt="Bandera Pirata" class="icono-personaje"></strong></td>
				<td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>18</strong></td>
			</tr>
			<!-- Fila 3: Cabecera Enemigos (Oscura) -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigos:</strong></td>
			</tr>
			<!-- Fila 4: Enemigos -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Casaca.png" alt="Casaca Roja" class="icono-personaje"><br> Casaca Roja</td>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Enemigo - Sirena.png" alt="Sirena" class="icono-personaje"><br> Sirena</td>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Enemigo - Cazarrecompensas.png" alt="Cazarrecompensas" class="icono-personaje"><br> Cazarrecompensas</td>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Enemigo - Ahogado.png" alt="Ahogado" class="icono-personaje"><br> Ahogado</td>
			</tr>
			<!-- Fila 5: Cabecera Enemigo Perdido (Oscura) -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigo perdido:</strong></td>
			</tr>
			<!-- Fila 6: Enemigo Perdido -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px;" colspan="4"><img src="img/Enemigo - Ahogado.png" alt="Ahogado" class="icono-personaje"><br> Ahogado</td>
			</tr>
		</tbody>
	</table>
</center>
<p style="text-align: justify;"><strong>Preparación:</strong></p>
<ul style="text-align: justify;">
	<li>Prepara las losetas i7 y p2 como se indica, serán las losetas de Inicio. Los Personajes comienzan dentro de la barca de la loseta i7.</li>
	<li>Mezcla los Marcadores de Loseta (ML) p1, p3 y p5 en una pila de Pantano. Los Personajes comienzan robando marcadores de esta pila al ‘Explorar’.</li>
	<li>Mezcla los ML c1 a c6 en una pila de Cueva.</li>
    <li>Al comenzar la Fase de Aventura, los Personajes deben leer el <button class="ojo-button" onclick="ChapterLoader.mostrarMN('MN1783')">MN1783</button>.</li>
</ul>
<center><img src="losetas/3/Cam 3 - Cap 3 - loseta i7-p2.png" alt="Loseta" class="imagen-loseta2"></center>
`);
LosetasMegaexpansión


