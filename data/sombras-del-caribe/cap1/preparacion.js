ChapterLoader.registerContent('preparacion', `
<div class="instrucciones">
<center>
	<img src="img/aventura.png" alt="Aventura">
	<div class="objetivo"><strong>Objetivo: </strong>Conseguir el diario y escapar de la isla.</div>
	<table style="width: 90%; border-collapse: collapse; margin-top: 10px;">
		<tbody>
			<!-- Fila 1: Tipos de Loseta y Bandera -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Losetas y Bandera:</strong></td>
			</tr>
			<tr>
			  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>Tipos de loseta:</strong></td>
			  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;">Isla</td>
			  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong><img src="img/bpirata.png" alt="Bandera Pirata" class="icono-personaje"></strong></td>
			  <td style="border: 1px solid #b89b65; padding: 5px; width: 25%;"><strong>18</strong></td>
			</tr>
			<!-- Fila 2: Cabecera Enemigos (Oscura) -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigos:</strong></td>
			</tr>
			<!-- Fila 3: Enemigos (2 columnas para 2 enemigos) -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px;" colspan="2">
					<img src="img/Casaca.png" alt="Casaca Roja" class="icono-personaje"> Casaca Roja
				</td>
				<td style="border: 1px solid #b89b65; padding: 5px;" colspan="2">
					<img src="img/Oficial.png" alt="Oficial" class="icono-personaje"> Oficial
				</td>
			</tr>
			<!-- Fila 4: Cabecera Enemigo Perdido (Oscura) -->
			<tr>
				<td style="border: 1px solid #b89b65; padding: 5px; background-color: #5c3d1a; color: #fff;" colspan="4"><strong>Enemigo perdido:</strong></td>
			</tr>
			<!-- Fila 5: Enemigo Perdido -->
			<tr>
			  <td style="border: 1px solid #b89b65; padding: 5px;" colspan="4"><img src="img/Casaca.png" alt="Casaca Roja" class="icono-personaje"> Casaca Roja</td>
			</tr>
		  </tbody>
	</table>
</center>
<strong>Preparación:</strong><br>
Coge los <strong>Marcadores de Loseta de i1 hasta i9</strong> y separa los de <strong>i4, i5, i7</strong>. Toma 3 marcadores de Loseta al azar del montón anterior, y mézclalos con el <strong>Marcador de Loseta i5</strong> para crear la pila para <strong>Explorar.</strong><br>
Prepara las <strong>Losetas i7 y i13</strong>. Serán las losetas de inicio.<br>
Coloca los personajes dentro de la barca de la <strong>Loseta i7</strong>, aquí comienza tu aventura.<br>
<center><img src="losetas/Cap 1 - loseta i7-i13.png" alt="Loseta" class="imagen-loseta2"></center>
</div>`);

