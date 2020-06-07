const SET_LISTAGEM_AMIIBOS = (state, payload) => {
    state.GET_LISTAGEM_AMIIBOS = payload
}
const SET_CARREGANDO = (state, payload) => {
    state.GET_CARREGANDO = payload
}
const SET_TIPOS = (state, payload) => {
    state.GET_TIPOS = payload
}
const SET_GAMES_SERIE = (state, payload) => {
    state.GET_GAMES_SERIE = payload
}

export default {
    SET_LISTAGEM_AMIIBOS,
    SET_CARREGANDO,
    SET_TIPOS,
    SET_GAMES_SERIE
}