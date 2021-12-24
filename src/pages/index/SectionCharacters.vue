<template>
    <section-characters-select @changeCountry="changeCountry"></section-characters-select>
    <section class="section-item section-characters-2">
        <div class="normal-layout section-content">
            <div class="aside-info">
                <div class="info-top">
                    <div class="lable-icon"></div>
                    <div class="info-name">
                        <div class="info-title">{{ curCat.name }}</div>
                        <!-- <div class="element-icon">
                            <img :src="curCat.elementIcon" />
                        </div>-->
                    </div>
                    <div class="infos">
                        <span>{{ curCat.desc }}</span>
                        <!-- <div class="info-item">
                            {{ localeData["chararters.element"] }}:
                            <span>{{ curCat.element }}</span>
                        </div>
                        <div class="info-item">
                            {{ localeData["chararters.force"] }}:
                            <span>{{ localeData[curCat.country] }}</span>
                        </div>-->
                    </div>
                </div>
                <div class="info-bottom">
                    <div class="sub-title">{{ localeData["chararters.Properties"] }}</div>
                    <div class="part-list">
                        <!-- <div
                            class="part-item"
                            :key="bodyItem.name"
                            v-for="bodyItem in curCat.bodyParts"
                        >
                            <img :src="bodyItem.icon" />
                            <span>{{ bodyItem.name }}</span>
                        </div>-->
                        <div class="part-item">
                            <div class="part-title">
                                <span>{{ localeData["chararters.Properties.Power"] }}：</span>
                            </div>
                            <span>{{ curCat?.properties?.Power }}</span>
                        </div>
                        <div class="part-item">
                            <div class="part-title">
                                <span>{{ localeData["chararters.Properties.Gender"] }}：</span>
                            </div>
                            <span>{{ curCat?.properties?.Gender }}</span>
                        </div>
                        <div class="part-item">
                            <div class="part-title">
                                <span>{{ localeData["chararters.Properties.Nature"] }}：</span>
                            </div>
                            <span>{{ curCat?.properties?.Nature }}</span>
                        </div>
                        <div class="part-item">
                            <div class="part-title">
                                <span>{{ localeData["chararters.Properties.Popularity"] }}：</span>
                            </div>
                            <img
                                src="../../assets/star.png"
                                v-for="star in curCat?.properties?.Popularity"
                                :key="star"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-info">
                <div class="cover frcc" id="cover">
                    <img :src="curCat.mainPic" @load="handleLoadGif" alt />
                    <loading v-show="imgShowLoading"></loading>
                    <!-- <canvas
                        :class="!imgShowLoading ? 'active' : ''"
                        v-show="!imgShowLoading"
                        class="spine-view"
                        ref="canvas"
                    ></canvas>-->
                </div>
                <div class="scroll-outer">
                    <a
                        class="op-icon left-icon"
                        :class="curCatIndex == 0 ? 'disabled-icon' : ''"
                        @click="handleSlidePrev"
                    ></a>
                    <div class="scroll-view">
                        <swiper @swiper="onSwiper" :slides-per-view="3">
                            <swiper-slide v-for="(cat,index) in catList" :key="index">
                                <div
                                    class="nft-item"
                                    :class="cat.name === curCat.name ? 'selected' : ''"
                                    @click.stop="handleClickSlide(index)"
                                >
                                    <div
                                        class="icon bg-box box-square"
                                        :style="{
                                            'backgroundImage': `url(${cat.staticPic})`
                                        }"
                                    ></div>
                                    <!-- <div class="title">{{ cat.name }}</div> -->
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <a
                        class="op-icon right-icon"
                        :class="curCatIndex == catList.length - 1 ? 'disabled-icon' : ''"
                        @click="handleSlideNext"
                    ></a>
                </div>
            </div>
            <div class="aside-attrs">
                <img :src="curCat.skillsPic" alt />
                <!-- <div class="top-info">
                    <div class="sub-title">{{ localeData["chararters.Properties"] }}</div>
                    <div class="element-list">
                        <div class="data-item">
                            <div class="s-title">{{ localeData["chararters.Properties.Vitality"] }}</div>
                            <div class="s-value">
                                <img src="../../assets/Vitality.png" class="cover-image bg-box" alt />
                                <span>{{ curCat.properties?.Vitality }}</span>
                            </div>
                        </div>
                        <div class="data-item">
                            <div class="s-title">{{ localeData["chararters.Properties.Strength"] }}</div>
                            <div class="s-value">
                                <img src="../../assets/strength.png" class="cover-image bg-box" alt />
                                <span>{{ curCat.properties?.Strength }}</span>
                            </div>
                        </div>
                        <div class="data-item">
                            <div class="s-title">{{ localeData["chararters.Properties.Defense"] }}</div>
                            <div class="s-value">
                                <img src="../../assets/Defense.png" class="cover-image bg-box" alt />

                                <span>{{ curCat.properties?.Defense }}</span>
                            </div>
                        </div>
                        <div class="data-item">
                            <div class="s-title">{{ localeData["chararters.Properties.Morale"] }}</div>
                            <div class="s-value">
                                <img src="../../assets/Morale.png" class="cover-image bg-box" alt />

                                <span>{{ curCat.properties?.Morale }}</span>
                            </div>
                        </div>
                        <div class="data-item">
                            <div class="s-title">{{ localeData["chararters.Properties.Agility"] }}</div>
                            <div class="s-value">
                                <img src="../../assets/Agility.png" class="cover-image bg-box" alt />
                                <span>{{ curCat.properties?.Agility }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-info">
                    <div class="sub-title">{{ localeData["chararters.skill"] }}</div>
                    <div class="skill-list">
                        <div class="skill-item" v-for="skill in curCat.skills" :key="skill.name">
                            <div class="s-title">
                                <img :src="skill.icon" class="icon" />
                                <div class="info">
                                    <div
                                        class="title-name"
                                        :class="skill.stars <= 4 ? 'quatity4' : ''"
                                    >{{ skill.name }}</div>
                                    <div class="title-quality">
                                        <img
                                            src="../../assets/star.png"
                                            v-for="star in skill.stars"
                                            :key="star"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="brief">{{ skill.desc }}</div>
                        </div>
                    </div>
                </div>-->
            </div>
        </div>
    </section>
    <div data-v-41dddaa0 class="more-buttons">
        <a
            target="_blank"
            href
            class="common-button button-60 button-black"
        >{{ localeData["seemore"] }}</a>
    </div>
</template>

<script setup>
import useLocale from "@/hooks/useLocale";
import { ref, onMounted, watch } from "vue";
import SectionCharactersSelect from "./SectionCharactersSelect.vue";
import { SwiperSlide } from "swiper/vue/swiper-slide";
import { Swiper } from "swiper/vue/swiper";
import Loading from '@/components/Loading'
import { SpinePlayer } from "@esotericsoftware/spine-player"
import "swiper/swiper.less";
import catDrawer from '@/utils/catDrawer'

const localeData = useLocale();

const catList = ref([]);
const curCat = ref({});
const curCatIndex = ref(0);
const catSwiper = ref()
const imgShowLoading = ref(false);
const spinePlayer = ref();
const canvas = ref()

const changeCountry = (_catList) => {
    catList.value = _catList || [];
    if (_catList.length) {
        curCat.value = _catList[0];
        curCatIndex.value = 0;
        catSwiper.value && catSwiper.value.slideTo(0)
    }
    console.log(curCat.value)
};
const onSwiper = (swiper) => {
    catSwiper.value = swiper;
}

// watch(curCatIndex, (newVal) => {
//     if (catList.value.length) {
//         curCat.value = catList.value[newVal]
//     }
// })
// watch(curCat, () => {
//     drawCat()
// }, { deep: true })

const handleClickSlide = (index) => {
    catSwiper.value.slideTo(index);
    // curCatIndex.value = index;
}

const handleSlidePrev = () => {
    catSwiper.value.slidePrev();
    // curCatIndex.value--;
}
const handleSlideNext = () => {
    catSwiper.value.slideNext();
    // curCatIndex.value++;
}

const drawCat = () => {
    if (canvas.value) {
        imgShowLoading.value = true;
        catDrawer.reset();
        catDrawer.init(canvas.value, 'genesis', curCat.value.name.toLowerCase(), () => {
            imgShowLoading.value = false
        })
    }

}

onMounted(() => {

    // spinePlayer.value = new SpinePlayer("cover", {
    //     // jsonUrl: "miu/miu.json",
    //     // atlasUrl: "miu/miu.atlas",
    //     // animation: "idle",
    //     jsonUrl: "miu/raptor-pro.json",
    //     atlasUrl: "miu/raptor-pma.atlas",
    //     animation: "walk",
    //     showControls: false,
    //     premultipliedAlpha: true,
    //     backgroundColor: "#00000000",
    //     alpha: true,

    // });
})
</script>

<style lang="less" scoped>
@import "./index.less";

.aside-info,
.aside-attrs {
    flex: 1;
    position: relative;
    &::before {
        content: " ";
        position: absolute;
        height: 1px;
        width: 400px;
        top: 50%;
        transform: translateY(-50%);
    }
}
.section-characters-2 .section-content {
    display: flex;
    padding-bottom: 80px;
}
.aside-info::before {
    right: 0;
    display: none;
    background: linear-gradient(90deg, #181818, #2f2f2f);
}
.section-characters-2 .info-top,
.section-characters-2 .top-info {
    top: 0;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.section-characters-2 .bottom-info,
.section-characters-2 .info-bottom,
.section-characters-2 .info-top,
.section-characters-2 .top-info {
    position: absolute;
    overflow: auto;
    width: 100%;
    padding: 30px 30px 0;
    box-sizing: border-box;
}
.section-characters-2 .aside-info .info-top .lable-icon {
    width: 130px;
    height: 44px;
    margin-left: -10px;
    background: url("../../assets/metahuman.png");
    background-position: 0;
    background-size: 100%;
}
.section-characters-2 .info-top .info-title {
    font-size: 46px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 0 10px rgb(0 0 0 / 50%);
}
.section-characters-2 .info-top .element-icon {
    margin-top: 20px;
    width: 54px;
    height: 54px;
    background: #1b1b1b;
    border-radius: 35px;
    border: 1px solid #3c3c3c;
    display: flex;
    align-items: center;
    justify-content: center;
}
.info-top .element-icon img {
    width: 65%;
}
.info-top .infos {
    margin-top: 20px;
    font-size: 16px;
    color: #7f7f7f;
}
.info-top .infos .info-item {
    margin: 10px 0;
    color: #b0b0b0;
}
.section-characters-2 .info-top .infos .info-item span {
    font-weight: 500;
    color: #fff;
    margin-left: 4px;
}
.section-characters-2 .bottom-info,
.section-characters-2 .info-bottom {
    top: 50%;
    height: 50%;
}
.sub-title {
    color: #7f7f7f;
    font-size: 18px;
    margin-bottom: 24px;
}
.part-list {
    font-size: 16px;
    font-weight: 500;
}
.part-list .part-item {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    .part-title {
        color: #7f7f7f;
    }
}
.section-characters-2 .part-list .part-item img {
    max-width: 16px;
    max-height: 16px;
    margin-right: 4px;
    // margin-right: 16px;
}
.section-characters-2 .aside-attrs {
    padding-top: 45px;
}
.section-characters-2 .aside-attrs:before {
    left: 0;
    display: none;
    background: linear-gradient(90deg, #2f2f2f, #181818);
}
.section-characters-2 .sub-title {
    color: #7f7f7f;
    font-size: 18px;
    margin-bottom: 24px;
}
.section-characters-2 .element-list {
    display: flex;
    flex-wrap: wrap;
}
.section-characters-2 .element-list .data-item {
    width: 33.33333%;
    margin: 10px 0;
}
.section-characters-2 .element-list .data-item .s-title {
    color: #7f7f7f;
    font-size: 14px;
    white-space: nowrap;
}
.section-characters-2 .element-list .data-item .s-value {
    margin-top: 8px;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #fff;
    font-size: 14px;
}
.section-characters-2 .element-list .data-item .s-value .cover-image {
    width: 32px;
    height: 32px;
}
.bg-box {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.section-characters-2 .element-list .data-item .s-value span {
    margin-left: 6px;
}
.section-characters-2 .skill-list {
    margin-top: 10px;
}
.section-characters-2 .skill-list .skill-item {
    margin: 20px 0;
}
.section-characters-2 .skill-list .skill-item .s-title {
    display: flex;
    align-items: center;
}
.section-characters-2 .skill-list .skill-item .s-title .icon {
    width: 38px;
    min-width: 38px;
    margin-right: 12px;
    transform: translateY(2px);
}
.section-characters-2 .skill-list .skill-item .s-title .title-name {
    font-size: 14px;
    color: rgb(255, 215, 8);
}
.section-characters-2 .skill-list .skill-item .s-title .title-name.quatity4 {
    color: rgb(201, 71, 255);
}
.section-characters-2 .skill-list .skill-item .s-title .title-quality {
    margin-top: 4px;
    display: flex;
}
.section-characters-2 .skill-list .skill-item .s-title .title-quality img {
    width: 13px;
    margin-right: 2px;
}
.section-characters-2 .skill-list .skill-item .brief {
    margin-top: 10px;
    font-size: 12px;
    color: #7f7f7f;
    line-height: 1.3;
}
.section-characters-2 .main-info {
    width: 500px;
    position: relative;
}

.section-characters-2 .main-info .cover {
    height: 592px;
    // background-image: url(../../assets/icon-cover-bg.svg);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    background-color: #161616;
    img {
        height: 95%;
    }
    canvas {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: -1;
        &.active {
            z-index: 10;
        }
    }
}
.section-characters-2 .scroll-outer {
    margin-top: 36px;
    position: relative;
}

.section-characters-2 .scroll-outer .scroll-view {
    width: 366px;
    box-sizing: border-box;
    overflow: auto;
    margin: 0 auto;
}
.swiper-slide {
    width: 102px !important;
    margin-right: 20px;
    margin-top: 2px;
}

.section-characters-2 .op-icon {
    position: absolute;
    width: 32px;
    height: 32px;
    cursor: pointer;
    border: 1px solid #64c832;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 32px;
    color: #64c832;
    background: linear-gradient(180deg, #2a2a2a, #181818);
    transition: all 0.4s ease;
}
.op-icon.left-icon {
    left: 10px;
}
.op-icon.right-icon {
    right: 10px;
}
.section-characters-2 .scroll-outer .op-icon:before {
    content: " ";
    border: 1px solid;
    width: 8px;
    height: 8px;
    position: absolute;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    top: 50%;
    transition: transform 0.4s ease;
}
.section-characters-2 .scroll-outer .op-icon.left-icon:before {
    border-right: 0 none;
    border-top: 0 none;
    left: 55%;
}
.section-characters-2 .scroll-outer .op-icon.disabled-icon {
    cursor: default;
    border-color: #3c3c3c;
    color: #3c3c3c;
    pointer-events: none;
}
.section-characters-2 .scroll-outer .op-icon.right-icon:before {
    border-left: 0 none;
    border-bottom: 0 none;
    left: 45%;
}
.section-characters-2 .scroll-outer .scroll-view .scroll-inner {
    white-space: nowrap;
}

.nft-item {
    display: inline-flex;
    width: 100%;
    flex-direction: column;
    background: linear-gradient(180deg, #2a2a2a, #181818);
    margin: 0 10px;
    text-align: center;
    border-radius: 16px;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #161616;
    transition: border-color 0.4s ease;
    &.selected {
        border-color: #3c3c3c;
        cursor: default;
    }
    .title {
        height: 44px;
        align-items: center;
        justify-content: center;
        display: flex;
        font-size: 14px;
        color: #fff;
    }
}
.section-characters-2 .scroll-outer .scroll-view .nft-item .icon {
    background-size: auto 90%;
}
.bg-box.box-square {
    height: 0;
    padding-bottom: 140%;
}
.section-characters-2
    .scroll-outer
    .scroll-view
    .scroll-inner
    .nft-item
    .title {
    height: 44px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 14px;
    color: #fff;
}

.section-characters-2 .main-info:after,
.section-characters-2 .main-info:before {
    position: absolute;
    top: 0;
    height: 100%;
    content: " ";
    width: 1px;
    z-index: 10;
    background: linear-gradient(180deg, #2f2f2f, #181818);
}

.section-characters-2 .main-info:before {
    left: 0;
}
.section-characters-2 .main-info:after {
    right: 0;
}
.more-buttons {
    text-align: center;
    position: relative;
    z-index: 2;
    a {
        max-width: 346px;
        margin: -30px auto 0;
    }
}
#spine-view {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 1104px) {
    .section-characters-2 {
        .main-info {
            width: 38vw;
        }
    }
    .section-characters-2 .main-info .cover {
        height: 38vw;
    }
    .section-characters-2 .scroll-outer .scroll-view {
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }
    .section-characters-2 .op-icon {
        display: none;
    }
    .scroll-view .swiper-slide {
        margin-right: 10px;
        width: calc(33.33333% - 10px) !important;
    }
    .section-characters-2 .scroll-outer .scroll-view .nft-item .title {
        font-size: 12px;
    }
    .section-characters-2 .scroll-outer .scroll-view .nft-item.selected {
        border-color: #64c832;
    }
}
@media screen and (max-width: 960px) {
    .more-buttons a {
        max-width: 160px;
        height: 54px;
        font-size: 14px;
        padding: 0 12px;
        margin-top: -27px;
    }
    .section-characters-2 .bottom-info,
    .section-characters-2 .info-bottom,
    .section-characters-2 .info-top,
    .section-characters-2 .top-info {
        padding: 25px 15px 0;
    }
    .section-characters-2 .info-top,
    .section-characters-2 .top-info {
        padding-top: 0;
    }
    .section-characters-2 .info-top .infos {
        margin-top: 10px;
        font-size: 14px;
    }
    .section-characters-2 .info-top .info-title {
        font-size: 32px;
    }
    .section-characters-2 .info-top .element-icon {
        width: 44px;
        height: 44px;
        margin-top: 15px;
    }
    .section-characters-2 .info-top .infos .info-item {
        margin: 5px 0;
    }
    .section-characters-2 .sub-title {
        font-size: 16px;
        margin-bottom: 16px;
    }
    .section-characters-2 .main-info {
        width: 38vw;
    }
    .section-characters-2 .element-list .data-item {
        margin: 6px 0;
    }
    .section-characters-2 .element-list .data-item .s-title {
        font-size: 12px;
    }
    .section-characters-2 .element-list .data-item .s-value {
        margin-top: 6px;
        font-size: 12px;
    }
    .section-characters-2 .element-list .data-item .s-value .cover-image {
        width: 28px;
        height: 28px;
    }
    .section-characters-2 .element-list .data-item .s-value span {
        margin-left: 4px;
    }
}

@media screen and (max-width: 690px) {
    .more-buttons {
        padding: 0 20px 66px;
        a {
            margin-top: -120px;
            max-width: unset;
            border-radius: 16px;
        }
    }
    .section-characters-2 .section-content {
        flex-direction: column;
        padding: 0 20px 140px;
    }
    .section-characters-2 .aside-info {
        order: 2;
    }
    .section-characters-2 .main-info {
        order: 1;
        width: calc(100vw - 40px);
    }
    .section-characters-2 .aside-attrs {
        order: 3;
    }
    .section-characters-2 .bottom-info,
    .section-characters-2 .info-bottom,
    .section-characters-2 .info-top,
    .section-characters-2 .top-info {
        position: unset;
        background: linear-gradient(180deg, #303030, #1b1b1b);
        border-radius: 16px;
        border: 1px solid #3c3c3c;
        box-sizing: border-box;
        margin-top: 15px;
        padding: 20px 25px 15px;
    }
    .section-characters-2 .bottom-info,
    .section-characters-2 .info-bottom,
    .section-characters-2 .info-top,
    .section-characters-2 .top-info {
        position: unset;
        background: linear-gradient(180deg, #303030, #1b1b1b);
        border-radius: 16px;
        border: 1px solid #3c3c3c;
        box-sizing: border-box;
        margin-top: 15px;
        padding: 20px 25px 15px;
    }
    .section-characters-2 .sub-title {
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 12px;
    }
    .section-characters-2 .part-list {
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
    }
    .section-characters-2 .part-list .part-item {
        // flex-direction: column-reverse;
        width: 33.33333%;
        font-size: 12px;
        color: #7f7f7f;
        margin: 6px 0;
        align-items: center;
    }
    .section-characters-2 .part-list .part-item img {
        margin-top: 6px;
        margin-right: 0;
        max-width: 32px;
    }
    .section-characters-2 .main-info {
        order: 1;
        width: calc(100vw - 40px);
    }
    .section-characters-2 .sub-title {
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 12px;
    }
    .section-characters-2 .main-info .cover {
        height: calc(100vw - 40px);
    }
}
</style>