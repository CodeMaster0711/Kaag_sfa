<template>
  <table id="data_table" class="column10">
    <thead>
      <tr>
        <th><span class="blank"></span></th>
        <th><span class="blank"></span></th>
        <th>区分</th>
        <th>代理店名</th>
        <th>ターゲット名</th>
        <th>種目</th>
        <th>商品</th>
        <th>見込・<br>成約時期</th>
        <th>見込・成約<br>保険料（万円）</th>
        <th>見込確度・<br>成約</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox" name="" value="" class="input_check"></td>
        <td><p class="btn_edit"><a href="" @click.prevent="togglePopupVisible('cross')">編集</a></p></td>
        <td>新設案件</td>
        <td>●●●●●●●●</td>
        <td>●●●●●●●●</td>
        <td>火災</td>
        <td>企財包</td>
        <td>2017年00月</td>
        <td>0000</td>
        <td>B</td>
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
