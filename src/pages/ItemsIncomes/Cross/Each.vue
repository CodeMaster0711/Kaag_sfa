<template>
  <table id="" class="cross_each">
    <thead>
      <tr>
        <th><span class="blank"></span></th>
        <th><span class="blank"></span></th>
        <th>区分</th>
        <th>代理店名</th>
        <th>ターゲット名</th>
        <th>担当社员</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox" name="" value="" class="input_check"></td>
        <td><p class="btn_edit"><a href="" @click.prevent="togglePopupVisible('cross')">編集</a></p></td>
        <td>新設案件</td>
        <td>●●●●●●●●</td>
        <td>●●●●●●●●</td>
        <td>RABI</td>
        <td></td>
      </tr>
    </tbody>
  </table><!--/data_table-->
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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
    })
  }
}
</script>
