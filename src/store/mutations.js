const mutations = {
    SET_CUR_LAN(state, payload) {
        state.curLan = payload;
        localStorage.setItem('CUR_LAN', JSON.stringify(payload))
    }
}
export default mutations