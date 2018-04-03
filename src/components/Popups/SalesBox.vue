<template>
  <div id="popup04" class="popup" v-show="salesbox.isVisible">
    <div class="popup_inner">
      <div class="sheet_head">
        <div id="work_title">
          <h1>担当篭店退才尺</h1>
        </div>
      </div>
      <!--sheet head-->

      <!-- main table content -->
      <ul id="popup_content">
        <li id="popup_sheet01">
          <!--03.html start-->
          <div class="sheet">
            <form action="">

              <!-- sales target Table -->
              <table class="sales_table">
                <tr class="heading">
                  <th>選択</th>
                  <th>担当者</th>
                  <th>代理店 - 扱者コ一ド`</th>
                  <th>代理店 - 扱者名</th>
                </tr>
                <tr v-for="data in datas">
                  <td class="index"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
              <!-- sales target Table -->

              <!--Button container-->
              <ul class="btn_container">
                <li class="btn_submit">
                  <input type="submit" value="確定">
                </li>
                <li class="btn_reset popup_close">
                  <input id="button_reset" type="reset" value="キャンセル" @click="togglePopupVisible('salesbox')">
                </li>
              </ul>
              <!-- Button container -->

            </form>
          </div>
          <!--/sheet-->
        </li>
        
      </ul>
      <!-- Main table content end -->

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'salesbox',
  data () {
    return {
      // Sample data which should be replaced
      datas: ['1', '2', '3', '2', '3', '2', '3', '2', '3']
    }
  },
  computed: {
    ...mapGetters({
      'salesbox': 'popup/salesbox'
    })
  },
  methods: {
    ...mapActions({
      'togglePopupVisible': 'popup/togglePopupVisible',
      'changePopupTab': 'popup/changePopupTab'
    })
  }
}
</script>
