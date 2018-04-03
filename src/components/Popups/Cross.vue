<template>
  <div id="cross" class="popup" v-show="cross.isVisible">
    <div class="popup_inner">
      <div class="sheet_head">
        <div id="tab_bar">
          <ul id="tab_control01a" class="tab full">
            <li :class="{ cr: cross.tab === 0 }"><a href="#" @click.prevent="changePopupTab({ type: 'cross', index: 0 })">夕一ゲツ卜</a></li>
            <li :class="{ cr: cross.tab === 1 }"><a href="#" @click.prevent="changePopupTab({ type: 'cross', index: 1 })">企業情報</a></li>
            <li :class="{ cr: cross.tab === 2 }"><a href="#" @click.prevent="changePopupTab({ type: 'cross', index: 2 })">その他企業傭報</a></li>
            <li :class="{ cr: cross.tab === 3 }"><a href="#" @click.prevent="changePopupTab({ type: 'cross', index: 3 })">代表{猿者 - キ一マン願</a></li>
          </ul>
        </div>
        <!--/tab_bar-->
      </div>
      <!--/sheet_head-->
      <ul id="popup_content">
        <li id="popup_sheet01" v-show="cross.tab === 0">
          <!--tab01-->
          <div class="sheet">
            <form action="">
              <div class="sheet_contets_wide">
                <!-- line 1 -->
                <div id="line1" class="info_line">
                  <div class="iblocks">
                    <div class="idtemp tmp06">
                      <div class="update"><div>更新</div></div>
                      <div class="name">Sample</div>
                    </div>
                    <div class="idinfo">
                      027007477
                    </div>
                  </div>
                  <div class="iblocks">
                    <div class="idtemp tmp04">
                      <div class="name">タ一ゲ`ヅ ト名</div>
                    </div>
                    <div class="idinfo">
                      株式会社　大藤
                    </div>
                  </div>
                </div>
                <div class="clean"></div>
                <!-- line 2 -->
                <div id="line2" class="info_line">
                  <div class="iblocks">
                    <div class="idtemp tmp06">
                      <div class="update"><div>更新</div></div>
                      <div class="name">代理店 扱者CD</div>
                    </div>
                    <div class="idinfo">
                      XXXXXXXXX
                    </div>
                  </div>
                  <div class="iblocks">
                    <div class="idtemp tmp04">
                      <div class="name">代理店名 扱者名</div>
                    </div>
                    <div class="idinfo">
                      代理店・扱者なし
                    </div>
                  </div>
                </div>
                <!-- line 2 -->
                <div class="clean"></div>

                <div id="line3" class="cross_tb_block">
                  <table class="t01">
                    <tr class="r01">
                      <td class="d01">
                        <table class="t02">
                          <tr class="r02">
                            <td class="d02">
                              <table>
                                <tr>
                                  <th colspan="2">TS</th>
                                  <th rowspan="2">TC</th>
                                  <th rowspan="2">介護</th>
                                  <th rowspan="2">労務</th>
                                </tr>
                                <tr>
                                  <th>拠点</th>
                                  <th>Sample</th>
                                </tr>
                                <tr>
                                  <td>
                                    <select name="">
                                      <option></option>
                                    </select>
                                  </td>
                                  <td>
                                    <input type="text" />
                                  </td>
                                  <td>                                   
                                  </td>
                                  <td> 
                                    <input type="checkbox" class="input_check"/>
                                  </td>
                                  <td> 
                                    <input type="checkbox" class="input_check"/>                                  
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr class="r02">
                            <td class="d02">
                              <table>
                                <tr>
                                  <th colspan="5">既契約状況</th>
                                </tr>
                                <tr>
                                  <td> 
                                    <input type="checkbox" class="input_check"/>自動車
                                  </td>
                                  <td> 
                                    <input type="checkbox" class="input_check"/>火災
                                  </td>
                                  <td> 
                                    <input type="checkbox" class="input_check"/>Sample
                                  </td>
                                  <td> 
                                    <input type="checkbox" class="input_check"/>新重
                                  </td>
                                  <td> 
                                    <input type="checkbox" class="input_check"/>その他
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td class="d01">
                        <table class="standalone t02">
                          <tr>
                            <th colspan="2">活動記録</th>
                          </tr>
                          <tr class="subheading">
                            <td>日時</td>
                            <td>内容</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
                <!-- line3 -->
                <!-- sub functional button line -->
                <div class="sub_function_btn">
                  <ul class="new-kansu">
                    <li class="cr"><p class="btn_add"><a href="#" @click="togglePopupVisible('cross')">新規追加</a></p></li>
                    <li class="disable dr"><p class="btn_add"><a href="#" @click="">担当変更</a></p></li>
                    <li class="disable dr"><p class="btn_add"><a href="#" @click="removeItem($route.name)">削除</a></p></li>
                  </ul>
                </div>
                <!-- sub functional button line -->
                <!-- tab line -->
                <div class="sub_tab">
                  <ul class="new-tab">
                    <li :class="{ cr: subtab === 0 }"><p class="btn_add"><a href="#" @click="subtab=0">基本情報</a></p></li>
                    <li :class="{ cr: subtab === 1 }"><p class="btn_add"><a href="#" @click="subtab=1">その他-懺考</a></p></li>
                    <li :class="{ cr: subtab === 2 }"><p class="btn_add"><a href="#" @click="subtab=2">TS</a></p></li>
                    <li :class="{ cr: subtab === 3 }"><p class="btn_add"><a href="#" @click="subtab=3">個別鸞策</a></p></li>
                  </ul>
                </div>
                <ul id="subtab_container">
                  <li id="popup_sheet01" v-show="subtab === 0">
                    <table>
                      <tr>
                        <th></th>
                        <th>分区</th>
                        <th>種目</th>
                        <th>商品名</th>
                        <th>見込・<br>成約時期</th>
                        <th>見込確度・<br>成約</th>
                        <th>見込・成約<br>保険料（万円）</th>                        
                        <th>担当社順</th>
                      </tr>
                      <tr>
                        <td><input type="checkbox" class="input_check"/></td>
                        <td>
                          <select name="">
                            <option></option>
                          </select>
                        </td>
                        <td>
                          <select name="">
                            <option></option>
                          </select>
                        </td>
                        <td>
                          <select name="">
                            <option></option>
                          </select>
                        </td>
                        <td><datepicker v-model="date"></datepicker></td>
                        <td>
                          <select name="" class="noarrow">
                            <option value="">S（採用）</option>
                            <option value="">A</option>
                            <option value="">B</option>
                            <option value="">C</option>
                            <option value="" selected>D（ターゲット登録）</option>
                            <option value="">ドロップ</option>
                          </select>
                        </td>
                        <td><input type="text"/></td>
                        <td>RABI課支社員</td>
                      </tr>
                    </table>
                  </li>
                  <li id="popup_sheet01" v-show="subtab === 1">
                      <table>
                        <tr>
                          <th></th>
                          <th>分区</th>
                          <th>種目</th>
                          <th>商品名</th>
                          <th>見込・<br>成約時期</th>
                          <th></th>
                        </tr>
                        <tr>
                          <td><input type="checkbox" class="input_check"/></td>
                          <td>
                            <select name="">
                              <option></option>
                            </select>
                          </td>
                          <td>
                            <select name="">
                              <option></option>
                            </select>
                          </td>
                          <td>
                            <select name="">
                              <option></option>
                            </select>
                          </td>
                          <td><datepicker v-model="date"></datepicker></td>
                          <td>
                            <select name="" class="noarrow">
                              <option value="">S（採用）</option>
                              <option value="">A</option>
                              <option value="">B</option>
                              <option value="">C</option>
                              <option value="" selected>D（ターゲット登録）</option>
                              <option value="">ドロップ</option>
                            </select>
                          </td>
                          <td><input type="text"/></td>
                          <td>RABI課支社員</td>
                          <td></td>
                        </tr>
                    </table>
                  </li>
                  <li id="popup_sheet01" v-show="subtab === 2">
                    <table>
                        <tr>
                          <th></th>
                          <th>分区</th>
                          <th>種目</th>
                          <th>商品名</th>
                          <th>見込・<br>成約時期</th>
                          <th>見込確度・<br>成約</th>
                          <th>見込・成約<br>保険料（万円）</th>                        
                          <th>担当社順</th>
                        </tr>
                        <tr>
                          <td><input type="checkbox" class="input_check"/></td>
                          <td>
                            <select name="">
                              <option></option>
                            </select>
                          </td>
                          <td>
                            <select name="">
                              <option></option>
                            </select>
                          </td>
                          <td>
                            <select name="">
                              <option></option>
                            </select>
                          </td>
                          <td><datepicker v-model="date"></datepicker></td>
                          <td>
                            <select name="" class="noarrow">
                              <option value="">S（採用）</option>
                              <option value="">A</option>
                              <option value="">B</option>
                              <option value="">C</option>
                              <option value="" selected>D（ターゲット登録）</option>
                              <option value="">ドロップ</option>
                            </select>
                          </td>
                          <td><input type="text"/></td>
                          <td>RABI課支社員</td>
                        </tr>
                    </table>
                  </li>
                  <li id="popup_sheet01" v-show="subtab === 3">
                    <table>
                        <tr>
                          <th></th>
                          <th>分区</th>
                          <th>種目</th>
                          <th>商品名</th>
                          <th>見込・<br>成約時期</th>
                          <th></th>
                        </tr>
                        <tr>
                          <td><input type="checkbox" class="input_check"/></td>
                          <td>
                            <select name="">
                              <option></option>
                            </select>
                          </td>
                          <td>
                            <select name="">
                              <option></option>
                            </select>
                          </td>
                          <td>
                            <select name="">
                              <option></option>
                            </select>
                          </td>
                          <td><datepicker v-model="date"></datepicker></td>
                          <td style=""></td>
                        </tr>
                    </table>
                  </li>
                </ul>
              </div>
              <!--/sheet_contets-->
              <ul class="btn_container">
                <li class="btn_submit">
                  <input type="button" value="確定" @click="setcrossValue(1, $route.name)">
                </li>
                <li class="btn_reset popup_close">
                  <input id="button_reset" type="reset" value="キャンセル" @click="togglePopupVisible('cross')">
                </li>
              </ul>
            </form>
          </div>
          <!--/sheet-->
        </li>
        
        <li id="popup_sheet02" v-show="cross.tab === 1">
          <!--/04.html-->
          <div class="line">
            <table>
              <tr>
                <td class="heading">企業コ一ド</td>
                <td>027007477</td>
                <td class="heading">企業名</td>
                <td>株式会社　大藤</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">代表者氏名</td>
                <td>斉藤　昌勝</td>
                <td class="heading">商号力 ナ編集後</td>
                <td>ﾀﾞｲﾄｳ</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">電話番号</td>
                <td></td>
                <td class="heading">都道府県コ一 ド</td>
                <td>25</td>
                <td class="heading">市野村コード</td>
                <td></td>
              </tr>
            </table>
          </div>
          <div class="clean"></div>
          <div class="line">
            <table class="enroll">
              <tr>
                <td class="heading">主業種名称</td>
                <td></td>
                <td class="heading">今期決算期</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">従業種名称</td>
                <td></td>
                <td class="heading">今期売上高(百万円)</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">所在地</td>
                <td></td>
                <td class="heading">今欟翼賛金(万円)</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">設立年月</td>
                <td></td>
                <td class="heading">前期売上冨(百万円)</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">資本金(万円)</td>
                <td></td>
                <td class="heading">前期利益金(万円)</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">従業員数</td>
                <td></td>
                <td class="heading">評点</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">事業所数</td>
                <td></td>
                <td class="heading">業種别全国売上ランク</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">株主名1</td>
                <td></td>
                <td class="heading">業種别都道府泉隷]社数</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">株主名2</td>
                <td></td>
                <td class="heading">業種隷}都道府呆別ランク</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">主要仕入先</td>
                <td></td>
                <td class="heading">取弓ー先全敲積名1</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">主要廠売先</td>
                <td></td>
                <td class="heading">取弓ー先全敲積名2</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">代麦者出身地</td>
                <td></td>
                <td class="heading">代麦者出身校</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">代表者生年月日</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>

            <!--/sheet_contets_wide-->
            <ul class="btn_container">
              <li class="btn_submit">
                <input class="company_name_submit" type="button" value="確定">
              </li>
              <li class="btn_reset popup_close">
                <input type="reset" value="キャンセル" @click="togglePopupVisible('cross')">
              </li>
            </ul>
          <!--/sheet-->
          </div>
          <!--/sheet-->
        </li>
        <li id="popup_sheet02" v-show="cross.tab === 2">
          <!--/04.html-->
          <div class="line">
            <table class="company_info">
              <tr class="heading">
                <th colspan="6">企業情報</th>
              </tr>
              <tr>
                <td class="heading">創業</td>
                <td class="calendar">
                  <input type="text"/>年
                  <select name="">
                    <option v-for="i in 12">{{i}}</option>
                  </select>月
                </td>
                <td class="heading">企業理念</td>
                <td>株式会社　大藤</td>
                <td class="heading">企業ニ一ズ1</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">事業所数</td>
                <td><input type="text"/></td>
                <td class="heading">設立経偉</td>
                <td>ﾀﾞｲﾄｳ</td>
                <td class="heading">企業ニ一ズ2</td>
                <td></td>
              </tr>
              <tr>
                <td class="heading">電話番号</td>
                <td><input type="text"/></td>
                <td class="heading">意領域 (ゥリ)</td>
                <td>25</td>
                <td class="heading">课題1</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="heading">课題2</td>
                <td></td>
              </tr>
            </table>
          </div>
          <div class="clean"></div>
          <!-- line 2 -->
          <div class="line">
            <table class="society_car company_info">
              <tr class="heading">
                <th colspan="10">社有車</th>
              </tr>
              <tr>
                <td class="heading">所有</td>
                <td><input type="text"/>台</td>
                <td class="heading">リース</td>
                <td><input type="text"/>台</td>
                <td class="heading">フリ一ト</td>
                <td><input type="text"/>台</td>
                <td class="heading">フリ一ト</td>
                <td><input type="text"/></td>
                <td class="heading">フリ一ト</td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td class="heading">車検工場</td>
                <td colspan="5" class="cp05"><input type="text"/></td>
                <td class="heading">設立経偉</td>
                <td colspan="3" class="cp03"><input type="text"/></td>
              </tr>
            </table>

            <table class="organic company_info">
              <tr class="heading">
                <th colspan="6">臓域等</th>
                <th colspan="4">臓域等</th>
              </tr>
              <tr>
                <td class="heading">団体扱</td>
                <td><input type="text"/></td>
                <td class="heading">集団扱</td>
                <td><input type="text"/></td>
                <td class="heading">集団名</td>
                <td><input type="text"/></td>
                <td class="heading">税理士</td>
                <td><input type="text"/></td>
                <td class="heading">顧聞社労士</td>
                <td><input type="text"/></td>
              </tr>
            </table>

            <table class="organic company_info">
              <tr class="heading">
                <th colspan="5">出先状況</th>
              </tr>
              <tr>
                <td class="heading">本社 ・ 支社等状況</td>
                <td class="heading">所在地</td>
                <td class="heading">所在地</td>
                <td class="heading">保険手配状況</td>
                <td class="heading">その他情報</td>
              </tr>
              <tr>
                <td><input type="text"/></td>
                <td>
                  <select>
                    <option>所有</option>
                    <option>賃貸</option>
                  </select>
                </td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>                
              </tr>
            </table>
          </div>  

          <!-- line 03 -->
          <div class="line extrainfo">
            <table class="extra">
              <tr class="heading">
                <th>薫業藻則</th>
                <th>退轟金攣定</th>
                <th>決算書薫</th>
                <th>管理規定<br/>マイカー通勤</th>
                <th>Sample1</th>
                <th>災害補償規定</th>
                <th>弔慰金規定</th>
                <th>管理規定</th>
                <th>会社案内</th>
                <th>Sample2</th>
              </tr>
              <tr>
                <td>
                  <select>
                    <option>入手</option>
                    <option>昧</option>
                    <option>舞</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>入手</option>
                    <option>昧</option>
                    <option>舞</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>入手</option>
                    <option>昧</option>
                    <option>舞</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>入手</option>
                    <option>昧</option>
                    <option>舞</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>入手</option>
                    <option>昧</option>
                    <option>舞</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>入手</option>
                    <option>昧</option>
                    <option>舞</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>入手</option>
                    <option>昧</option>
                    <option>舞</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>入手</option>
                    <option>昧</option>
                    <option>舞</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>入手</option>
                    <option>昧</option>
                    <option>舞</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>入手</option>
                    <option>昧</option>
                    <option>舞</option>
                  </select>
                </td>
              </tr>
            </table>

            <table class="extra">
              <tr class="heading">
                <th>ISO9001s</th>
                <th>ISO14000s</th>
                <th>HACCP</th>
                <th>pマー通勤</th>
                <th>OSHMS JISHA</th>
                <th>経営事エ頁審木</th>
                <th>Gマ一ク</th>
                <th>ク`u"経蟻膏</th>
                <th>その他</th>
                <th>その他</th>
              </tr>
              <tr>
                <td>
                  <select>
                    <option> </option>
                    <option>取得</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option> </option>
                    <option>取得</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option> </option>
                    <option>取得</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option> </option>
                    <option>取得</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option> </option>
                    <option>取得</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option> </option>
                    <option>取得</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option> </option>
                    <option>取得</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option> </option>
                    <option>取得</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option> </option>
                    <option>取得</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option> </option>
                    <option>取得</option>
                  </select>
                </td>
              </tr>
            </table>
          </div>
            <!--/sheet_contets_wide-->
            <ul class="btn_container">
              <li class="btn_submit">
                <input class="company_name_submit" type="button" value="確定">
              </li>
              <li class="btn_reset popup_close">
                <input type="reset" value="キャンセル" @click="togglePopupVisible('cross')">
              </li>
            </ul>
          <!--/sheet-->
          <!--/sheet-->
        </li>
        <li id="popup_sheet02" v-show="cross.tab === 3">
          <!--/04.html-->
          <div class="line">
            <table class="extra">
              <tr class="heading">
                <th colspan="4">夕一ゲツ ト</th>
              </tr>
              <tr>
                <td class="heading">名前</td>
                <td><input type="text" /></td>
                <td class="heading">生年月日</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td class="heading">住所</td>
                <td><input type="text"/></td>
                <td class="heading">出身地</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td class="heading">出身校</td>
                <td><input type="text"/></td>
                <td class="heading">酪歴</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td class="heading">趣味</td>
                <td><input type="text"/></td>
                <td class="heading">家族構成</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td class="heading">嗜好</td>
                <td><input type="text"/></td>
                <td class="heading">人驚</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td class="heading">加入団体</td>
                <td colspan="3"><input type="text"/></td>
              </tr>
              <tr>
                <td class="heading">対応上外せなL`<br/>ポィント</td>
                <td colspan="3"><input type="text" /></td>
              </tr>
            </table>
          </div>
          <div class="clean"></div>
          <div class="line">
            <table class="extra">
              <tr class="heading">
                <th colspan="4">キ一マン情鞭ー1</th>
                <th colspan="4">キ一マン情鞭ー2</th>
              </tr>
              <tr>
                <td class="heading">名前</td>
                <td colspan="3"><input type="text" /></td>
                <td class="heading">名前</td>
                <td colspan="3"><input type="text" /></td>
              </tr>
              <tr>
                <td class="heading">生年月日</td>
                <td class="calendar" colspan="3">
                  <input type="text"/>年
                  <select name="">
                    <option v-for="i in 12">{{i}}</option>
                  </select>月
                  <select name="">
                    <option v-for="i in 30">{{i}}</option>
                  </select>日
                </td>
                <td class="heading">生年月日</td>
                <td class="calendar" colspan="3">
                  <input type="text"/>年
                  <select name="">
                    <option v-for="i in 12">{{i}}</option>
                  </select>月
                  <select name="">
                    <option v-for="i in 30">{{i}}</option>
                  </select>日
                </td>
              </tr>
              <tr>
                <td class="heading">役鷺</td>
                <td><input type="text"/></td>
                <td class="heading">住所</td>
                <td><input type="text" /></td>
                <td class="heading">役鷺</td>
                <td><input type="text"/></td>
                <td class="heading">住所</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td class="heading">出身地</td>
                <td><input type="text"/></td>
                <td class="heading">出身校</td>
                <td><input type="text" /></td>
                <td class="heading">出身地</td>
                <td><input type="text"/></td>
                <td class="heading">出身校</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td class="heading">略歴</td>
                <td><input type="text"/></td>
                <td class="heading">趣味</td>
                <td><input type="text" /></td>
                <td class="heading">略歴</td>
                <td><input type="text"/></td>
                <td class="heading">趣味</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td class="heading">家族構成</td>
                <td><input type="text"/></td>
                <td class="heading">嗜好</td>
                <td><input type="text" /></td>
                <td class="heading">家族構成</td>
                <td><input type="text"/></td>
                <td class="heading">嗜好</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td class="heading">人脈</td>
                <td><input type="text"/></td>
                <td class="heading">加入団体</td>
                <td><input type="text" /></td>
                <td class="heading">人脈</td>
                <td><input type="text"/></td>
                <td class="heading">加入団体</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td class="heading">ヌ寸応上夕トせなし丶ポイント</td>
                <td colspan="3"><input type="text"/></td>
                <td class="heading">ヌ寸応上夕トせなし丶ポイント</td>
                <td colspan="3"><input type="text"/></td>
              </tr>
              <tr>
                <td class="heading">何のキ一マン?</td>
                <td colspan="3"><input type="text"/></td>
                <td class="heading">何のキ一マン?</td>
                <td colspan="3"><input type="text"/></td>
              </tr>
            </table>
          </div>
            <!--/sheet_contets_wide-->
            <ul class="btn_container">
              <li class="btn_submit">
                <input class="company_name_submit" type="button" value="確定">
              </li>
              <li class="btn_reset popup_close">
                <input type="reset" value="キャンセル" @click="togglePopupVisible('cross')">
              </li>
            </ul>
          <!--/sheet-->
          <!--/sheet-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import $ from '../.././assets/jquery-1.12.4.min'
import datepicker from 'vue-date'

export default {
  name: 'cross',
  components: {
    datepicker
  },
  computed: {
    ...mapGetters({
      'cross': 'popup/cross'
    })
  },
  data () {
    return {
      date: '2017-03',
      subtab: 0
    }
  },
  methods: {
    ...mapActions({
      'togglePopupVisible': 'popup/togglePopupVisible',
      'changePopupTab': 'popup/changePopupTab'
    }),
    setcrossValue (index, route) {
      var tr = $('#popup_sheet0' + index + ' ul input:checked')
      if (route.indexOf('items-incomes') >= 0) {
        $('.popOn .planTitle').html(tr.parent().text())
      } else {
        $('.output_text.cross').html(tr.parent().text())
      }
      this.togglePopupVisible('cross')
    }
  }
}
</script>
