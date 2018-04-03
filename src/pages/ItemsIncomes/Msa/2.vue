<template>
  <table id="data_table" class="column25p">
    <thead>
      <tr>
        <th><span class="blank"></span></th>
        <th>ターゲット名</th>
        <th>代理店名</th>
        <th>決算月（法人）</th>
        <th>見込AAP（万円）</th>
        <th>成約予定月</th>
        <th>成約</th>
        <th>確約AAP（万円）</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(date,itemObjectKey) in dates">
        <td><input type="checkbox" name="" value="" class="input_check"></td>
        <td><p class="btn_update"><a href="#" @click.prevent="newplanItemClick(itemObjectKey)">更新</a></p><span class="planTitle"></span></td>
        <td><p class="btn_update"><a href="#" @click.prevent="newplanAgentClick(itemObjectKey)">更新</a></p><span class="planTitle_agent"></span></td>
        <td>
          <select name="" class="input_select">
            <option value=""></option>
            <option value="">1月</option>
            <option value="">2月</option>
            <option value="">3月</option>
            <option value="">4月</option>
            <option value="">5月</option>
            <option value="">6月</option>
            <option value="">7月</option>
            <option value="">8月</option>
            <option value="">9月</option>
            <option value="">10月</option>
            <option value="">11月</option>
            <option value="">12月</option>
          </select>
        </td>
        <td><input type="text" class="input_text" value="0"></td>
        <td><datepicker v-model="date.value"></datepicker><p class="btn_calendar"><a href=""><img src="../../../assets/images/calendar.svg" alt=""></a></p></td>
        <td><input type="checkbox" name="" value="" class="input_check"></td>
        <td><input type="text" class="input_text" value="0"></td>
      </tr>
    </tbody>
  </table><!--/data_table-->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VueDatetimePicker from 'vue-datetime-picker'
import datepicker from 'vue-date'
import $ from '../../.././assets/jquery-1.12.4.min'

export default {
  components: {
    VueDatetimePicker,
    datepicker
  },
  data () {
    return {
      dates: window.dates.msa[1]
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