<template>
  <div id="p-inputs-result">
    <div class="sheet">
      <!-- Retail -->
      <form action="" v-show="type === 'retail'">
        <div class="sheet_table_container">
          <table class="sheet_table">
            <tr>
              <th>活動日</th>
              <td>
                <div class="input_date_container">
                  <!--<input type="text" placeholder="yyyy/mm/dd" class="input_text input_date" v-model="activityDate.date">-->
                  <datepicker v-model="date"></datepicker>
                  <span class="btn_calendar">
                    <a href="#" @click.prevent="setAllDay()"><img src="../../assets/images/calendar.svg" alt=""></a>
                  </span>
      
                  <select v-model="activityDate.startTime">
                    <option value=""></option>
                    <option value="08:15">08:15</option>
                    <option value="08:30">08:30</option>
                    <option value="08:45">08:45</option>
                    <option value="09:00">09:00</option>
                    <option value="09:15">09:15</option>
                    <option value="09:30">09:30</option>
                    <option value="09:45">09:45</option>
                    <option value="10:00">10:00</option>
                    <option value="10:15">10:15</option>
                    <option value="10:30">10:30</option>
                    <option value="10:45">10:45</option>
                    <option value="11:00">11:00</option>
                    <option value="11:15">11:15</option>
                    <option value="11:30">11:30</option>
                    <option value="11:45">11:45</option>
                    <option value="12:00">12:00</option>
                    <option value="12:15">12:15</option>
                    <option value="12:30">12:30</option>
                    <option value="12:45">12:45</option>
                    <option value="13:00">13:00</option>
                    <option value="13:15">13:15</option>
                    <option value="13:30">13:30</option>
                    <option value="13:45">13:45</option>
                    <option value="14:00">14:00</option>
                    <option value="14:15">14:15</option>
                    <option value="14:30">14:30</option>
                    <option value="14:45">14:45</option>
                    <option value="15:00">15:00</option>
                    <option value="15:15">15:15</option>
                    <option value="15:30">15:30</option>
                    <option value="15:45">15:45</option>
                    <option value="16:00">16:00</option>
                    <option value="16:15">16:15</option>
                    <option value="16:30">16:30</option>
                    <option value="16:45">16:45</option>
                    <option value="17:00">17:00</option>
                    <option value="17:15">17:15</option>
                    <option value="17:30">17:30</option>
                    <option value="17:45">17:45</option>
                    <option value="18:00">18:00</option>
                    <option value="18:15">18:15</option>
                    <option value="18:30">18:30</option>
                    <option value="18:45">18:45</option>
                    <option value="19:00">19:00</option>
                    <option value="19:15">19:15</option>
                    <option value="19:30">19:30</option>
                    <option value="19:45">19:45</option>
                    <option value="20:00">20:00</option>
                    <option value="20:15">20:15</option>
                    <option value="20:30">20:30</option>
                    <option value="20:45">20:45</option>
                  </select>

                  <select v-model="activityDate.endTime">
                    <option value=""></option>
                    <option value="09:15">09:15</option>
                    <option value="09:30">09:30</option>
                    <option value="09:45">09:45</option>
                    <option value="10:00">10:00</option>
                    <option value="10:15">10:15</option>
                    <option value="10:30">10:30</option>
                    <option value="10:45">10:45</option>
                    <option value="11:00">11:00</option>
                    <option value="11:15">11:15</option>
                    <option value="11:30">11:30</option>
                    <option value="11:45">11:45</option>
                    <option value="12:00">12:00</option>
                    <option value="12:15">12:15</option>
                    <option value="12:30">12:30</option>
                    <option value="12:45">12:45</option>
                    <option value="13:00">13:00</option>
                    <option value="13:15">13:15</option>
                    <option value="13:30">13:30</option>
                    <option value="13:45">13:45</option>
                    <option value="14:00">14:00</option>
                    <option value="14:15">14:15</option>
                    <option value="14:30">14:30</option>
                    <option value="14:45">14:45</option>
                    <option value="15:00">15:00</option>
                    <option value="15:15">15:15</option>
                    <option value="15:30">15:30</option>
                    <option value="15:45">15:45</option>
                    <option value="16:00">16:00</option>
                    <option value="16:15">16:15</option>
                    <option value="16:30">16:30</option>
                    <option value="16:45">16:45</option>
                    <option value="17:00">17:00</option>
                    <option value="17:15">17:15</option>
                    <option value="17:30">17:30</option>
                    <option value="17:45">17:45</option>
                    <option value="18:00">18:00</option>
                    <option value="18:15">18:15</option>
                    <option value="18:30">18:30</option>
                    <option value="18:45">18:45</option>
                    <option value="19:00">19:00</option>
                    <option value="19:15">19:15</option>
                    <option value="19:30">19:30</option>
                    <option value="19:45">19:45</option>
                    <option value="20:00">20:00</option>
                    <option value="20:15">20:15</option>
                    <option value="20:30">20:30</option>
                    <option value="20:45">20:45</option>
                    <option value="21:00">21:00</option>
                  </select>

                  <p class="btn_all_day">
                    <a href="" @click.prevent="setAllDay()">終日</a>
                  </p>
                </div>
                <!-- line spacing -->
                <div class="clear">
                </div>
              </td>
            </tr>
            
            <!-- Changable (Spelling is wrong) -->
            <tr>
              <th>事業分類</th>
              <td>
                <select class="">
                    <option value=""></option>
                    <option value="販売活動（有効）">販売活動（有効）</option>
                    <option value="営業活動（その他）">営業活動（その他）</option>
                    <option value="販売準備">販売準備</option>
                    <option value="会議">会議</option>
                    <option value="トレーニング">トレーニング</option>
                    <option value="見通、報告書">見通、報告書</option>
                    <option value="請求">請求</option>
                    <option value="オフデューティ">オフデューティ</option>
                    <option value="その他">その他</option>
                  </select>
              </td>
            </tr>
            <!-- Change -->

            <tr>
              <th>ターゲット名</th>
              <td>
                <div class="output_text target"></div>
                <p class="btn_select"><a href="" @click.prevent="togglePopupVisible('target')">選択</a></p>
                <p class="btn_all_day"><a href="" @click.prevent="clearTargetItem">クリア</a></p>
              </td>
            </tr>

            <tr>
              <th class="fsp90">既設代理店・扱者<br>ニッセイ拠点</th>
              <td>
                <div class="output_text agent"></div>
                <p class="btn_select"><a href="" @click.prevent="togglePopupVisible('agent')">選択</a></p>
                <p class="btn_all_day"><a href="" @click.prevent="clearAgentItem">クリア</a></p>
              </td>
            </tr>

            <tr>
              <th>活動メモ</th>
              <td>
                <textarea name="" cols="30" rows="10" placeholder="入力してください" class="input_textarea"></textarea>
              </td>
            </tr>

          </table>
        </div><!--/sheet_table_container-->

        <ul class="btn_container">
          <li class="btn_submit"><input type="submit" value="保存"></li>
          <li class="btn_reset"><input type="reset" value="キャンセル" @click.prevent="cancel()"></li>
        </ul>
      </form>

      <!-- Dealer -->
      <form action="" v-show="type === 'dealer'">
        <div class="sheet_table_container">
          <table class="sheet_table">
            <tr>
              <th>活動日</th>
              <td>
                <div class="input_date_container">
                  <input type="text" placeholder="yyyy/mm/dd" class="input_text input_date"><span class="btn_calendar"><a href=""><img src="../../assets/images/calendar.svg" alt=""></a></span>

                  <select name="" id="">
                    <option value="">00:00</option>
                    <option value="">01:00</option>
                    <option value="">02:00</option>
                    <option value="">03:00</option>
                    <option value="">04:00</option>
                    <option value="">05:00</option>
                    <option value="">06:00</option>
                    <option value="">07:00</option>
                    <option value="">08:00</option>
                    <option value="">09:00</option>
                    <option value="">10:00</option>
                    <option value="">11:00</option>
                    <option value="">12:00</option>
                    <option value="">13:00</option>
                    <option value="">14:00</option>
                    <option value="">15:00</option>
                    <option value="">16:00</option>
                    <option value="">17:00</option>
                    <option value="">18:00</option>
                    <option value="">19:00</option>
                    <option value="">20:00</option>
                    <option value="">21:00</option>
                    <option value="">22:00</option>
                    <option value="">23:00</option>
                    <option value="">24:00</option>
                  </select>

                  <select name="" id="">
                    <option value="">00:00</option>
                    <option value="">01:00</option>
                    <option value="">02:00</option>
                    <option value="">03:00</option>
                    <option value="">04:00</option>
                    <option value="">05:00</option>
                    <option value="">06:00</option>
                    <option value="">07:00</option>
                    <option value="">08:00</option>
                    <option value="">09:00</option>
                    <option value="">10:00</option>
                    <option value="">11:00</option>
                    <option value="">12:00</option>
                    <option value="">13:00</option>
                    <option value="">14:00</option>
                    <option value="">15:00</option>
                    <option value="">16:00</option>
                    <option value="">17:00</option>
                    <option value="">18:00</option>
                    <option value="">19:00</option>
                    <option value="">20:00</option>
                    <option value="">21:00</option>
                    <option value="">22:00</option>
                    <option value="">23:00</option>
                    <option value="">24:00</option>
                  </select>

                  <p class="btn_all_day"><a href="">終日</a></p>
                </div>

                <div class="radio_btn_container">
                  <label><input type="radio" name="frequency" value="" checked="checked"> 1回</label>
                  <label><input type="radio" name="frequency" value=""> 毎週</label>
                  <label><input type="radio" name="frequency" value=""> 毎月</label>
                </div>

              </td>
            </tr>

            <tr>
              <th>代理店<br>店舗名</th>
              <td>
                <div class="output_text"></div>
                <p class="btn_select"><a href="" @click.prevent="togglePopupVisible('agent')">選択</a></p>
                <p class="btn_all_day"><a href="" @click.prevent="clearTargetItem">クリア</a></p>
              </td>
            </tr>

            <tr>
              <th>訪問相手</th>
              <td>
                <input type="text" placeholder="入力してください" class="input_text short">
              </td>
            </tr>

            <tr>
              <th>ターゲット名</th>
              <td>
                <div class="output_text"></div>
                <p class="btn_select"><a href="" @click.prevent="togglePopupVisible('agent')">選択</a></p>
                <p class="btn_all_day"><a href="" @click.prevent="clearAgentItem">クリア</a></p>
              </td>
            </tr>

            <tr>
              <th>訪問目的</th>
              <td>
                <div class="checkbox_container">
                  <label><input type="checkbox" name="category" value="">新規案件管理</label>
                  <label><input type="checkbox" name="category" value="">継続管理</label>
                  <label><input type="checkbox" name="category" value="">代理店新設</label>
                  <label><input type="checkbox" name="category" value="">マーケット開拓</label>
                  <label><input type="checkbox" name="category" value="">生保</label>
                  <label><input type="checkbox" name="category" value="">マンレポ</label>
                  <label><input type="checkbox" name="category" value="">首脳部対応</label>
                  <label><input type="checkbox" name="category" value="">本社打ち合せ</label>
                  <label><input type="checkbox" name="category" value="">店舗打ち合せ</label>
                  <label><input type="checkbox" name="category" value="">本社研修・勉強会</label>
                  <label><input type="checkbox" name="category" value="">店舗研修・勉強会</label>
                  <label><input type="checkbox" name="category" value="">朝礼・夕礼</label>
                  <label><input type="checkbox" name="category" value="">社内</label>
                  <label><input type="checkbox" name="category" value="">移動</label>
                  <label><input type="checkbox" name="category" value="">その他</label>
                </div>
              </td>
            </tr>

            <tr>
              <th>活動メモ</th>
              <td>
                <textarea name="" cols="30" rows="5" placeholder="入力してください" class="input_textarea"></textarea>
              </td>
            </tr>
          </table>
        </div><!--/sheet_table_container-->
        <ul class="btn_container">
          <li class="btn_submit"><input type="submit" value="保存"></li>
          <li class="btn_reset"><input type="reset" value="キャンセル" @click.prevent="cancel()"></li>
        </ul>
      </form>

      <!-- side bar -->
      <div class="activity_sidebar data_list_container" style="">
        <ul>
          <li class="active">
            <label class="check_data">
              <input type="radio" name="activity" value="">新しい活動
            </label>
          </li>
          <li class="">
            <label class="check_data">
              <input type="radio" name="activity" value="">採用活動
            </label>
          </li>
          <li class="">
            <label class="check_data">
              <input type="checkbox" name="" value="">販売を増やす
            </label>
          </li>
          <li class="">
            <label class="check_data">
              <input type="checkbox" name="" value="">新しい活動/クロスセル
            </label>
          </li>
          <li class="">
            <label class="check_data">
              <input type="checkbox" name="" value="">MSA生命保険
            </label>
          </li>
          <li class="">
            <label class="check_data">
              <input type="checkbox" name="" value="">日生生命
            </label>
          </li>
        </ul>
      </div>

    </div><!--/sheet-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

import VueDatetimePicker from 'vue-datetime-picker'
import datepicker from 'vue-date'
import $ from '../.././assets/jquery-1.12.4.min'

export default {
  components: {
    VueDatetimePicker,
    datepicker
  },
  data () {
    return {
      activityDate: {
        date: moment().format('YYYY/MM/DD'),
        startTime: '00:00',
        endTime: ''
      },
      // Current date initial
      date: new Date().getFullYear() + '-' + ('0' + parseInt(new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2)
    }
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
    setAllDay () {
      this.activityDate.startTime = '09:00'
      this.activityDate.endTime = '17:00'
    },
    cancel () {
      this.$router.push({ name: 'index' })
    },
    clearTargetItem () {
      $('.target.output_text').html('')
    },
    clearAgentItem () {
      $('.agent.output_text').html('')
    }
  }
}
</script>
