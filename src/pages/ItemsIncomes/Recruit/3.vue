<template>
  <table id="data_table" class="column13p">
    <thead>
      <tr>
        <th><span class="blank"></span></th>
        <th>ターゲット名</th>
        <th>研修生名<br>（採用後選択）</th>
        <th>採用担当者社員番号</th>
        <th>備考</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(date,itemObjectKey) in dates">
        <td><input type="checkbox" name="" value="" class="input_check"></td>
        <td><p class="btn_update"><a href="" @click.prevent="adoptItemClick(itemObjectKey)">更新</a></p><span class="planTitle">朝日産業　株式会社</span></td>
        <td><p class="btn_update"><a href="" @click.prevent="adoptAgentClick(itemObjectKey)">更新</a><span class="planTitle_agent"></span></p></td>
        <td><input type="text" class="input_text" value=""></td>
        <td><input type="text" class="input_text" value=""></td>
      </tr>
    </tbody>
  </table><!--/data_table-->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import $ from '../../.././assets/jquery-1.12.4.min'

export default {
  data () {
    return {
      dates: window.dates.adopt[2]
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
    adoptItemClick (index) {
      $('#data_table tbody tr:eq(' + index + ')').addClass('popOn')
      this.togglePopupVisible('target')
    },
    adoptAgentClick (index) {
      $('#data_table tbody tr:eq(' + index + ')').addClass('popOn')
      this.togglePopupVisible('agent')
    }
  }
}
</script>