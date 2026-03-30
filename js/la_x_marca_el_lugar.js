const textos = {
MN1: `*El sol se cuela proyectando largas sombras de todo lo que os rodea. Un extraño silencio es lo único que os recibe cuando avanzáis, apartando la vegetación que crece sin control en esta zona de la isla como si fuera alimentada por algún abono especial.*

*En la mitad de un claro que se abre a vuestro paso veis un cofre viejo cargado de cadenas. Una de ellas, especialmente fuerte, une todas al suelo a través de un candado de plata y otra se enreda y se pierde entre los árboles, uniéndose al cofre por un candado de bronce.*

*Parece que sin las llaves que abren esos candados no será posible hacerse con el cofre.*

*Alrededor de él, veis lo que claramente son antiguas tumbas, tal vez quienes trajeron aquí este tesoro, ahora cubiertas por completo por hierbas y flores, marcadas cada una con un letrero donde intuís que aparecería el nombre de quien ahora yace para siempre bajo tierra.*
--
<center><div class="acciones">
  Si tenéis la llave de bronce <strong>(Objetivo 2)</strong>  <button onclick="cargarTexto('MN5')">MN 5</button>
  Si tenéis la llave de plata <strong>(Objetivo 1)</strong>  <button onclick="cargarTexto('MN3')">MN 3</button><br>
  <img src="losetas/x_loseta12.jpg" width="100%" style="vertical-align: middle;">
</div></center>`,

MN2: `*En mitad del claro, el brillo del agua llama vuestra atención, y más aún algo que brilla con fuerza en el fondo de la charca. Pero no estáis solos: dos criaturas de aspecto simiesco, pero con elegantes restos de pantalones marineros parecen estar disfrutando de un baño relajante. Al veros, llegar gruñen con ferocidad y agarran las toscas armas que tenían a su lado para cargar contra vosotros.*
--
Si derrotáis a las criaturas, podéis intentar recuperar ese objeto brillante del fondo del agua. Quien desee intentarlo debe gastar 2 <img src="variosimg/Acciones.png" width=36 style="vertical-align: middle;"> y realizar una tirada de 5 <img src="variosimg/Fuerza.png" width=36 style="vertical-align: middle;">.
El primero en conseguir <img src="variosimg/exito.png" width=36 style="vertical-align: middle;"> anota que ha logrado el <strong>(Objetivo 1)</strong> (una brillante llave de plata).
<strong>Nota:</strong> recuerda que en casillas con agua el movimiento se considera por zona difícil.
Al haber Enemigos presentes no se hará tirada de Aparición de Enemigos.<br>
<img src="losetas/x_loseta8.jpg" width="100%" style="vertical-align: middle;">`,


MN3: `*Metéis la llave de plata en el candado y gira fácilmente. Cuando el candado se abre, cae al suelo, y de forma extraña desaparece en el suelo. En ese momento, un retumbar surge de las tumbas que hay a vuestro alrededor como si sus ocupantes protestaran… pero claro… eso es imposible y sólo en los cuentos de niños existen tales criaturas del averno. Por si acaso levantáis los pies para aseguraros que no estáis pisando ninguna tumba por error.*
--
Si los Personajes han abierto los dos candados <button onclick="cargarTexto('MN10')">MN 10</button>`,

MN4: `*Casi todo el claro está lleno de raíces. Varias plantas de colores brillantes crecen entre sus nudos y un aroma dulzón y agradable llena el aire. Respiráis agradecidos algo que os llena los pulmones y que parece revitalizar vuestros sentidos.*
--
Haz una tirada normal de <strong>aparición de Enemigos</strong>. 
Mientras estéis en esta Loseta podéis repetir uno de vuestros dados lanzados en cada turno. 
Al acabar el turno, si hay un Personaje en la Loseta, <strong>avanza en 1 <img src="variosimg/banderapirata.png" width=36 style="vertical-align: middle;"></strong>.`,

MN5: `*Metéis la llave de bronce en el candado y gira fácilmente, como si hubiera sido engrasado ese mismo día. Las cadenas se liberan con un chasquido y empiezan a agitarse a vuestro alrededor, convirtiéndose en objetos peligrosos que hacen tumbar los troncos más pequeños y que parecen intentar golpearos mientras se recogen y desaparecen en la espesura.*
--
Cada Personaje debe superar una prueba de 4 <img src="variosimg/Agilidad.png" width=36 style="vertical-align: middle;"> o sufrir 1 <img src="variosimg/Herida.png" width=36 style="vertical-align: middle;">`,


MN6: `* *
--
Pon un marcador de <strong>Sin Salida</strong> en las 3 Salidas de la Loseta. (Deja sin marcador la casilla por la que has entrado y bloquea el resto).
Pon un marcador de <strong>tesoro</strong> en la casilla central. (Puedes usar una gema o cualquier otro marcador).
Realiza una tirada normal de <strong>Aparición de Enemigos</strong>. Cuando no queden Enemigos sobre la Loseta, puedes seguir leyendo.
Cuando un Personaje esté <strong>adyacente al marcador de tesoro</strong> lee lo siguiente:
--
*Frente a ti, ves un cofre abierto de gran tamaño, y en su interior diferentes tipos de cuchillas, púas y objetos afilados. En el fondo, sobre un plato de madera, una llave de bronce. Al meter la mano lentamente para agarrar la llave, todo el interior del cofre comienza a moverse y apartas rápidamente tus dedos antes de que algo los corte.*
*A la vez, un sonido de roca moviéndose hace que os giréis y empezáis a ver cómo se elevan las rocas que cerraban las salidas. Más allá, unos sonidos guturales hacen que un escalofrío os recorra la espalda, imaginando qué criaturas pueden entrar cuando esas rocas se levanten.*
--
El Personaje que quiera coger la llave debe pasar una tirara de 3 <img src="variosimg/Agilidad.png" width=36 style="vertical-align: middle;"> y 3 <img src="variosimg/Percepcion.png" width=36 style="vertical-align: middle;">
<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
	<tr>
		<td style="border: 1px solid #b89b65;" width="80">
			<img src="variosimg/fallo.png" width=36 style="vertical-align: middle;"><img src="variosimg/fallo.png" width=36 style="vertical-align: middle;">
		</td>
		<td style="border: 1px solid #b89b65;">
		Recibe 1 <img src="variosimg/Herida.png" width=36 style="vertical-align: middle;"> y una de las salidas queda abierta (elige al azar y elimina el marcador de Sin Salida). Pon un <img src="img/Maldito.png" alt="Maldito" class="icono-personaje"> en la casilla donde estaba el marcador de Sin Salida, avanza en <strong>1 la <img src="variosimg/banderapirata.png" width=36 style="vertical-align: middle;"></strong>. El <img src="img/Maldito.png" alt="Maldito" class="icono-personaje"> actúa inmediatamente.
		</td>
	</tr>
	<tr>
		<td style="border: 1px solid #b89b65;" width="80">
			<img src="variosimg/fallo.png" width=36 style="vertical-align: middle;"><img src="variosimg/exito.png" width=36 style="vertical-align: middle;">
		</td>
		<td style="border: 1px solid #b89b65;">
		Recibe 1 <img src="variosimg/Herida.png" width=36 style="vertical-align: middle;">
		</td>
	</tr>
	<tr>
		<td style="border: 1px solid #b89b65;" width="80">
			<img src="variosimg/exito.png" width=36 style="vertical-align: middle;"><img src="variosimg/fallo.png" width=36 style="vertical-align: middle;">
		</td>
		<td style="border: 1px solid #b89b65;">
		Una de las salidas queda abierta (elige al azar y elimina el marcador de Sin Salida). Pon un <img src="img/Maldito.png" alt="Maldito" class="icono-personaje"> en la casilla donde estaba el marcador de Sin Salida, avanza en <strong>1 la <img src="variosimg/banderapirata.png" width=36 style="vertical-align: middle;"></strong>. El <img src="img/Maldito.png" alt="Maldito" class="icono-personaje"> actúa inmediatamente.
		</td>
	</tr>
	<tr>
		<td style="border: 1px solid #b89b65;" width="80">
			<img src="variosimg/exito.png" width=36 style="vertical-align: middle;"><img src="variosimg/exito.png" width=36 style="vertical-align: middle;">
		</td>
		<td style="border: 1px solid #b89b65;">
		Recibe el <strong>Objetivo 2</strong> (una llave de bronce) y elimina los marcadores de <strong>Sin Salida</strong> que queden sobre la loseta y 2 <img src="variosimg/prestigio.png" width=36 style="vertical-align: middle;">.
		
		</td>
	</tr>
</table>
Si en algún momento se hubieran eliminado los 3 marcadores de <strong>Sin Salida</strong> y fuera necesario eliminar alguno adicional, ignora esa frase y ubica <strong>2 <img src="img/Maldito.png" alt="Maldito" class="icono-personaje"></strong> (en vez de 1) en dos de las salidas. (uno en cada una).
<img src="losetas/x_loseta13.jpg" width="100%" style="vertical-align: middle;">`,


MN7: `*El viento parece haberse apoderado de este rincón de la isla, las copas de las palmeras se agitan con violencia y se llegan a oír chasquidos de algunas de las ramas haciendo que de vez en cuando os azoten hojas sueltas que terminan cayendo por un gran abismo que se abre ante vosotros. Para vuestra sorpresa dos indígenas os miran desde el otro lado del abismo tan sorprendidos de veros aquí como vosotros de verlos a ellos y antes de que podáis hacer o decir nada desaparecen en la espesura.*
--
<strong>Nota:</strong> en esta Loseta <strong>no aparece ningún enemigo</strong> (ignora la tirada de aparición de enemigos salvo por cartas de Eventos)
En la siguiente Loseta, <strong>añade</strong> al resultado de aparición de Enemigos <strong>1 <img src="img/Canibal.png" alt="Canibal" class="icono-personaje"></strong>.
Recuerda que <strong>Saltar</strong> consume <img src="variosimg/Acciones.png" width=36 style="vertical-align: middle;"> adicionales al Movimiento en los Piratas, pero no se cuenta como Acción para los personajes sino parte de su Acción de Movimiento.`,

MN8: `*Por fin lográis descubrir una isla cuya descripción coincide con lo que asegura haber escuchado el grumete. La travesía no ha sido fácil pero tampoco tan complicada como la cuentan viejos marinos cuando sueltan sus batallitas en la Taberna de Tortuga. Ahora pensáis que los rumores sobre grandes seres, barcos malditos o incluso galeones españoles no son más que patrañas para engañar a los novatos, pero no a vosotros, auténticos piratas.*
*Descendéis del barco y a fuerza de remos navegáis sobre las tranquilas aguas de la bahía hasta que la quilla de la barca roza la arena de la playa. ¡Comienza de verdad vuestra Aventura!*
--
<div class="acciones" align="center">
<button onclick="cargarTexto('MN9')">MN 9</button>
</div>`,


MN9: `*Saltáis a la playa después de dejar que la barca llegue mansamente hasta la arena. Hace un sol agradable y la brisa del mar os llena los pulmones de aire limpio y refrescante, unos pocos cangrejos se alejan de vosotros después de que hayáis estropeado su momento de descanso. Ciertamente la vida pirata es la vida mejor.*
*Al final de la playa veis un cartel desvencijado con una calavera sobre él, alguien ha escrito algo, pero el paso del tiempo lo ha borrado. Lo curioso es que parece que hay sangre fresca a sus pies… *
--
Busca el marcador de <strong>Loseta i12</strong> y déjalo aparte.

Busca la <strong>Loseta i7</strong>, que será la Loseta inicial. Los personajes comienzan dentro de la barca.

Coge los Marcadores de <strong>Loseta i2, i5, i8, i9, i13, i12, i15 e i16</strong>, y mézclalos. Coge tres de ellos al azar y el marcador de <strong>Loseta i12</strong>, y mézclalos para formar un montón. Coloca el resto de marcadores (siempre bocabajo) al azar sobre ese montón.

De esta forma, lo <strong>Loseta i12</strong> será una de las cuatro últimas, pero no sabrás en qué posición está.
<hr>Coloca a los personajes dentro de la Barca. 
No hagas tirada de Aparición de Enemigos. 

<img src="losetas/x_loseta7.jpg" width="100%" style="vertical-align: middle;"><br>

Si al final del turno hay algún Personaje en esta Loseta haz avanzar la <img src="variosimg/banderapirata.png" width=36 style="vertical-align: middle;">.
<strong>Nota:</strong> en esta Loseta no es posible realizar ningún tipo de Búsqueda.

`,


MN10: `*Cuando la última de las cadenas cae al suelo podéis al fin acceder al cofre. Es grande, pesado, con las esquinas reforzadas de metal. Un cofre pirata.
Hay codazos para ver quien es el primero que abre la tapa pero antes de que podáis llegar a hacerlo el ruido de tierra removida os da una pista de lo que está a punto de suceder, asomáis la cabeza por encima del cofre y veis cómo varias figuras esqueléticas surgen de las viejas tumbas y parecen enfadadas por haber acabado con su eterno descanso.*
--
Coloca <strong>1 <img src="img/Esqueleto.png" alt="Esqueleto" class="icono-personaje"></strong> en las casillas marcadas con una X. Estos Esqueletos NO dejan <strong>Marcador de Enemigo Caído</strong> y no resucitan, una vez que se acaba con sus puntos de vida desaparecen para siempre.
<img src="losetas/x_loseta12.jpg" width="100%" style="vertical-align: middle;">
Si los Personajes consiguen vencer a todos los Enemigos sigue leyendo.
--
*Una vez que habéis devuelto a la tierra los cuerpos que acaban de surgir volvéis de nuevo todo vuestro interés hacia el cofre. Ese cofre Pirata. Con ansía levantáis la tapa esperando las montañas de oro y joyas que seguro guarda, dinero suficiente para tener vuestros propios barcos.*
*Y ahí está el tesoro soñado… espera... ¿es eso la cabeza de un pollo de goma mordisqueado? ¿y eso otro una sartén sin mango? ¿un saquito de pelo de mono? ¿un collar de pluma de loro? ¿Pero qué tipo de broma es ésta?*
*¡Entre todas esas cosas veis un trozo de papel doblado con el sello de la hermandad pirata y al abrirlo tan solo unas pocas palabras!: Jajaja! ¡Bienvenidos a la vida pirata, la vida mejor! Corre a cargo de la Hermandad la primera ronda en la Mansión… si podéis pagar la entrada.*
--
La Aventura finaliza con Éxito y no es necesario volver hasta la playa, ya no hay prisa y tampoco es que tengáis muchas ganas de saber cuántas risas provocará vuestra llegada a Tortuga.`,

MN11: `*La Isla se parece mucho a la descripción que dio el grumete, pero… algo no os cuadra. La montaña central es demasiado plana y no hay una bahía recogida donde anclar el barco… no, esta no es la isla que buscáis, pero quizá sea un buen momento para cambiar el agua de la bodega y conseguir algo de comida fresca. Descubrís con alegría que los frutos casi caen en vuestras manos directamente y que hay varias fuentes de agua fresca donde recoger toda la que podáis almacenar.*
--
Puedes hacer una <strong>Exploración de Isla con +1 al Dado.</strong> Siempre que hagas una Exploración de Isla en esta misma Isla a lo largo de la Campaña podrás seguir aplicando ese +1 al dado hasta que salga un resultado de 1 en el Dado, que perderás esa ventaja de forma definitiva.`,

  Exito: `
  <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
  <thead>
    <tr>
      <th style="border: 1px solid #b89b65; padding: 8px;">Éxito</th>
      <th style="border: 1px solid #b89b65; padding: 8px;">Recompensa</th>
</tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">Cada personaje que ha completado la aventura con éxito</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">5 <img src="variosimg/prestigio.png" class="icono-personaje2"> y 7 <img src="variosimg/oro.png" class="icono-personaje2"></td>
    </tr>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">Tu Pirata no ha completado la Aventura con éxito, pero otros sí.</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">Puedes seguir jugando</td>
    </tr>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">Los Piratas no han completado la aventura con éxito, pero han conseguido el Objetivo 1 o 2</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">Habéis perdido la oportunidad. No podéis repetir la aventura.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">No habéis conseguido ningún objetivo</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">Podéis repetir la aventura, pero no podrán conseguir estas recompensas. </td>
    </tr>
	</tbody>
</table>

<center><table style="width: 70%; border-collapse: collapse; margin-top: 10px;">
  <thead>
    <tr>
      <th style="border: 1px solid #b89b65; padding: 8px;" colspan="3">Objetivos</th>
</tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">Objetivo 1</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">Objeto</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">5 <img src="variosimg/prestigio.png" class="icono-personaje2"></td>
    </tr>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">Objetivo 2</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">Objeto</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">5 <img src="variosimg/prestigio.png" class="icono-personaje2"></td>
    </tr>
  </tbody>
</table></center>`,

  Enemigos: `
<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
  <thead>
    <tr>
      <th style="border: 1px solid #b89b65; padding: 8px;" colspan="4">Aparición de Enemigos</th>
</tr>
    <tr>
      <th style="border: 1px solid #b89b65; padding: 8px;">Tirada</th>
      <th style="border: 1px solid #b89b65; padding: 8px;">Exteriores</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">5-6</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">2 Caníbales y 1 Maldito</td>
    </tr>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">3-4</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">2 Caníbales</td>
    </tr>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">1-2</td>
      <td style="border: 1px solid #b89b65; padding: 8px;">1 Caníbal</td>
    </tr>
	</tbody>
</table>`,




intro: `*El viento agita las velas con fuerza mientras miráis hacia atrás para comprobar cómo el puerto de Tortuga se hace cada vez más pequeño y no os parece que haya otras velas que os sigan cuando la última casa del puerto acaba desapareciendo en el horizonte.*
*La conversación que, a escondidas, ha escuchado vuestro grumete es demasiado suculenta como para ignorarla y ahora partís rumbo a las cálidas aguas del Caribe en busca de fortuna. Por lo que comentaba un viejo marino, con pata de palo y parche en el ojo, en una isla no muy lejana se habían dejado el botín de muchos años de rapiña y bandidaje, pero para vuestra desgracia el grumete no es muy ducho en diferenciar proa y popa y ahora no sabéis muy bien a qué isla dirigiros pues la descripción que os ha dado vale tanto para ir hacia el sol naciente como hacia poniente.*
*No creéis ser los únicos interesados en recuperar ese botín, pero si parece que habéis sido los más rápidos en haceros a la mar y eso que sois todos unos piratas novatos que apenas han tenido ocasión de mostrar la valía al Capitán Jones y el resto de los jefes piratas.*
*Debéis encontrar cuanto antes esa isla donde os esperan grandes riquezas y la fama de una carrera que recién empieza pero que tras este descubrimiento os llevará rápidamente a los puestos donde se toman las decisiones en Tortuga.*
*<strong>Travesía:</strong> Por culpa del grumete ahora no sabéis exactamente dónde ir, por suerte parece que sólo dos islas son los objetivos posibles.*
--
<center><div class="objetivo"><strong>OBJETIVO:</strong> Recuperar el Tesoro Pirata y lograr fama y fortuna sin igual.</div></center>
Busca los <strong>marcadores 1 y 2</strong> y colócalos boca abajo sin mirar cual es cada uno en las islas <strong>A y T</strong>. Sigue las reglas normales de la <strong>Fase de Travesía</strong> con las siguientes modificaciones:
a) Ignora todos los eventos de <strong>barcos y criaturas enemigas</strong>. Cuando robes una carta de evento que incluya cualquiera de esos sucesos, descártala y será un turno <strong>sin eventos</strong>.
b) Aumenta en 1 cualquier pérdida de <strong>Moral</strong> (Ej: Si un evento te hace perder 2 puntos de <strong>Moral</strong>, en su lugar perderías 3 puntos de <strong>Moral</strong>).
<div align="center">
<table style="width: 60%; border-collapse: collapse; margin-top: 10px;">
  <tbody>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">Si descubres el Objetivo 2</td>
      <td style="border: 1px solid #b89b65; padding: 8px;"><button onclick="cargarTexto('MN11')">MN 11</button></td>
    </tr>
    <tr>
      <td style="border: 1px solid #b89b65; padding: 8px;">Si descubres el Objetivo 1</td>
      <td style="border: 1px solid #b89b65; padding: 8px;"><button onclick="cargarTexto('MN8')">MN 8</button></td>
    </tr>
	</tbody>
</table>
</div>`
}


function cargarTexto(nombre) {
  const contenedor = document.getElementById("texto");
  contenedor.style.opacity = 0;

  setTimeout(() => {
    const textoBruto = textos[nombre] || "Texto no encontrado.";
    const bloques = textoBruto.split("\n--\n");

    let html = "";
    bloques.forEach((bloque, i) => {
      const tipo = i % 2 === 0 ? "narrativa" : "instrucciones";
      if (tipo === "narrativa") {
        html += bloque.replace(/\*([^*]+)\*/g, (_, contenido) => {
          return `<p class="narrativa"><em>${contenido.trim()}</em></p>`;
        });
      } else {
        html += `<div class="instrucciones">${bloque.trim()}</div>`;
      }
    });

    contenedor.innerHTML = html;
	
	
	  // Marcar el botón activo
  document.querySelectorAll("button").forEach(btn => btn.classList.remove("activo"));
  const botones = document.querySelectorAll("button");
  botones.forEach(btn => {
    if (btn.getAttribute("onclick") === `cargarTexto('${nombre}')`) {
      btn.classList.add("activo");
    }
  });
    contenedor.style.opacity = 1;
  }, 250); // Delay para permitir el fade-out
}
