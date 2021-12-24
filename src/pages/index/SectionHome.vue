<template>
    <section class="section-item section-home">
        <div class="normal-layout section-content frsc">
            <div class="content-left">
                <div class="title">{{ localeData['home.title'] }}</div>
                <div class="buttons frsc">
                    <a
                        href="https://dd.ddlive.me"
                        target="_blank"
                        class="common-button button-42 button-second"
                    >{{ localeData['home.button1'] }}</a>
                    <a class="common-button button-42 button-outline">{{ localeData['home.button2'] }}</a>
                </div>
            </div>
            <div class="content-right">
                <!-- <video
                    playsinline
                    autoplay="autoplay"
                    loop="loop"
                    poster="../../assets/video-poster.jpg"
                    muted="muted"
                >
                    <source src="../../assets/home-video.mp4" type="video/mp4" />
                </video>-->
                <img src="../../assets/home-gif.gif" alt />
            </div>
        </div>
        <div class="socials">
            <div class="normal-layout">
                <div class="social-list frsc">
                    <a class="frcc" href="https://twitter.com/DDLive_meta" target="_blank">
                        <img src="../../assets/icon-social-twitter.svg" />
                    </a>
                    <a class="frcc" href="https://t.me/DDMeta" target="_blank">
                        <img src="../../assets/icon-social-telegram.svg" />
                    </a>
                    <a class="frcc" href="https://medium.com/@DDMeta" target="_blank">
                        <img src="../../assets/icon-social-medium.svg" />
                    </a>
                    <a class="frcc" href="https://discord.gg/gYwAaEzUhj" target="_blank">
                        <img src="../../assets/icon-social-discord.svg" />
                    </a>
                    <!-- <a class="frcc" href="mailto:hello@dnaxcat.io" target="_blank">
                        <img src="../../assets/email_icon.svg" />
                    </a> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import useLocale from '@/hooks/useLocale'

const localeData = useLocale()
</script>

<style lang="less" scoped>
@import "./index.less";
.section-home {
    background: #191919;
    overflow: hidden;
    position: relative;
    padding-bottom: 120px;
    .section-content {
        min-height: 555px;
        padding-top: 50px;
    }
}
.content-left {
    max-width: 500px;
    margin-top: -70px;
    z-index: 2;
    position: relative;
    .title {
        text-align: left;
    }
}
.buttons {
    margin-top: 74px;
    a {
        min-width: 140px;
        margin-right: 30px;
        height: 44px;
    }
}
.content-right {
    position: absolute;
    z-index: 1;
    width: 800px;
    height: 730px;
    right: -100px;
    top: -20px;
    // transform: translateY(-50%);
    display: flex;
    justify-content: center;
    img {
        width: 100%;
    }
    video {
        width: 100%;
        height: 100%;
        vertical-align: top;
        background: transparent;
    }
}
.socials {
    margin-top: -54px;
    position: relative;
    &::before {
        content: " ";
        position: absolute;
        height: 1px;
        left: 0;
        width: 42%;
        background: -webkit-gradient(
            linear,
            left top,
            right top,
            from(#2f2f2f),
            to(#181818)
        );
        background: linear-gradient(90deg, #2f2f2f, #181818);
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
}
.social-list a {
    margin-left: 18px;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid #303030;
    box-sizing: border-box;
    transition: border-color 0.2s ease;
    &:first-child {
        margin-left: 0;
    }
    &:hover {
        border-color: #64c832;
    }
    img {
        max-width: 62%;
    }
}
@media screen and (max-width: 960px) {
    .section-home {
        padding-bottom: 60px;
        .section-content {
            flex-direction: column-reverse;
            min-height: unset;
            padding: 0 20px 0;
            align-items: unset;
        }
        .content-left {
            max-width: unset;
            margin-top: 25px;
            .buttons {
                margin-top: 30px;
                a {
                    min-width: 120px;
                    margin-right: 20px;
                }
            }
        }

        .content-right {
            width: 100%;
            height: calc(90.889vw - 22.7556px);
            right: unset;
            top: unset;
            transform: unset;
            position: static;
            box-sizing: border-box;
            transform: translateX(2%);
            margin-top: 10px;
        }
        .socials {
            margin-top: 40px;
            .normal-layout {
                padding: 0 20px;
            }
        }
    }
}
</style>