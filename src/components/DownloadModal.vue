<template>
    <div class="trigger" @click="handleOpen">
        <slot></slot>
    </div>
    <teleport to="#app">
        <div class="canvas" :class="showAnimate ? 'animated' : ''" v-if="visible">
            <div class="container-1">
                <div class="download-dialog">
                    <a class="common-close" @click="handleClose"></a>
                    <div class="dialog-inner">
                        <div class="title">Download APP</div>
                        <div
                            class="brief"
                        >Use the wallet address to register and log in to play the game</div>
                        <div class="buttons">
                            <a
                                target="_blank"
                            >
                                <span class="icon-apk"></span>Android (APK)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const showAnimate = ref(false);
const handleOpen = () => {
    visible.value = true;
    setTimeout(() => {
        showAnimate.value = true
    }, 100)
}
const handleClose = () => {
    showAnimate.value = false;
    setTimeout(() => {
        visible.value = false
    }, 300)
}
</script>

<style lang="less" scoped>
.canvas {
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 201;
    position: fixed;
    background-color: transparent;
    transition: backround-color 0.2s ease;
    &.animated {
        background: rgba(0, 0, 0, 0.8);
        .container-1 {
            opacity: 1;
        }
    }
    .container-1 {
        position: absolute;
        top: 50%;
        left: 50%;
        box-sizing: border-box;
        color: #fff;
        opacity: 0;
        transform: translateX(-50%) translateY(-50%) scale(1);
        transition: transform 0.4s ease, opacity 0.4s ease;
    }
}
.download-dialog {
    position: relative;
    width: 510px;
    max-width: 510px;
    max-height: 327px;
    height: 327px;
    background-image: url(../assets/download-bg.png);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    display: flex;
    align-items: center;
}
.common-close {
    position: absolute;
    right: 20px;
    height: 14px;
    width: 14px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    text-indent: -999em;
}
.download-dialog .common-close {
    top: -30px;
    right: -36px;
    text-indent: 0;
    width: 26px;
    height: 26px;
    cursor: pointer;
}

.download-dialog .dialog-inner {
    padding: 15px 210px 25px 38px;
    font-weight: 600;
    color: #8a562a;
}
.download-dialog .title {
    font-size: 22px;
}

.download-dialog .brief {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.3;
}

.download-dialog .buttons {
    padding-top: 30px;
}
.download-dialog .buttons a {
    border: 2px solid #885327;
    border-radius: 12px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 196px;
    padding: 0 12px;
    box-sizing: border-box;
    height: 52px;
    color: #8a562a;
    box-shadow: inset 0 4px 0 #ffe08b;
    background-color: #fbc321;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.3s ease;
}
.download-dialog .buttons a span {
    width: 26px;
    height: 26px;
    margin-right: 12px;
}

.download-dialog .buttons a span.icon-apk {
    background-image: url(../assets/apk.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
}

@media screen and (max-width: 960px) {
    .canvas .container-1 {
        transform: translateX(-50%) translateY(-50%) scale(1);
    }
    .canvas.animated .container-1 {
        transform: translateX(-50%) translateY(-50%) scale(1);
    }
}

@media screen and (max-width: 540px) {
    .download-dialog {
        width: calc(100vw - 30px);
        height: calc(64.12vw - 19.236px);
    }
    .download-dialog .common-close {
        right: 6px;
        width: 20px;
        height: 20px;
    }
    .download-dialog .dialog-inner {
        padding: 15px 38vw 20px 25px;
    }
    .download-dialog .title {
        font-size: 18px;
    }
    .download-dialog .brief {
        font-size: 13px;
        margin-top: 10px;
    }
    .download-dialog .buttons {
        padding-top: 15px;
    }
    .download-dialog .buttons a {
        min-width: 140px;
        padding: 0 12px;
        height: 44px;
        -webkit-box-shadow: 0 3px 0 #ffe08b inset;
        box-shadow: inset 0 3px 0 #ffe08b;
        font-size: 13px;
    }
    .download-dialog .buttons a span {
        width: 18px;
        height: 18px;
        margin-right: 8px;
    }
}
</style>