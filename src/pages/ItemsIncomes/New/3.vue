<template>
  <table id="data_table" class="column09p">
    <thead>
      <tr>
        <th><span class="blank"></span></th>
        <th>ターゲット名</th>
        <th>登録代理店名<br>（登録後選択）</th>
        <th>担当社員番号</th>
        <th>介護</th>
        <th>備考</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(date,itemObjectKey) in dates">
        <td><input type="checkbox" name="" value="" class="input_check"></td>
        <td><p class="btn_update"><a href="" @click.prevent="newplanTargetClick(itemObjectKey)">更新</a><span class="planTitle"></span></p></td>
        <td><p class="btn_update"><a href="" @click.prevent="newplanAgentClick(itemObjectKey)">更新</a><span class="planTitle_agent"></span></p></td>
        <td><input type="text" class="input_text" value=""></td>
        <td><input type="checkbox" name="" value="" class="input_check_box"></td>
        <td><input type="text" class="input_text" value=""></td>
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
      dates: window.dates.newplan[2]
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
    newplanTargetClick (index) {
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