<template>
  <table id="data_table" class="column10p  data_table_each">
    <thead>
      <tr>
        <th><span class="blank"></span></th>
        <th>ターゲット名</th>
        <th>test1</th>
        <th>test2</th>
        <th>test3</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(date,itemObjectKey) in dates">
        <td><input type="checkbox" name="" value="" class="input_check"></td>
        <td><p class="btn_update"><a href="" @click.prevent="newplanEach(itemObjectKey)">更新</a></p><span class="planTitle">テキストテキスト</span></td>
        <td><input type="text" class="input_text" value=""></td>
        <td><input type="text" class="input_text" value=""></td>
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
      dates: window.dates.newplan[3]
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
    newplanEach (index) {
      $('#data_table tbody tr:eq(' + index + ')').addClass('popOn')
      this.togglePopupVisible('target')
    }
  }
}
</script>