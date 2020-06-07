const urlBase = "https://saraiva89.com/dev/api/amiibo/"
export default {
    async REQUEST_AMIIBOS(context, payload) {
        context.commit('SET_CARREGANDO', true)
        await fetch(urlBase + payload)
            .then(response => response.json())
            .then(json => {
                const retorno = json.amiibo.sort(function (a, b) {
                    var dateA = new Date(a.release.jp),
                        dateB = new Date(b.release.jp);
                    return dateA - dateB;
                });
                context.commit('SET_CARREGANDO', false)
                context.commit('SET_LISTAGEM_AMIIBOS', retorno)
            })
            .catch(err => console.error(err));
    },

    async REQUEST_TIPOS(context, payload) {
        // context.commit('SET_CARREGANDO', true)
        await fetch(urlBase + payload)
            .then(response => response.json())
            .then(json => {
                context.commit('SET_TIPOS', json.amiibo)
                // context.commit('SET_CARREGANDO', false)
            })
            .catch(err => console.error(err));
    },

    async REQUEST_GAMES_SERIE(context, payload) {
        // context.commit('SET_CARREGANDO', true)
        await fetch(urlBase + payload)
            .then(response => response.json())
            .then(json => {
                context.commit('SET_GAMES_SERIE', json.amiibo)
                // context.commit('SET_CARREGANDO', false)
            })
            .catch(err => console.error(err));
    },

}