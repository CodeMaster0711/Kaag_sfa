<template>
  <table id="data_table" class="column28p nissay_table">
    <thead>
      <tr>
        <th><span class="blank"></span></th>
        <th>ターゲット名</th>
        <th>代理店名</th>
        <th>被保険者生月日</th>
        <th>商品</th>
        <th>成約見込確度</th>
        <th>担当社員</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(date,itemObjectKey) in dates">
        <td><input type="checkbox" name="" value="" class="input_check"></td>
        <td><p class="btn_update"><a href="#" @click.prevent="newplanItemClick(itemObjectKey)">更新</a></p><span class="planTitle"></span></td>
        <td><p class="btn_update"><a href="#" @click.prevent="newplanAgentClick(itemObjectKey)">更新</a></p><span class="planTitle_agent"></span></td>
        <td><datepicker v-model="date.value"></datepicker><p class="btn_calendar"><a href=""><img src="../../../assets/images/calendar.svg" alt=""></a></p></td>
        <td><input type="text" class="input_text" value=""></td>
        <td>
          <select name="" class="input_select">
            <option value="">S（成約）</option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
            <option value="" selected>D（ターゲット登録）</option>
            <option value="">ドロップ</option>
          </select>
        </td>
        <td>テスト課支社A</td>
        <td>テストユーザー</td>
      </tr>
    </tbody>
  </table><!--/data_table-->
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import datepicker from 'vue-date'
import $ from '../../.././assets/jquery-1.12.4.min'

export default {
  components: {
    datepicker
  },
  data () {
    return {
      dates: window.dates.nissay[0]
    }
  },
  mounted () {
  },
  computed: {
    ...mapGetters({
      'type': 'auth/type'
    })
  },
  methods: {
    ...mapActions({
      togglePopupVisible: 'popup/togglePopupVisible'
    }),
    updateStatus () {
      console.log('Success')
    },
    newplanItemClick (index) {
      $('#data_table tbody tr:eq(' + index + ')').addClass('popOn')
      this.togglePopupVisible('target')
    },
    newplanAgentClick (index) {
      $('#data_table tbody tr:eq(' + index + ')').addClass('popOn')
      this.togglePopupVisible('agent')
    }
  }
}
</script>