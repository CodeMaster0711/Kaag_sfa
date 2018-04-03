<template>
  <div id="function_bar">
    <!-- 新設活動 -->
    <template v-if="pageType === 'new'">
      <ul class="new-kansu">
        <li class="cr"><p class="btn_add"><a href="#" @click="addItem($route.name)">新規追加</a></p></li>
        <li class="disable dr"><p class="btn_add"><a href="#" @click="changePerson">担当変更</a></p></li>
        <li class="disable dr"><p class="btn_add"><a href="#" @click="removeItem($route.name)">削除</a></p></li>
      </ul>
      <form action=""><input pageType="text" placeholder="ターゲットの検索" class="input_text"></form>
      <div class="function_block">
        <p class="btn_handoff"><a href="#" @click="target.takeover = !target.takeover">ターゲット引継</a></p>
        <p class="btn_reload"><a href="">リロード</a></p>
        <p class="btn_print"><a href="">プリント</a></p>
      </div>
    </template>

    <!-- 採用活動 -->
    <template v-if="pageType === 'recruit'">
      <ul class="new-kansu">
        <li class="cr"><p class="btn_add"><a href="#" @click="addItem($route.name)">新規追加</a></p></li>
        <li class="disable dr"><p class="btn_add"><a href="#" @click="changePerson">担当変更</a></p></li>
        <li class="disable dr"><p class="btn_add"><a href="#" @click="removeItem($route.name)">削除</a></p></li>
      </ul>
      <form action=""><input pageType="text" placeholder="ターゲットの検索" class="input_text"></form>
      <div class="function_block">
        <p class="btn_handoff"><a href="#" @click="target.takeover = !target.takeover">ターゲット引継</a></p>
        <p class="btn_reload"><a href="">リロード</a></p>
        <p class="btn_print"><a href="">プリント</a></p>
      </div>
    </template>

    <!-- 増収対策 -->
    <template v-if="pageType === 'sales'">
      <p class="btn_add"><a href="#" @click="togglePopupVisible('salesbox')">代理店・扱者選択</a></p>
      <form action=""><input pageType="text" placeholder="代理店・扱者の検索" class="input_text"></form>
      <div class="function_block">
        <p class="btn_reload"><a href="">リロード</a></p>
        <p class="btn_print"><a href="">プリント</a></p>
      </div>
    </template>

    <!-- 新設・クロス -->
    <template v-if="pageType === 'cross'">
      <ul class="new-kansu">
        <li class="cr"><p class="btn_add"><a href="#" @click="togglePopupVisible('cross')">新規追加</a></p></li>
        <li class="disable dr"><p class="btn_add"><a href="#" @click="changePerson">担当変更</a></p></li>
        <li class="disable dr"><p class="btn_add"><a href="#" @click="removeItem($route.name)">削除</a></p></li>
      </ul>
      <form action=""><input pageType="text" placeholder="ターゲットの検索" class="input_text"></form>
      <div class="function_block">
        <p class="btn_handoff"><a href="#" @click="target.takeover = !target.takeover">ターゲット引継</a></p>
        <p class="btn_reload"><a href="">リロード</a></p>
        <p class="btn_print"><a href="">プリント</a></p>
      </div>
    </template>

    <!-- MSA生命 -->
    <template v-if="pageType === 'msa'">
      <ul class="new-kansu">
        <li class="cr"><p class="btn_add"><a href="#" @click="addItem($route.name)">新規追加</a></p></li>
        <li class="disable dr"><p class="btn_add"><a href="#" @click="changePerson">担当変更</a></p></li>
        <li class="disable dr"><p class="btn_add"><a href="#" @click="removeItem($route.name)">削除</a></p></li>
      </ul>
      <form action=""><input pageType="text" placeholder="ターゲットの検索" class="input_text"></form>
      <div class="function_block">
        <p class="btn_handoff"><a href="#" @click="target.takeover = !target.takeover">ターゲット引継</a></p>
        <p class="btn_reload"><a href="">リロード</a></p>
        <p class="btn_print"><a href="">プリント</a></p>
      </div>
    </template>

    <!-- 日本生命 -->
    <template v-if="pageType === 'nissay'">
      <ul class="new-kansu">
        <li class="cr"><p class="btn_add"><a href="#" @click="addItem($route.name)">新規追加</a></p></li>
        <li class="disable dr"><p class="btn_add"><a href="#" @click="changePerson">担当変更</a></p></li>
        <li class="disable dr"><p class="btn_add"><a href="#" @click="removeItem($route.name)">削除</a></p></li>
      </ul>
      <form action=""><input pageType="text" placeholder="ターゲットの検索" class="input_text"></form>
      <div class="function_block">
        <p class="btn_handoff"><a href="#" @click="target.takeover = !target.takeover">ターゲット引継</a></p>
        <p class="btn_reload"><a href="">リロード</a></p>
        <p class="btn_print"><a href="">プリント</a></p>
      </div>
    </template>

    <!-- target takeover popup -->
    <div id="popup_target_takeover" class="popup sheet target_takeover" v-show="target.takeover">
      <div class="popup_inner">
        <!-- sheet head -->
        <div class="sheet_head">
          <div id="work_title">
          <h1>タ一ゲ`ン 卜 弓ー継き BOX</h1> 
          </div>
        </div><!--/sheet_head-->

        <!-- functional button -->
        <ul class="function_btn">
            <li><a href="#">前年度の自分のタ一ゲ`ヅ トヵ丶ら検索</a></li>
            <li><a href="#">臨属課支社タ 一ゲ `ヅ ト カ`ら検索</a></li>
            <li><a href="#" @click="showPopUp = !showPopUp">前年度跂士コ 一 F`カ` ら鱚`ら検索</a></li>
        </ul>
        <!-- functional button end -->

        <!-- subPopup when click 前年度跂士コ 一 F`カ` ら鱚`ら検索 Button -->
        <div class="subpopup" v-show="showPopUp">
          <h2>課支ネ土 コ 一 ド入力</h2>
          <div>
            <label>課支ネ土コ~ド`</label> <input type="textbox" class="input_type"/>
            <a href="#" class="btn_submit">検索</a>
          </div>
          <div class="function_btn"><a href="#" class="sub_submit" @click="showPopUp = !showPopUp">‡ヤンセ退レ</a></div>
        </div>
        <!-- subPopup end -->

        <!-- target Table -->
        <table class="target_table">
          <tr class="heading">
            <th colspan="4"></th>
            <th colspan="2">前年度担当者情報</th>
          </tr>
          <tr class="subheading">
            <td class="index"></td>
            <td>課支社</td>
            <td>担当者</td>
            <td>全名柄名</td>
            <td>課支社</td>
            <td>担当者</td>
          </tr>
          <tr v-for="data in datas">
            <td class="index"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <!-- target table end -->

        <!-- function button for Popup -->
        <ul class="btn_container">
          <li class="btn_submit"><input pageType="submit" value="確定"></li>
          <li class="btn_reset popup_close"><input pageType="reset" value="キャンセル" @click.prevent="target.takeover = !target.takeover"></li>
        </ul>
        <!-- function button for Popup end -->

      </div>
    </div>
    <!-- target takeover popup end -->

  </div><!--/function_bar-->

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import datepicker from 'vue-date'
import $ from '../.././assets/jquery-1.12.4.min'

export default {
  name: 'function-bar',
  components: {
    datepicker
  },
  data () {
    return {
      target: {
        takeover: false
      },
      // Sample data which should be replaced
      datas: ['1', '2', '3', '2', '3', '2', '3', '2', '3'],
      showPopUp: 0
    }
  },

  props: {
    pageType: {
      pageType: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      'type': 'auth/type'
    })
  },
  methods: {
    ...mapActions({
      togglePopupVisible: 'popup/togglePopupVisible',
      changeItemCount: 'popup/changeItemCount'
    }),
    /* Add item to the list !- Sophisticated Technique(Global Object) */
    addItem (index) {
      var obj
      if (index.indexOf('new') > -1) {
        if (index.indexOf('each') < 0) obj = window.dates.newplan[index.substr(index.length - 1) - 1]
        else obj = obj = window.dates.newplan[3]
      } else if (index.indexOf('recruit') > -1) {
        if (index.indexOf('each') < 0) obj = window.dates.adopt[index.substr(index.length - 1) - 1]
        else obj = obj = window.dates.adopt[3]
      } else if (index.indexOf('msa') > -1) {
        if (index.indexOf('each') < 0) obj = window.dates.msa[index.substr(index.length - 1) - 1]
        else obj = obj = window.dates.msa[3]
      } else if (index.indexOf('nissay') > -1) {
        if (index.indexOf('each') < 0) obj = window.dates.nissay[index.substr(index.length - 1) - 1]
        else obj = obj = window.dates.nissay[3]
      }

      obj.push({value: ''})
    },
    /* Check if inputbox is selected */
    changePerson () {
      if ($('.input_check:checked').length > 0) {
        this.togglePopupVisible('responsible')
      }
    },
    /* Remove selected item from the list(Global Object) */
    removeItem (index) {
      var obj, temp
      if (index.indexOf('new') > -1) {
        if (index.indexOf('each') < 0) obj = window.dates.newplan[index.substr(index.length - 1) - 1]
        else obj = obj = window.dates.newplan[3]
      } else if (index.indexOf('recruit') > -1) {
        if (index.indexOf('each') < 0) obj = window.dates.adopt[index.substr(index.length - 1) - 1]
        else obj = obj = window.dates.adopt[3]
      } else if (index.indexOf('msa') > -1) {
        if (index.indexOf('each') < 0) obj = window.dates.msa[index.substr(index.length - 1) - 1]
        else obj = obj = window.dates.msa[3]
      } else if (index.indexOf('nissay') > -1) {
        if (index.indexOf('each') < 0) obj = window.dates.nissay[index.substr(index.length - 1) - 1]
        else obj = obj = window.dates.nissay[3]
      }
      temp = 0
      $('.input_check').each(function (ie) {
        var tr = $(this).is(':checked')
        if (tr) {
          console.log(ie)
          obj.splice(ie - temp, 1)
          temp = temp + 1
        }
      })
      $('.dr').addClass('disable')
    }
  }
}
</script>
