<template>
  <table id="data_table">
    <thead>
      <tr>
        <th><span class="blank"></span></th>
        <th>ターゲット名</th>
        <th>チャネル</th>
        <th>登録年月</th>
        <th>見込確度・<br>登録</th>
        <th>ステータス</th>
        <th>課支社</th>
        <th>担当社員</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(date,itemObjectKey) in dates">
        <td><input type="checkbox" name="" value="" class="input_check"></td>
        <td><p class="btn_update"><a href="#" @click.prevent="newplanItemClick(itemObjectKey)">更新</a></p><span class="planTitle">テキストテキスト</span></td>
        <td>
          <select name="" class="input_select">
            <option value="">プロ</option>
            <option value="">住産</option>
          </select>
        </td>
        <td><datepicker v-model="date.value"></datepicker><p class="btn_calendar"><a href=""><img src="../../../assets/images/calendar.svg" alt=""></a></p></td>
        <td>
          <select name="" class="input_select">
            <option value="">S(登録)</option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
            <option value="">D(テキストテキスト)</option>
            <option value="">ターゲット名</option>
          </select>
        </td>
        <td>
          <select name="" class="input_select">
            <option value="">ターゲット登録</option>
            <option value="">初訪</option>
            <option value="">継続訪問</option>
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
      dates: window.dates.newplan[0]
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