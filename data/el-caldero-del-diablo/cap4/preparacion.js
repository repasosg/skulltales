ChapterLoader.registerContent('preparacion', `
<div class="instrucciones">
<center>
	<img src="img/aventura.png" alt="Aventura">
	<div class="objetivo">
		<p><strong>Objetivo:</strong> Realizar el intercambio y volver al barco.</p>
	</div>

	<table style="width: 90%; border-collapse: collapse; margin-top: 10px;">
		<tbody>
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Losetas y Bandera:</strong></td>
			</tr>
			<tr>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>Tipos de loseta:</strong></td>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;">Ciudad, Cueva, Especiales</td>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong><img src="img/bpirata.png" alt="Bandera Pirata" class="icono-personaje"></strong></td>
  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>18</strong></td>
</tr>
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigos:</strong></td>
			</tr>
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Maldito.png" alt="Maldito" class="icono-personaje"><br> Maldito</td>
				<td style="border: 1px solid #b89b65; padding: 5px;" colspan="2"><img src="img/Enemigo - Cazarrecompensas.png" alt="Cazarrecompensas" class="icono-personaje"><br> Cazarrecompensas</td>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Momia.png" alt="Momia" class="icono-personaje"><br> Momia</td>
			</tr>
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Oficial.png" alt="Oficial" class="icono-personaje"><br> Oficial</td>
				<td style="border: 1px solid #b89b65; padding: 5px;" colspan="2"><img src="img/Casaca.png" alt="Casaca Roja" class="icono-personaje"><br> Casaca Roja</td>
				<td style="border: 1px solid #b89b65; padding: 5px;"><img src="img/Esqueleto.png" alt="Esqueleto" class="icono-personaje"><br> Esqueleto</td>
			</tr>
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigo perdido:</strong></td>
			</tr>
			<tr>
			  <td style="border: 1px solid #b89b65; padding: 5px;" colspan="4"><img src="img/Esqueleto.png" alt="Esqueleto" class="icono-personaje"><br> Esqueleto</td>
			</tr>
		</tbody>
	</table>
</center>
<br>
<strong>Preparación:</strong><br>
<img src="losetas/2/Cam 2 - Cap 4 - loseta v1-v4.png" class="imagen-loseta" onclick="mostrarPopupImagen(this.src)" style="cursor:pointer;">
<ul style="text-align: justify;">
	<li>Prepara las losetas <strong>v1</strong> y <strong>v4</strong> y colócalas como se muestran. Serán las losetas de Inicio. Todas las salidas de estas losetas se consideran bloqueadas. Coloca los Personajes en la zona verde.</li>
	<li>Coge los Marcadores de Loseta (ML) <strong>t1</strong> al <strong>t4</strong> y colócalos boca abajo y al azar en las zonas indicadas en las losetas iniciales.</li>
	<li>Un Personaje podrá voltear un ML si se encuentra en la misma habitación y realiza una acción de ‘Buscar’ con éxito.</li>
	<li>Coge los ML <strong>s1, s3 y s4</strong>, y del <strong>c2 al c6</strong>. Mézclalos y forma una pila con ellos.</li>
</ul>

<p style="text-align: center; margin-top: 20px;">
    Cuando comience la Fase de Aventura, los jugadores deben leer el Momento Narrativo:<br>
    <button class="boton-mn" onclick="cargarTexto('MN1595')">1595</button>
</p>
</div>
`);



