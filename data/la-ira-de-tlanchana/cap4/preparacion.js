ChapterLoader.registerContent('preparacion', `
<center>
	<img src="img/aventura.png" alt="Aventura">
	<div class="objetivo"><strong>Objetivo: </strong>Encontrar el “Cuenco de Acan” y llevarlo a la barca.</div>
	<table style="width: 90%; border-collapse: collapse; margin-top: 10px;">
		<tbody>
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Losetas y Bandera:</strong></td>
			</tr>
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>Tipos de loseta:</strong></td>
				<td style="border: 1px solid #b89b65; padding: 5px; width: 25%;">Gesta, Templo y Especial</td>
				<td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong><img src="img/bpirata.png" alt="Bandera Pirata" class="icono-personaje"></strong></td>
				<td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>18</strong></td>
			</tr>
			<!-- Fila 3: Cabecera Enemigos (Oscura) -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigos:</strong></td>
			</tr>
			<!-- Fila 4: Enemigos -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px;" colspan="1"><img src="img/Esqueleto.png" alt="Esqueleto" class="icono-personaje"><br> Esqueleto</td>
				<td style="border: 1px solid #b89b65; padding: 5px;" colspan="2"><img src="img/Maldito.png" alt="Maldito" class="icono-personaje"><br> Maldito</td>
				<td style="border: 1px solid #b89b65; padding: 5px;" colspan="1"><img src="img/Momia.png" alt="Momia" class="icono-personaje"><br> Momia</td>
			</tr>
			<!-- Fila 5: Cabecera Enemigo Perdido (Oscura) -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigo perdido:</strong></td>
			</tr>
			<!-- Fila 6: Enemigo Perdido -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px;" colspan="4"><img src="img/Maldito.png" alt="Maldito" class="icono-personaje"><br> Maldito</td>
			</tr>
		</tbody>
	</table>
</center>
<p style="text-align: justify;"><strong>Preparación:</strong></p>
<ul style="text-align: justify;">
	<li>Prepara las losetas i7 y t3 como se indica, serán las losetas de Inicio. Los Personajes comienzan dentro de la barca de la loseta i7.</li>
	<li>Mezcla los Marcadores de Loseta (ML) g1, g5, g6, t1, t2, t4, t5 y t6 y forma una pila con ellos.</li>
    <li>Al comenzar la Fase de Aventura, los Personajes deben leer el <button class="ojo-button" onclick="ChapterLoader.mostrarMN('MN2204')">MN2204</button>.</li>
</ul>
<center><img src="losetas/3/Cam 3 - Cap 4 - loseta i7-t3.png" alt="Loseta" class="imagen-loseta2"></center>
`);
LosetasMegaexpansión


