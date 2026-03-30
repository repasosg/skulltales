/**
 * auth.js - Sistema de Registro y Persistencia (LocalStorage)
 * Gestiona PJs y Aventuras del usuario.
 */

const STORAGE_KEY_PJS = 'skull_tales_pjs';
const STORAGE_KEY_ADVENTURES = 'skull_tales_adventures';

const Auth = {
    // --- Gestión de Personajes (PJs) ---
    getPjs: function () {
        const pjs = localStorage.getItem(STORAGE_KEY_PJS);
        return pjs ? JSON.parse(pjs) : [];
    },

    savePj: function (pj) {
        const pjs = this.getPjs();
        // Si tiene ID, actualizamos. Si no, creamos nuevo.
        if (pj.id) {
            const index = pjs.findIndex(p => p.id === pj.id);
            if (index !== -1) {
                pjs[index] = pj;
            } else {
                pjs.push(pj);
            }
        } else {
            pj.id = Date.now().toString(); // ID simple basado en timestamp
            pjs.push(pj);
        }
        localStorage.setItem(STORAGE_KEY_PJS, JSON.stringify(pjs));
        return pj;
    },

    deletePj: function (id) {
        let pjs = this.getPjs();
        pjs = pjs.filter(p => p.id !== id);
        localStorage.setItem(STORAGE_KEY_PJS, JSON.stringify(pjs));
    },

    // --- Gestión de Aventuras (Estado de Partida) ---
    getAdventures: function () {
        const advs = localStorage.getItem(STORAGE_KEY_ADVENTURES);
        return advs ? JSON.parse(advs) : [];
    },

    saveAdventure: function (adventure) {
        const advs = this.getAdventures();
        if (adventure.id) {
            const index = advs.findIndex(a => a.id === adventure.id);
            if (index !== -1) {
                advs[index] = adventure;
            } else {
                advs.push(adventure);
            }
        } else {
            adventure.id = Date.now().toString();
            advs.push(adventure);
        }
        localStorage.setItem(STORAGE_KEY_ADVENTURES, JSON.stringify(advs));
        return adventure;
    },

    deleteAdventure: function (id) {
        let advs = this.getAdventures();
        advs = advs.filter(a => a.id !== id);
        localStorage.setItem(STORAGE_KEY_ADVENTURES, JSON.stringify(advs));
    },

    // --- Exportar / Importar ---
    exportData: function () {
        const data = {
            pjs: this.getPjs(),
            adventures: this.getAdventures(),
            timestamp: new Date().toISOString()
        };
        return JSON.stringify(data, null, 2);
    },

    importData: function (jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (data.pjs) localStorage.setItem(STORAGE_KEY_PJS, JSON.stringify(data.pjs));
            if (data.adventures) localStorage.setItem(STORAGE_KEY_ADVENTURES, JSON.stringify(data.adventures));
            return true;
        } catch (e) {
            console.error("Error importando datos:", e);
            return false;
        }
    }
};

// Exponer globalmente si es necesario para uso rápido en HTML
window.Auth = Auth;
