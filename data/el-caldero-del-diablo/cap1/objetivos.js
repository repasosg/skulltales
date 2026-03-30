ChapterLoader.registerContent('objetivos', `
<div class="objetivos-container">
    <p style="margin-bottom: 10px;"><em>Selecciona un objetivo cumplido para averiguar la recompensa obtenida:</em></p>
    
    <select class="selector-pirata" onchange="window.mostrarRecompensaObjetivo(this)">
        <option value="" data-recompensa="">-- Elige un objetivo --</option>
        
        <option value="obj1" data-recompensa="10 <img src='variosimg/prestigio.png' class='icono-personaje2'> (Objeto)">
            Objetivo 1
        </option>
        
        <option value="obj2" data-recompensa="10 <img src='variosimg/prestigio.png' class='icono-personaje2'> (Objeto)">
            Objetivo 2
        </option>
        
        <option value="obj3" data-recompensa="10 <img src='variosimg/prestigio.png' class='icono-personaje2'> (Objeto)">
            Objetivo 3
        </option>
        
        <option value="obj4" data-recompensa="5 <img src='variosimg/prestigio.png' class='icono-personaje2'> + 30 <img src='variosimg/oro.png' class='icono-personaje2'> (Objeto)">
            Objetivo 4
        </option>
    </select>

    <div id="resultadoObjetivo" style="display:none; transition: opacity 0.3s;"></div>
</div>
`);
