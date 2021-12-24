<template>
    <section class="section-item section-features over-hidden">
        <div class="normal-layout section-content">
            <div class="title">{{ localeData['features.title'] }}</div>
            <div class="feature-list fww">
                <div class="common-bg feature-item">
                    <div class="cover">
                        <img src="../../assets/features-1.png" alt />
                    </div>
                    <div class="title frsc">{{ localeData['features.item1.title'] }}</div>
                    <div class="brief">{{ localeData['features.item1.desc'] }}</div>
                </div>
                <div class="common-bg feature-item">
                    <div class="cover">
                        <img src="../../assets/features-2.png" alt />
                    </div>
                    <div class="title frsc">{{ localeData['features.item2.title'] }}</div>
                    <div class="brief">{{ localeData['features.item2.desc'] }}</div>
                </div>
                <div class="common-bg feature-item">
                    <div class="cover">
                        <img src="../../assets/features-3.jpg" alt />
                    </div>
                    <div class="title frsc">{{ localeData['features.item3.title'] }}</div>
                    <div class="brief">{{ localeData['features.item3.desc'] }}</div>
                </div>
                <div class="common-bg feature-item">
                    <div class="cover">
                        <img src="../../assets/features-4.jpg" alt />
                    </div>
                    <div class="title frsc">{{ localeData['features.item4.title'] }}</div>
                    <div class="brief">{{ localeData['features.item4.desc'] }}</div>
                </div>
                <div class="common-bg feature-item">
                    <div class="cover">
                        <img src="../../assets/features-5.png" alt />
                    </div>
                    <div class="title frsc">{{ localeData['features.item5.title'] }}</div>
                    <div class="brief">{{ localeData['features.item5.desc'] }}</div>
                </div>
                <div class="common-bg feature-item">
                    <div class="cover">
                        <img src="../../assets/features-6.png" alt />
                    </div>
                    <div class="title frsc">{{ localeData['features.item6.title'] }}</div>
                    <div class="brief">{{ localeData['features.item6.desc'] }}</div>
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
.section-features {
    .section-content {
        padding: 100px 0;
    }
}
.feature-list {
    margin-top: 60px;
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    .feature-item {
        margin: 15px;
        padding: 20px 20px 38px;
        min-width: 360px;
        flex: 1;
        transition: transform 0.4s ease;
        box-sizing: border-box;
        &:hover {
            transform: translateY(-8px);
        }
    }
    .cover {
        height: 0;
        padding-bottom: 70%;
        position: relative;
        img {
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            object-fit: cover;
        }
    }
    .title {
        font-size: 28px;
        font-weight: 600;
        color: #64c832;
        height: 76px;
        align-items: center;
    }
    .brief {
        font-size: 14px;
        color: hsla(0, 0%, 100%, 0.8);
        line-height: 1.5;
        margin-top: -4px;
    }
}
@media screen and (max-width: 960px) {
    .section-features .section-content {
        padding: 60px 20px 50px;
    }
    .section-features .feature-list {
        margin-left: -8px;
        margin-right: -8px;
        margin-top: 25px;
    }
    .section-features .feature-list .feature-item {
        margin: 8px;
        padding: 18px 18px 20px;
        min-width: 240px;
    }
    .section-features .feature-list .feature-item .title {
        font-size: 22px;
        height: 64px;
    }
}
</style>