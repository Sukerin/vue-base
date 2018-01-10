/**
 * Created by dongrui3 on 2018/1/10.
 */
import turntable from './LuckyTurntableItem.vue'
// 导入组件
const luckyTurntable = {
  install (Vue, options) {
    Vue.component("luckyTurntableForVue", turntable)
  }
}
export default luckyTurntable // 导出..
