<template>
    <section class="section-item section-friends">
        <div class="normal-layout section-content economics">
            <div class="title">{{ localeData['economics.title'] }}</div>
            <div class="economics-list">
                <div class="common-bg economics-item">
                    <div class="icon">
                        <img src="../../assets/icon-economics-1.png" alt />
                    </div>
                    <div class="item-title">{{ localeData['economics.Currency'] }}</div>
                </div>
                <div class="common-bg economics-item">
                    <div class="icon">
                        <img src="../../assets/icon-economics-2.png" alt />
                    </div>
                    <div class="item-title">{{ localeData['economics.Governance'] }}</div>
                </div>
                <div class="common-bg economics-item">
                    <div class="icon">
                        <img src="../../assets/icon-economics-3.png" alt />
                    </div>
                    <div class="item-title">{{ localeData['economics.Staking'] }}</div>
                </div>
                <div class="common-bg economics-item">
                    <div class="icon">
                        <img src="../../assets/icon-economics-4.png" alt />
                    </div>
                    <div class="item-title">{{ localeData['economics.earn'] }}</div>
                </div>
            </div>
        </div>
        <div class="normal-layout section-content">
            <div class="title">{{ localeData['roadMap.title'] }}</div>
            <div class="road-list frss fww">
                <div
                    class="road-item"
                    v-for="item in localeData['roadMap.text'] || []"
                    :key="item.title"
                >
                    <h5 class="road-item__title">{{ item.title }}</h5>
                    <ul class="road-item__wrapper">
                        <li
                            class="road-item__text"
                            v-for="text in item.content"
                            :key="text"
                        >{{ text }}{{ text }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="normal-layout section-content supporter">
            <div class="title">{{ localeData['supporter.title'] }}</div>
            <div class="friends-list">
                <a href target="_blank" class="friend-item">
                    <img src="../../assets/partners/logo(1).png" alt />
                </a>
                <a href target="_blank" class="friend-item">
                    <img src="../../assets/partners/logo(2).png" alt />
                </a>
                <a href target="_blank" class="friend-item">
                    <img src="../../assets/partners/logo(3).png" alt />
                </a>
                <a href target="_blank" class="friend-item">
                    <img src="../../assets/partners/logo(4).png" alt />
                </a>
                <a href target="_blank" class="friend-item">
                    <img src="../../assets/partners/logo(5).png" alt />
                </a>
                <a href target="_blank" class="friend-item">
                    <img src="../../assets/partners/logo(6).png" alt />
                </a>
                <a href target="_blank" class="friend-item">
                    <img src="../../assets/partners/logo(7).png" alt />
                </a>
                <a href target="_blank" class="friend-item">
                    <img src="../../assets/partners/logo(8).png" alt />
                </a>
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
.section-friends {
    .economics {
        padding-top: 120px;
    }
    .title {
        text-align: center;
    }
    .economics-list {
        padding: 60px 0 100px;
        display: flex;
        justify-content: center;
        margin-left: -15px;
        margin-right: -15px;
    }
    .economics-item {
        flex: 1;
        margin: 15px;
        padding: 48px 40px 50px;
        transition: transform 0.4s ease;
    }
    .icon {
        height: 0;
        padding-bottom: 100%;
        position: relative;
        img {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            object-fit: contain;
        }
    }
    .item-title {
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        margin-top: 30px;
    }
}
.friends-list {
    padding: 60px 0 100px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-left: -10px;
    margin-right: -10px;
    .friend-item {
        width: 224px;
        height: 75px;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: contain;
        margin: 10px 30px;
        // filter: grayscale(1);
        transition: filter 0.4s ease;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        &:hover {
            filter: none;
        }
    }
}
.road-list {
    padding: 60px 20px 100px;
    .road-item {
        width: 25%;
        margin: 20px 0;
        padding:0 20px;
        box-sizing: border-box;
    }
    .road-item__title {
        font-size: 24px;
    }
    .road-item__wrapper {
        margin-top: 20px;
        padding: 0 0
    }
    .road-item__text {
        margin: 15px 0;
        font-size: 16px;
        color:#7f7f7f;
        list-style-type: disc;
        list-style-position: outside;
    }
}

@media screen and (max-width: 960px) {
    .section-friends .economics {
        padding: 60px 20px 0;
    }
    .section-friends .economics-list {
        padding: 25px 0 50px;
        flex-wrap: wrap;
    }
    .section-friends .economics-list .economics-item {
        width: 240px;
        -webkit-box-flex: unset;
        -ms-flex: unset;
        flex: unset;
        margin: 8px;
    }
    .section-friends .supporter {
        padding: 0 20px;
    }
    .section-friends .friends-list {
        padding: 25px 0 50px;
    }
    .section-friends .friends-list .friend-item {
        margin: 8px;
    }
    .road-list {
        .road-item {
            width: 50%;
            padding: 0 20px;
            box-sizing: border-box;
        }
    }
}
@media screen and (max-width: 650px) {
    .road-list {
        .road-item {
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
        }
    }
}
@media screen and (max-width: 490px) {
    .section-friends .economics-list .economics-item {
        padding: 30px 20px 25px;
        width: calc(50vw - 26px);
    }
    .section-friends .economics-list .economics-item .item-title {
        font-size: 16px;
        margin-top: 20px;
    }
    .section-friends .friends-list {
        justify-content: flex-start;
    }
    .section-friends .friends-list .friend-item {
        width: calc(50vw - 26px);
        height: calc(16.74vw - 8.7048px);
    }
}
</style>