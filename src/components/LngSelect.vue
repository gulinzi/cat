<template>
    <div class="v-popover">
        <div class="trigger" style="display: inline-block;" @click="visible = !visible">
            <a href="javascript:;" class="item-locale">{{ curLan.label }}</a>
        </div>
        <div class="tooltip" v-show="visible">
            <div class="wrapper">
                <div class="tooltip-inner popover-inner" style="position: relative;">
                    <div>
                        <div class="locale-list">
                            <a
                                href="javascript:;"
                                v-for="item in lngList"
                                :key="item.value"
                                class="locale-item"
                                @click="handleSelect(item)"
                            >
                                <div classs="title">{{ item.label }}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const visible = ref(false);
const store = useStore();
const lngList = store.getters.languageList;
const curLan = computed(() => store.getters.curLan)
const handleSelect = (item) => {
    store.commit('SET_CUR_LAN', item);
    visible.value = false;
}

</script>

<style lang="less" scoped>
.trigger{
    margin-left:20px;
}
.item-locale {
    font-size: 16px;
    position: relative;
    padding-right: 24px;
    font-weight: 600;
    height: 58px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    &::after {
        content: " ";
        position: absolute;
        height: 0;
        width: 0;
        border-style: solid;
        border-left-width: 6px;
        border-right-width: 6px;
        border-bottom-width: 6px;
        border-top-width: 0;
        border-bottom-color: #7f7f7f;
        border-left-color: transparent;
        border-right-color: transparent;
        right: 0;
        top: 50%;
        transform: translateY(-50%) rotate(180deg);
        transform-origin: center;
        transition: transform 0.4s ease;
    }
}
.v-popover {
    position: relative;
}
.tooltip {
    position: absolute;
    top: 100%;
    right: 0px;
    background: #1b1b1b;
}
.locale-list {
    padding: 15px 12px;
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: space-between;
    width: 80px;
}
.locale-list .locale-item {
    margin: 8px 8px;
    min-width: 40%;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: #7f7f7f;
    transition: color 0.4s ease;
}
@media screen and (max-width: 960px) {
    .item-locale {
        font-size: 14px;
        padding-right: 18px;
        &::after {
            border-left-width: 5px;
            border-right-width: 5px;
            border-bottom-width: 5px;
        }
    }
}
</style>