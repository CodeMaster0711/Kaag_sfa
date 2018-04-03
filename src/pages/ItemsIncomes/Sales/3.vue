<!-- This is sample table I personally constructed as sample. -->
<template>
  <table id="sales_table" class="column17p">
    <thead>
      <tr>
        <th>区分</th>
        <th>代理店<br>コード</th>
        <th>代理店・扱者名</th>
        <th>備考</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="date in dates">
        <td></td>
        <td></td>
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
      // Sample data from database which should be replaced later
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