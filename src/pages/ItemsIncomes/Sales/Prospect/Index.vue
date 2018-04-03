<template>
  <div id="p-items-incomes-sales-prospect">

    <div id="sheet_head">
      <div id="work_title">
        <h1>当年度年間期待取保</h1>
      </div>
      <div id="tab_bar">
        <ul class="tab full flex">
          <li :class="{ cr: type === 'car' }">
            <router-link :to="{ name: 'items-incomes-sales-prospect', params: { id: id, type: 'car' } }">
              自動車
            </router-link>
          </li>
          <li :class="{ cr: type === 'liability' }">
            <router-link :to="{ name: 'items-incomes-sales-prospect', params: { id: id, type: 'liability' } }">
              自賠責
            </router-link>
          </li>
          <li :class="{ cr: type === 'fire' }">
            <router-link :to="{ name: 'items-incomes-sales-prospect', params: { id: id, type: 'fire' } }">
              火災
            </router-link>
          </li>
          <li :class="{ cr: type === 'others' }">
            <router-link :to="{ name: 'items-incomes-sales-prospect', params: { id: id, type: 'others' } }">
              その他
            </router-link>
          </li>
          <li :class="{ cr: type === 'general-meter' }">
            <router-link :to="{ name: 'items-incomes-sales-prospect', params: { id: id, type: 'general-meter' } }">
              一般計
            </router-link>
          </li>
        </ul>
      </div><!--/tab_bar-->
    </div><!--/sheet_head-->

    <div class="sheet type02">
      <div class="sheet_contets_wide">
        <table class="yearly_table">
          <tr>
            <th colspan="13">当年度年間期待週保（万円）</th>
          </tr>
          <tr>
            <th class="level2"></th>
            <th class="level2">4月</th>
            <th class="level2">5月</th>
            <th class="level2">6月</th>
            <th class="level2">7月</th>
            <th class="level2">8月</th>
            <th class="level2">9月</th>
            <th class="level2">10月</th>
            <th class="level2">11月</th>
            <th class="level2">12月</th>
            <th class="level2">1月</th>
            <th class="level2">2月</th>
            <th class="level2">3月</th>
          </tr>
          <tr>
            <td></td>
            <td><input type="text" class="input_text"></td>
            <td><input type="text" class="input_text"></td>
            <td><input type="text" class="input_text"></td>
            <td><input type="text" class="input_text"></td>
            <td><input type="text" class="input_text"></td>
            <td><input type="text" class="input_text"></td>
            <td><input type="text" class="input_text"></td>
            <td><input type="text" class="input_text"></td>
            <td><input type="text" class="input_text"></td>
            <td><input type="text" class="input_text"></td>
            <td><input type="text" class="input_text"></td>
            <td><input type="text" class="input_text"></td>
          </tr>
          <tr>
            <th colspan="13">前年実績（万円）</th>
          </tr>
          <tr>
            <th class="level2"></th>
            <th class="level2">4月</th>
            <th class="level2">5月</th>
            <th class="level2">6月</th>
            <th class="level2">7月</th>
            <th class="level2">8月</th>
            <th class="level2">9月</th>
            <th class="level2">10月</th>
            <th class="level2">11月</th>
            <th class="level2">12月</th>
            <th class="level2">1月</th>
            <th class="level2">2月</th>
            <th class="level2">3月</th>
          </tr>
          <tr>
            <td></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
          </tr>
          <tr>
            <th colspan="13">増収額（万円）</th>
          </tr>
          <tr>
            <th class="level2"></th>
            <th class="level2">4月</th>
            <th class="level2">5月</th>
            <th class="level2">6月</th>
            <th class="level2">7月</th>
            <th class="level2">8月</th>
            <th class="level2">9月</th>
            <th class="level2">10月</th>
            <th class="level2">11月</th>
            <th class="level2">12月</th>
            <th class="level2">1月</th>
            <th class="level2">2月</th>
            <th class="level2">3月</th>
          </tr>
          <tr>
            <td></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
          </tr>
          <tr>
            <th colspan="13">当年挙額（万円）</th>
          </tr>
          <tr>
            <th class="level2"></th>
            <th class="level2">4月</th>
            <th class="level2">5月</th>
            <th class="level2">6月</th>
            <th class="level2">7月</th>
            <th class="level2">8月</th>
            <th class="level2">9月</th>
            <th class="level2">10月</th>
            <th class="level2">11月</th>
            <th class="level2">12月</th>
            <th class="level2">1月</th>
            <th class="level2">2月</th>
            <th class="level2">3月</th>
          </tr>
          <tr>
            <td></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
            <td><br></td>
          </tr>
        </table>

      </div><!--/sheet_contets_wide-->

      <ul class="btn_container">
        <li class="btn_close"><a href="">閉じる</a></li>
      </ul>
    </div><!--/sheet-->

  </div>
</template>

<script>
import FunctionBar from '../../../../components/ItemsIncomes/FunctionBar'
import Tab from '../../../../components/ItemsIncomes/Tab'
import Asides from '../../../../components/ItemsIncomes/Asides'

export default {
  props: ['id', 'type'],
  components: {
    FunctionBar,
    Tab,
    Asides
  },
  data () {
    return {
      tabItems: [
        { name: 'items-incomes-sales-1', text: '基本情報1' },
        { name: 'items-incomes-sales-2', text: '基本情報2' }
      ]
    }
  }
}
</script>

