<template>
    <section class="section-item section-token">
        <div class="normal-layout section-content">
            <div class="token-infos frcc">
                <div class="left-info">
                    <div class="item-title">DDMETA TOKEN</div>
                    <div class="item-brief">{{localeData['token.desc']}}</div>
                    <div class="item-contract">
                        Contract
                        <div>0x5b1baec64af6dc54e6e04349315919129a6d3c23</div>
                        <img src="../../assets/token-model-banner.png" />
                    </div>
                    <div class="buttons">
                        <a
                            target="_blank"
                            href
                            class="common-button button-42 button-second"
                        >{{localeData['token.btn']}}</a>
                    </div>
                </div>
                <div class="right-chart">
                    <img src="../../assets/token-model.png" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import useLocale from '@/hooks/useLocale'
const localeData=useLocale()
</script>

<style lang="less" scoped>
@import "./index.less";
.section-token {
    background: linear-gradient(180deg, #303030, #1b1b1b);
    .section-content {
        padding: 88px 0 22px;
    }
}
.left-info {
    flex: 1;
    padding-right: 120px;
    .item-title {
        font-size: 30px;
        font-weight: 600;
        color: #64c832;
    }
    .item-brief {
        font-size: 14px;
        font-weight: 400;
        padding-right: 80px;
        margin-top: 28px;
        color: hsla(0, 0%, 100%, 0.6);
    }
    .item-contract {
        margin-top: 20px;
        background: #000;
        border-radius: 16px;
        border: 1px solid #3c3c3c;
        font-weight: 600;
        font-size: 16px;
        padding: 20px 28px 24px 28px;
        position: relative;
    }
    .item-contract div {
        margin-top: 5px;
        font-weight: 400;
        font-size: 14px;
    }
    .item-contract img {
        position: absolute;
        width: 220px;
        right: -25%;
        top: -80px;
    }
    .buttons {
        padding-top: 30px;
        padding-bottom: 30px;
        a {
            display: inline-flex;
        }
    }
}
.right-chart {
    width: 575px;
    margin-left: 25px;
}
@media screen and (max-width: 960px) {
    .section-token {
        overflow: hidden;
    }
    .section-token .section-content {
        padding: 60px 20px 20px;
    }
    .section-token .token-infos {
        flex-direction: column;
    }
    .section-token .token-infos .left-info {
        padding-right: 0;
    }
    .section-token .token-infos .left-info .item-brief {
        padding-right: 0;
        margin-top: 15px;
    }
    .section-token .token-infos .left-info .item-contract {
        word-break: break-all;
        margin-top: 40px;
        margin-right: 40px;
        padding: 20px 26% 20px 20px;
    }
    .section-token .token-infos .left-info .item-contract img {
        right: -66px;
        width: 160px;
        top: -32px;
    }
    .section-token .token-infos .left-info .buttons {
        padding: 20px 2px 40px;
    }
    .section-token .token-infos .right-chart {
        width: unset;
        margin-left: unset;
        padding: 5px;
    }
}
</style>