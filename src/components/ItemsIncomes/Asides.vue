<template>
  <div id="asides">
    <aside id="aside">
      <p class="btn_exchange">
        <a href @click.prevent="toggle('exchange')">
          切替
        </a>
      </p>
      <div class="search" v-if="hasSearch">
        <a href @click.prevent="toggle('search')">
          <p class="btn_search"><span>検索</span></p>
          <p class="vol">3/3</p>
        </a>
      </div>
      <dl class="project"
        v-if="hasContract"
        @click="aside.registeredItemIsVisible = !aside.registeredItemIsVisible">
        <dt>登録案件</dt>
        <dd>
          <span v-text="aside.registeredItemIsVisible ? '表示' : '非表示'"></span>
        </dd>
      </dl>
    </aside><!--/aside-->

    <div id="member_list" v-show="aside.opening === 'exchange'">
      <div class="sheet">
        <form action="">
          <div class="sheet_contets_wide">
            <div class="dbsector" id="sector1">
              <h1>部支店</h1>
              <ul>
                <li>テス卜部支店</li>
              </ul>
            </div>
            <!--/input_data_container-->
            <div class="dbsector" id="sector2">
              <h1>課支社</h1>
              <ul>
                <li v-bind:class="{cr: tab == 0}" @click.prevent="tab = 0">テス卜課支ネ土A</li>
                <li v-bind:class="{cr: tab == 1}" @click.prevent="tab = 1">テス卜課支ネ土B</li>
                <li v-bind:class="{cr: tab == 2}" @click.prevent="tab = 2">RABI課支社</li>
                <li v-bind:class="{cr: tab == 3}" @click.prevent="tab = 3">支店長席</li>
              </ul>
            </div>
            <div class="dbsector" id="sector3">
              <h1>社員</h1>
              <ul v-show="tab === 0">
                <li class="cr">テス卜ユ一ザ`一1</li>
                <li>テス卜ユ一ザ`一2</li>
                <li>テス卜ユ一ザ`一3</li>
                <li>テス卜ユ一ザ`一4</li>
                <li>テス卜ユ一ザ`一5</li>
                <li>テス卜本ネ土ユ一ザ`ー</li>
                <li>テス卜ユ一ザ`一11</li>
                <li>テス卜ユ一ザ`一12</li>
                <li>テス卜ユ一ザ`一13</li>
                <li>テス卜ユ一ザ`一14</li>
                <li>テス卜ユ一ザ`一15</li>
              </ul>
              <ul v-show="tab === 1">
                <li class="cr">テス 卜ユ一ザ`一6</li>
                <li>テス卜ユ一ザ`一7</li>
                <li>テス卜ユ一ザ`一8</li>
                <li>テス卜ユ一ザ`一9</li>
                <li>テス卜ユ一ザ`一10</li>
                <li>テス卜本子退ユ一ザ一デイ 一ラ一</li>
                <li>テス卜ユ一ザ`一16</li>
                <li>テス卜ユ一ザ`一17</li>
                <li>テス卜ユ一ザ`一18</li>
                <li>テス卜ユ一ザ`一19</li>
                <li>テス卜ユ一ザ`一20</li>
              </ul>
              <ul v-show="tab === 2">
                <li>RABI宮担</li>
                <li>RABI課支社員</li>
              </ul>
              <ul v-show="tab === 3">
                <li>テス卜支店長</li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div><!--/member_list-->

    <div id="search_container" v-show="aside.opening === 'search'">
      <form action="">
        <dl>
          <dt>表示条件</dt>
          <dd>
            <table>
              <tr>
                <th>案件名</th>
                <td><input type="text" placeholder="部分一致" class="input_text"></td>
              </tr>
              <tr>
                <th>チャネル</th>
                <td>
                  <select name="" id="">
                    <option value="">指定なし</option>
                    <option value="">プロ</option>
                    <option value="">住産</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>見込制度</th>
                <td>
                  <div class="input_btn_container">
                    <div class="line"><input type="radio" name="assign_system" id="no_assigned" value="" checked="checked" @click="prediction=0"><label for="no_assigned">指定なし</label></div>
                    <input type="radio" name="assign_system" id="assigned" value="" @click="prediction=1"><label for="no_assigned">指定する</label>
                    <label><input type="checkbox" name="assign_type" value="" :disabled="prediction == 0 ? true : false">A</label>
                    <label><input type="checkbox" name="assign_type" value="" :disabled="prediction == 0 ? true : false">B</label>
                    <label><input type="checkbox" name="assign_type" value="" :disabled="prediction == 0 ? true : false">C</label>
                    <label><input type="checkbox" name="assign_type" value="" :disabled="prediction == 0 ? true : false">未設定</label>
                  </div>
                </td>
              </tr>
              <tr>
                <th>攻略時期</th>
                <td>
                  <div class="input_btn_container">
                    <div class="line"><input type="radio" name="assign_time" id="no_assigned" value="" checked="checked" @click="approach=0"><label for="no_assigned">指定なし</label></div>
                    <div>
                      <input type="radio" name="assign_time" id="assigned" value="" @click="approach=1">
                      <label for="no_assigned">指定する</label>
                      <datepicker v-model="a_date1" :disabled="approach == 0 ? true : false"></datepicker><span class="btn_calendar"><a href="#" :disabled="approach == 0 ? true : false"><img src="../../assets/images/calendar.svg" alt=""></a></span> 〜
                    </div>
                    <div>
                      <label for="no_assigned" style="opacity:0;margin-left:135px"></label>
                      <datepicker v-model="a_date2" :disabled="approach == 0 ? true : false"></datepicker><span class="btn_calendar"><a href="#" :disabled="approach == 0 ? true : false"><img src="../../assets/images/calendar.svg" alt=""></a></span>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </dd>
        </dl>
        <ul class="btn_container">  
          <li class="btn_submit"><input type="submit" value="更新"></li>
          <li class="btn_reset"><input type="reset" value="クリア"></li>
        </ul>
      </form>
    </div><!--/search_container-->
  </div>
</template>

<script>
import datepicker from 'vue-date'

export default {
  name: 'asides',
  components: {
    datepicker
  },
  data () {
    return {
      aside: {
        opening: '', // exchange or search
        registeredItemIsVisible: true
      },
      tab: 0,
      prediction: 0,
      approach: 0,
      a_date1: '2017-03-24',
      a_date2: '2017-04-01'
    }
  },
  props: {
    hasSearch: {
      type: Boolean,
      default: true
    },
    hasContract: Boolean
  },
  methods: {
    toggle (kind) {
      if (kind === this.aside.opening) {
        this.aside.opening = ''
      } else {
        this.aside.opening = kind
      }
    }
  }
}
</script>
