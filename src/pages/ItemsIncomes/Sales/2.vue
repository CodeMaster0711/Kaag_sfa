<template>
  <table id="data_table" class="column16p">
    <thead>
      <tr>
        <th>区分</th>
        <th>代理店コード</th>
        <th>代理店・扱者名</th>
        <th>潜在収保（万円）</th>
        <th>シナリオ</th>
        <th>最終活動日</th>
        <th>活動内容</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(date,itemObjectKey) in dates">
        <td></td>
        <td></td>
        <td></td>
        <td><input type="text" class="input_text" value=""></td>
        <td></td>
        <td></td>
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
      // Sample data which should be replaced later
      dates: ['1', '2', '3', '4', '5']
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
