<template>
  <div id="popup01" class="popup" v-show="target.isVisible">
    <div class="popup_inner">
      <div class="sheet_head">
        <div id="work_title">
          <h1>ターゲット選択</h1>
        </div>
        <div id="tab_bar">
          <ul id="tab_control01a" class="tab full">
            <li :class="{ cr: target.tab === 0 }"><a href="#" @click.prevent="changePopupTab({ type: 'target', index: 0 })">企業（個人含）情報から選択</a></li>
            <li :class="{ cr: target.tab === 1 }"><a href="#" @click.prevent="changePopupTab({ type: 'target', index: 1 })">入力履歴から選択</a></li>
            <li :class="{ cr: target.tab === 2 }"><a href="#" @click.prevent="changePopupTab({ type: 'target', index: 2 })">企業（個人含）情報を新規作成</a></li>
          </ul>
        </div>
        <!--/tab_bar-->
      </div>
      <!--/sheet_head-->
      <ul id="popup_content">
        <li id="popup_sheet01" v-show="target.tab === 0">
          <!--03.html start-->
          <div class="sheet">
            <form action="">
              <div class="sheet_contets_wide">
                <div class="input_data_container">
                  <dl class="input_data">
                    <dt>都道府県を選択</dt>
                    <dd>
                      <select name="">
                        <option>北海道</option>
                        <option>青森県</option>
                        <option>岩手県</option>
                        <option>宮城県</option>
                        <option>秋田県</option>
                        <option>山形県</option>
                        <option>福島県</option>
                        <option>茨城県</option>
                        <option>栃木県</option>
                        <option>群馬県</option>
                        <option>埼玉県</option>
                        <option>千葉県</option>
                        <option>東京都</option>
                        <option>神奈川県</option>
                        <option>新潟県</option>
                        <option>富山県</option>
                        <option>石川県</option>
                        <option>福井県</option>
                        <option>山梨県</option>
                        <option>長野県</option>
                        <option>岐阜県</option>
                        <option>静岡県</option>
                        <option>愛知県</option>
                        <option>三重県</option>
                        <option>滋賀県</option>
                        <option>京都府</option>
                        <option>大阪府</option>
                        <option>兵庫県</option>
                        <option>奈良県</option>
                        <option>和歌山県</option>
                        <option>鳥取県</option>
                        <option>島根県</option>
                        <option>岡山県</option>
                        <option>広島県</option>
                        <option>山口県</option>
                        <option>徳島県</option>
                        <option>香川県</option>
                        <option>愛媛県</option>
                        <option>高知県</option>
                        <option>福岡県</option>
                        <option>佐賀県</option>
                        <option>長崎県</option>
                        <option>熊本県</option>
                        <option>大分県</option>
                        <option>宮崎県</option>
                        <option>鹿児島県</option>
                        <option>沖縄県</option>
                      </select>
                    </dd>
                    <dt>住所（全角）を入力＜前方一致検索＞</dt>
                    <dd>
                      <input type="text" class="input_text">
                    </dd>
                    <dt>企業（個人含）名（半角ｶﾅ）を入力＜あいまい検索＞</dt>
                    <dd>
                      <input type="text" class="input_text">
                    </dd>
                    <dt>電話番号（半角英数字のみ）を入力＜前方一致検索＞ </dt>
                    <dd>
                      <input type="text" class="input_text">
                    </dd>
                  </dl>
                  <div class="btn_input_data_container">
                    <p class="btn_input_data search"><a href="">検索</a></p>
                    <p class="btn_input_data new"><a href="#" @click.prevent="changePopupTab({ type: 'target', index: 2 })">企業（個人含）情報を新規作成</a></p>
                  </div>
                </div>
                <!--/input_data_container-->
                <div class="data_list_container">
                  <ul>
                    <!--<li>
                      <label class="check_data">
                        <input type="checkbox" name="" value="">
                        <p>△△△△△△株式会社
                          <br> 東京都○○区○○町1-2-3
                        </p>
                      </label>
                    </li>-->
                    <li class="active">
                      <label class="check_data">
                        <input type="radio" name="zutat" value="">株式会社
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>
                    <li class="active">
                      <label class="check_data">
                        
                      </label>
                    </li>

                  </ul>
                </div>
              </div>
              <!--/sheet_contets-->
              <ul class="btn_container">
                <li class="btn_submit">
                  <input type="button" value="確定" @click="setTargetValue(1, $route.name)">
                </li>
                <li class="btn_reset popup_close">
                  <input id="button_reset" type="reset" value="キャンセル" @click="togglePopupVisible('target')">
                </li>
              </ul>
            </form>
          </div>
          <!--/sheet-->
        </li>
        
        <li id="popup_sheet02" v-show="target.tab === 1">
          <!--/04.html-->
          <div class="sheet type02">
            <form action="">
              <div class="sheet_contets_wide">
                <ul class="data_list_container single">
                  <li>
                    <label class="check_data">
                      <input type="radio" name="zutat" value="">株式会社</label>
                  </li>
                  <li>
                    <label class="check_data">
                      <input type="radio" name="zutat" value="">株式会社</label>
                  </li>
                  <li>
                    <label class="check_data">
                      <input type="radio" name="zutat" value="">株式会社</label>
                  </li>
                </ul>
              </div>
              <!--/sheet_contets_wide-->
              <ul class="btn_container">
                <li class="btn_submit">
                  <input type="button" value="確定" @click="setTargetValue(2,$route.name)">  <!-- set Value and return -->
                </li>
                <li class="btn_reset popup_close">
                  <input type="reset" value="キャンセル" @click="togglePopupVisible('target')">
                </li>
              </ul>
            </form>
          </div>
          <!--/sheet-->
        </li>
        <li id="popup_sheet03" v-show="target.tab === 2">
          <!--/05.html-->
          <div class="sheet type02">
            <form action="">
              <div class="sheet_contets_wide">
                <dl class="input_data solid">
                  <dt>企業（個人含）名を入力</dt>
                  <dd>
                    <input type="text" class="input_text">
                  </dd>
                  <dt>企業（個人含）名（カナ）を入力</dt>
                  <dd>
                    <input type="text" class="input_text">
                  </dd>
                  <dt>都道府県</dt>
                  <dd>
                    <select name="">
                      <option>北海道</option>
                      <option>青森県</option>
                      <option>岩手県</option>
                      <option>宮城県</option>
                      <option>秋田県</option>
                      <option>山形県</option>
                      <option>福島県</option>
                      <option>茨城県</option>
                      <option>栃木県</option>
                      <option>群馬県</option>
                      <option>埼玉県</option>
                      <option>千葉県</option>
                      <option>東京都</option>
                      <option>神奈川県</option>
                      <option>新潟県</option>
                      <option>富山県</option>
                      <option>石川県</option>
                      <option>福井県</option>
                      <option>山梨県</option>
                      <option>長野県</option>
                      <option>岐阜県</option>
                      <option>静岡県</option>
                      <option>愛知県</option>
                      <option>三重県</option>
                      <option>滋賀県</option>
                      <option>京都府</option>
                      <option>大阪府</option>
                      <option>兵庫県</option>
                      <option>奈良県</option>
                      <option>和歌山県</option>
                      <option>鳥取県</option>
                      <option>島根県</option>
                      <option>岡山県</option>
                      <option>広島県</option>
                      <option>山口県</option>
                      <option>徳島県</option>
                      <option>香川県</option>
                      <option>愛媛県</option>
                      <option>高知県</option>
                      <option>福岡県</option>
                      <option>佐賀県</option>
                      <option>長崎県</option>
                      <option>熊本県</option>
                      <option>大分県</option>
                      <option>宮崎県</option>
                      <option>鹿児島県</option>
                      <option>沖縄県</option>
                    </select>
                  </dd>
                  <dt>市町村・番地を入力（全角）</dt>
                  <dd>
                    <input type="text" class="input_text">
                  </dd>
                  <dt>電話番号（半角英数字のみ）を入力＜前方一致検索＞ </dt>
                  <dd>
                    <input type="text" class="input_text">
                  </dd>
                </dl>
              </div>
              <!--/sheet_contets_wide-->
              <ul class="btn_container">
                <li class="btn_submit">
                  <input class="company_name_submit" type="button" value="確定">
                </li>
                <li class="btn_reset popup_close">
                  <input type="reset" value="キャンセル" @click="togglePopupVisible('target')">
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
  name: 'select-target',
  computed: {
    ...mapGetters({
      'target': 'popup/target'
    })
  },
  methods: {
    ...mapActions({
      'togglePopupVisible': 'popup/togglePopupVisible',
      'changePopupTab': 'popup/changePopupTab'
    }),
    setTargetValue (index, route) {
      var tr = $('#popup_sheet0' + index + ' ul input:checked')
      if (route.indexOf('items-incomes') >= 0) {
        $('.popOn .planTitle').html(tr.parent().text())
      } else {
        $('.output_text.target').html(tr.parent().text())
      }
      this.togglePopupVisible('target')
    }
  }
}
</script>
