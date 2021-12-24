import { useStore } from 'vuex'
import locale from '@/locale'
import { computed } from 'vue'

export default function useLocale() {
    const store = useStore();
    const localeData = computed(() => locale[store.getters.curLan.value]);
    return localeData
}