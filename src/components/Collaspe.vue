<template>
    <div class="collaspe">
        <a href="javascript:;" class="menu-icon" @click="handleOpen">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="#fff"
                    d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                />
            </svg>
        </a>
        <teleport to="body">
            <div
                class="common-aside-widget common-aside-right"
                :class="animateShow ? 'animate-show' : ''"
                v-if="visible"
            >
                <div class="content-view" style="width: 68%;">
                    <a class="button-close">
                        <span href="javascript:;" class="common-close" @click="handleClose"></span>
                    </a>
                    <div class="menus">
                        <div class="menu-item">
                            <a
                                href="/"
                                aria-current="page"
                                class="router-link-exact-active router-link-active"
                            >Home</a>
                        </div>
                        <div class="menu-item">
                            <download-modal>
                                <a href="javascript:;">
                                    Live
                                    <span class="item-arrow item-arrow-new"></span>
                                </a>
                            </download-modal>
                        </div>
                        <div class="menu-item">
                            <a href target="_blank">
                                Marketplace
                                <span class="item-arrow item-arrow-hot"></span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a href="https://dd.ddlive.me/" target="_blank">Studio</a>
                        </div>
                        <div class="menu-item">
                            <a target="_blank">DAO</a>
                        </div>
                        <div class="menu-item">
                            <a
                                href="https://dd-live.oss-cn-shanghai.aliyuncs.com/v17/file/DDmetaDeck.pdf"
                                target="_blank"
                            >DOCS</a>
                        </div>
                    </div>
                    <!-- <div class="buttons">
                        <a href class="common-button button-primary button-42">My Cat</a>
                    </div>-->
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import DownloadModal from './DownloadModal';
const visible = ref(false)
const animateShow = ref(false);

const handleOpen = () => {
    visible.value = true;
    setTimeout(() => {
        animateShow.value = true
    }, 200)
}

const handleClose = () => {
    animateShow.value = false;
    setTimeout(() => {
        visible.value = false
    }, 200)
}
</script>

<style lang="less" scoped>
.collaspe {
    display: none;
}
@media screen and (max-width: 960px) {
    .collaspe {
        display: block;
    }
}
.menu-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
}
.menu-icon svg {
    width: 68%;
}
.common-aside-widget.animate-show {
    background-color: rgba(0, 0, 0, 0.6);
}
.common-aside-widget {
    position: fixed;
    z-index: 128;
    background-color: transparent;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: background-color 0.4s ease;
}
.common-aside-widget.animate-show .content-view {
    transform: translateX(0);
}
.common-aside-widget .content-view {
    height: 100%;
    width: 78%;
    right: 0;
    background: rgba(0, 0, 0, 0.78);
    position: absolute;
    transition: transform 0.3s ease;
    transform: translateX(100%);
}
.button-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 68px;
    height: 68px;
}
.menus {
    padding: 86px 20px 20px 52px;
}
.menus .menu-item {
    padding: 16px 0;
}
.menus a {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    transition: color 0.4s ease;
}
.menus a .item-arrow {
    width: 18px;
    height: 18px;
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    display: block;
    margin-left: 8px;
}
.menus a .item-arrow-new {
    width: 40px;
    height: 18px;
    background-image: url(../assets/new.png);
}
.menus a .item-arrow-hot {
    background-image: url(../assets/hot.png);
}
.buttons {
    text-align: center;
    padding: 0 52px;
    position: absolute;
    bottom: 30px;
    left: 0;
    width: 100%;
}
.buttons,
.buttons a {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>
