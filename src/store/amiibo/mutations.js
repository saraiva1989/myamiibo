const SET_LISTAGEM_AMIIBOS = (state, payload) => {
    state.GET_LISTAGEM_AMIIBOS = payload
}
const SET_CARREGANDO = (state, payload) => {
    state.GET_CARREGANDO = payload
}

export default {
    SET_LISTAGEM_AMIIBOS,
    SET_CARREGANDO
}