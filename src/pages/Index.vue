<template>
  <div id="p-index">
    <global-header></global-header>

    <div id="menu_container">
      <div id="menu">
        <ul>
          <li class="entry_schedule"><router-link :to="{ name: 'inputs-plan' }"><span>予定を入力</span></router-link></li>
          <li class="entry_result"><router-link :to="{ name: 'inputs-result' }"><span>結果を入力</span></router-link></li>
          <li class="case_management"><router-link :to="{ name: 'items-incomes' }"><span>案件・増収管理</span></router-link></li>
          <li class="schedule_management"><router-link :to="{ name: 'schedules' }"><span>スケジュール行動管理</span></router-link></li>
        </ul>
      </div><!--/menu-->

      <div id="schedule_results_data">
        <table id="schedule_results_table">
          <thead>
            <tr>
            <th>「今日の予定」</th>
            <th>「今日の結果」</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                ダミーダミーダミーダミーダミーダミー
                <ul>
                  <li class="btn_change"><a href="">変更</a></li>
                  <li class="btn_result"><a href="">結果</a></li>
                </ul>
              </td>
              <td>
                ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
                <ul>
                  <li class="btn_change"><a href="">変更</a></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
                <ul>
                  <li class="btn_change"><a href="">変更</a></li>
                  <li class="btn_result"><a href="">結果</a></li>
                </ul>
              </td>
              <td>
                ダミーダミーダミーダミーダミーダミー
                <ul>
                  <li class="btn_change"><a href="">変更</a></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                ダミーダミーダミーダミーダミーダミー
                <ul>
                  <li class="btn_change"><a href="">変更</a></li>
                  <li class="btn_result"><a href="">結果</a></li>
                </ul>
              </td>
              <td>
                ダミーダミーダミーダミーダミーダミー
                <ul>
                  <li class="btn_change"><a href="">変更</a></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div><!--/schedule_results_data-->
    </div><!--/menu_container-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GlobalHeader from '../components/GlobalHeader'

export default {
  components: {
    GlobalHeader
  },
  data () {
    return {
      isShopPopup01: false,
      isShopPopup02: false
    }
  },
  computed: {
    ...mapGetters({
      'sessionId': 'auth/sessionId'
    })
  }
}
</script>
