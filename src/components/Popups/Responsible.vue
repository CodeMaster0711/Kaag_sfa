<template>
  <div id="popup01" class="popup" v-show="responsible.isVisible">
    <div class="popup_inner">
      <div class="sheet_head">
        <div id="work_title">
          <h1>ターゲット選択</h1>
        </div>
      </div>
      <!--/sheet_head-->
      <ul id="popup_content">
        <li id="popup_sheet01">
          <!--03.html start-->
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
                    <li v-bind:class="{cr: responsible.tab == 0}" @click.prevent="changePopupTab({ type: 'responsible', index: 0 })">テス卜課支ネ土A</li>
                    <li v-bind:class="{cr: responsible.tab == 1}" @click.prevent="changePopupTab({ type: 'responsible', index: 1 })">テス卜課支ネ土B</li>
                    <li v-bind:class="{cr: responsible.tab == 2}" @click.prevent="changePopupTab({ type: 'responsible', index: 2 })">RABI課支社</li>
                    <li v-bind:class="{cr: responsible.tab == 3}" @click.prevent="changePopupTab({ type: 'responsible', index: 3 })">支店長席</li>
                  </ul>
                </div>
                <div class="dbsector" id="sector3">
                  <h1>社員</h1>
                  <ul v-show="responsible.tab === 0">
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
                  <ul v-show="responsible.tab === 1">
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
                  <ul v-show="responsible.tab === 2">
                    <li>RABI宮担</li>
                    <li>RABI課支社員</li>
                  </ul>
                  <ul v-show="responsible.tab === 3">
                    <li>テス卜支店長</li>
                  </ul>
                </div>
              </div>
              <!--/sheet_contets-->
              <ul class="btn_container">
                <li class="btn_submit">
                  <input type="submit" value="確定">
                </li>
                <li class="btn_reset popup_close">
                  <input id="button_reset" type="reset" value="キャンセル" @click="togglePopupVisible('responsible')">
                </li>
              </ul>
            </form>
          </div>
          <!--/sheet-->
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'responsible',
  computed: {
    ...mapGetters({
      'responsible': 'popup/responsible'
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
