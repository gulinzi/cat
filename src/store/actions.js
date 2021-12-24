const actions = {
    initLng({ commit, dispatch }) {
        const curLan = localStorage.getItem('CUR_LAN') ? JSON.parse(localStorage.getItem('CUR_LAN')) : '';
        if (curLan) {
            commit('SET_CUR_LAN', curLan)
        }
    }
}
export default actions