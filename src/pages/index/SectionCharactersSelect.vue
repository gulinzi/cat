<template>
    <section class="section-item section-characters">
        <div class="normal-layout section-content">
            <div class="title">{{ localeData['characters.title'] }}</div>
            <!-- <div class="tab-list frcc">
                <a
                    class="common-button button-60"
                    :class="country === curCountry ? 'button-primary' : 'button-black'"
                    v-for="(cat,country) in cats"
                    :key="country"
                    @click="handleChangeCountry(country)"
                >{{ localeData[country] }}</a>
            </div> -->
        </div>
    </section>
</template>

<script setup>
import useLocale from '@/hooks/useLocale'
import cats from '@/utils/cats'
import human from '@/utils/human'
import { onMounted, ref } from 'vue'

const emit = defineEmits('changeCountry');
const localeData = useLocale();
const curCountry = ref('');

onMounted(() => {
    handleChangeCountry(human)
})

const handleChangeCountry = (data) => {
    curCountry.value = data
    emit('changeCountry',data)
}
</script>

<style lang="less" scoped>
@import "./index.less";
.section-characters {
    background: linear-gradient(180deg, #303030, #1b1b1b);
    .section-content {
        padding: 80px 0;
    }
}
.tab-list {
    max-width: 80%;
    margin: 45px auto 0;
    a {
        margin: 0 15px;
        flex: 1;
    }
    a.button-primary {
        pointer-events: none;
    }
}
@media screen and (max-width: 960px) {
    .section-characters {
        .section-content {
            padding: 60px 20px;
        }
        .tab-list {
            max-width: unset;
            margin: 25px auto 0;
            a {
                height: 54px;
                font-size: 14px;
                padding: 0 12px;
                margin: 0 6px;
            }
        }
    }
}
</style>