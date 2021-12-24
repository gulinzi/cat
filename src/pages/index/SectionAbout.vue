<template>
    <section class="section-item section-about">
        <div class="normal-layout section-content">
            <div class="cover">
                <img src="../../assets/about-left.png" />
            </div>
            <div class="about-content">
                <div class="title">{{localeData['about.title']}}</div>
                <div class="brief">
                    <p>{{localeData['about.text1']}}</p>
                    <p>{{localeData['about.text2']}}</p>
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
.section-about {
    .cover {
        height: 385px;
        min-width: 312px;
    }

    .about-content {
        margin-left: 120px;
        margin-top: -30px;
    }
    .title {
        color: #64c832;
        text-align: left;
        margin-top: -20px;
    }
    .brief {
        margin-top: 35px;
        font-size: 16px;
        line-height: 1.5;
    }
    p {
        margin-top: 30px;
    }
}
.section-content {
    padding: 72px 0;
    display: flex;
    align-items: center;
}

@media screen and (max-width: 960px) {
    .section-about {
        .section-content[data-v-6eefa2bf] {
            padding: 40px 20px 60px;
            flex-direction: column;
            align-items: unset;
        }
        .section-content {
            padding: 40px 20px 60px;
            flex-direction: column;
            align-items: unset;
        }
        .cover {
            height: unset;
            min-width: unset;
            max-width: 120px;
        }
        .about-content {
            margin-left: 0;
            margin-top: -150px;
            .title {
                margin-top: 0;
                padding-left: 145px;
                line-height: 1.2;
                height: 150px;
                display: flex;
                align-items: center;
            }
            .brief {
                font-size: 14px;
                margin-top: 20px;
                p {
                    margin-top: 15px;
                }
            }
        }
    }
}
</style>