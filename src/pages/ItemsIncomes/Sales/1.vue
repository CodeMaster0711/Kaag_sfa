<template>
  <table id="data_table" class="column15p">
    <thead>
      <tr>
        <th>区分</th>
        <th>代理店コード</th>
        <th>代理店・扱者名</th>
        <th>チャネル</th>
        <th>新設・採用年月</th>
        <th>保険会社（代申社）</th>
        <th>成績</th>
        <th>担当社員</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(date,itemObjectKey) in dates">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><p class="btn_edit"><a href="">表示/編集</a></p></td>
        <td></td>
      </tr>
    </tbody>
  </table><!--/data_table-->
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      dates: ['1', '2', '3', '4']
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
    })
  }
}
</script>