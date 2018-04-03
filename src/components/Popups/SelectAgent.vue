<template>
  <div id="popup02" class="popup" v-show="agent.isVisible">
    <div class="popup_inner">
      <div class="sheet_head">
        <div id="work_title">
          <h1>既設代理店・拠者　ニッセイ拠点選択</h1>
        </div>
        <div id="tab_bar">
          <ul id="tab_control01b" class="tab full">
            <li :class="{ cr: agent.tab === 0 }"><a href="#" @click.prevent="changePopupTab({ type: 'agent', index: 0 })">入力履歴から選択</a></li>
            <li :class="{ cr: agent.tab === 1 }"><a href="#" @click.prevent="changePopupTab({ type: 'agent', index: 1 })">代理店・扱者を選択</a></li>
            <li :class="{ cr: agent.tab === 2 }"><a href="#" @click.prevent="changePopupTab({ type: 'agent', index: 2 })">NLI拠点を選択</a></li>
          </ul>
        </div>
        <!--/tab_bar-->
      </div>
      <!--/sheet_head-->
      <ul id="popup_content">
        <li id="popup_sheet04"  v-show="agent.tab === 0">
          <!--/05_1_1.html-->
          <div class="sheet">
            <form action="">
              <div class="sheet_contets_wide">
                <ul class="data_list_container single">
                  <li>
                    <label class="check_data">
                      <input class="agent" type="radio" name="" value="">代理店・扱者を</label>
                  </li>
                </ul>
              </div>
              <!--/sheet_contets_wide-->
              <ul class="btn_container">
                <li class="btn_submit">
                  <input type="button" value="確定" @click="setAgentValue(1, $route.name)">
                </li>
                <li class="btn_reset popup_close">
                  <input type="reset" value="キャンセル" @click.prevent="togglePopupVisible('agent')">
                </li>
              </ul>
            </form>
          </div>
          <!--/sheet-->
        </li>
        <li id="popup_sheet05" v-show="agent.tab === 1">
          <!--/05_1_2.html-->
          <div class="sheet">
            <form action="">
              <div class="sheet_contets_wide">
                <div class="input_data_container">
                  <dl class="input_data">
                    <dt>代理店・拠者コード入力</dt>
                    <dd>
                      <input type="text" class="input_text">
                    </dd>
                    <dt>代理店・拠者名を入力＜あいまい検索＞</dt>
                    <dd>
                      <input type="text" class="input_text">
                    </dd>
                  </dl>
                  <div class="btn_input_data_container">
                    <p class="btn_input_data search"><a href="">検索</a></p>
                  </div>
                </div>
                <!--/input_data_container-->
                <div class="data_list_container">
                  <ul>
                    <li>
                      <label class="check_data">
                        <input type="radio" name="" value="">
                        <p>代理店・拠者
                          <br> 東京都○○区○○町1-2-3
                        </p>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <!--/sheet_contets-->
              <ul class="btn_container">
                <li class="btn_submit">
                  <input type="button" value="確定" @click="setAgentValue(2,$route.name)">
                </li>
                <li class="btn_reset popup_close">
                  <input type="reset" value="キャンセル" @click.prevent="togglePopupVisible('agent')">
                </li>
              </ul>
            </form>
          </div>
          <!--/sheet-->
        </li>
        <li id="popup_sheet06" v-show="agent.tab === 2">
          <!--/05_1_3.html-->
          <div class="sheet type02">
            <form action="">
              <div class="sheet_contets_wide">
                <dl class="input_data solid">
                  <dt>NLI拠点名</dt>
                  <dd>
                    <select name="">
                      <option></option>
                    </select>
                  </dd>
                </dl>
              </div>
              <!--/sheet_contets_wide-->
              <ul class="btn_container">
                <li class="btn_submit">
                  <input type="submit" value="確定" @click="setAgentValue(1, $route.name)">
                </li>
                <li class="btn_reset popup_close">
                  <input type="reset" value="キャンセル" @click.prevent="togglePopupVisible('agent')">
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
import $ from '../.././assets/jquery-1.12.4.min'

export default {
  name: 'select-agent',
  computed: {
    ...mapGetters({
      'agent': 'popup/agent'
    })
  },
  methods: {
    ...mapActions({
      'togglePopupVisible': 'popup/togglePopupVisible',
      'changePopupTab': 'popup/changePopupTab'
    }),
    // set Value into the text field which should be stored in database
    setAgentValue (index, route) {
      var tr = $('#popup_sheet0' + (index + 3) + ' ul input:checked')
      if (route.indexOf('items-incomes') >= 0) {
        $('.popOn .planTitle_agent').html(tr.parent().text())
      } else {
        $('.output_text.agent').html(tr.parent().text())
      }
      this.togglePopupVisible('agent')
    }
  }
}
</script>
