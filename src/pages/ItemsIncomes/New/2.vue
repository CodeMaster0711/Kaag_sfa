<template>
  <table id="data_table" class="column08p">
    <thead>
      <tr>
        <th><span class="blank"></span></th>
        <th>ターゲット名</th>
        <th>最終活動日</th>
        <th>活動内容</th>
        <th>保険会社（幹事）</th>
        <th>潜在収保</th>
        <th>課支社長<br>事前承認</th>
        <th>セグメント</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(date,itemObjectKey) in dates">
        <td><input type="checkbox" name="" value="" class="input_check"></td>
        <td><p class="btn_update" @click.prevent="newplanItemClick(itemObjectKey)"><a href="">更新</a></p><span class="planTitle">テキストテキスト</span></td>
        <td>16/10/19</td>
        <td>青木商店のコメント</td>
        <td>
          <select name="" class="input_select">
            <option value=""></option>
            <option value="">あいおいニッセイ同和</option>
            <option value="">東京海上日動火災</option>
            <option value="">損保ジャパン日本興亜</option>
            <option value="">三井住友海上火災</option>
            <option value="">AIU</option>
            <option value="">富士火災</option>
            <option value="">日新火災</option>
            <option value="">共栄火災</option>
            <option value="">JA共済</option>
            <option value="">その他</option>
            <option value="">純新規</option>
          </select>
        </td>
        <td>
          <select name="" class="input_select">
            <option value="">3000万未満</option>
            <option value="">3000万以上</option>
            <option value="">5000万以上</option>
            <option value="">1億以上</option>
            <option value="">3億以上</option>
            <option value="">5億以上</option>
          </select>
        </td>
        <td><input type="checkbox" name="" value="" class="input_check"></td>
        <td>
          <select name="" class="input_select">
            <option value=""></option>
            <option value="">特チャ</option>
            <option value="">プロ連携</option>
            <option value="">全管協既設</option>
            <option value="">共有銘柄</option>
          </select>
        </td>
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
      dates: window.dates.newplan[1]
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
    }
  }
}
</script>