<template>
  <header id="header">
    <!-- Index -->
    <p class="label_menu" v-show="$route.name === 'index'">メインメニュー</p>
    <p class="date" v-show="$route.name === 'index'">{{date}}</p>

    <!-- Inputs -->
    <p class="label_menu" v-show="$route.name === 'inputs-plan'">活動記録シート　予定</p>
    <p class="date" v-show="$route.name === 'inputs-plan'">{{date}}</p>

    <p class="label_menu" v-show="$route.name === 'inputs-result'">活動記録シート　結果</p>
    <p class="date" v-show="$route.name === 'inputs-result'">{{date}}</p>

    <!-- Schedules -->
    <ul class="schedule_list" v-show="$route.name.includes('schedules') || $route.name.includes('approved-list')">
      <li class="label_menu" :class="{ cr: $route.name.includes('schedules') }" v-show="$route.name.includes('schedules') || $route.name.includes('approved-list')"><a href="/schedules">スケジュール・行動管理</a></li>
      <li class="label_menu" :class="{ cr: $route.name.includes('approved-list') }" v-show="$route.name.includes('schedules') || $route.name.includes('approved-list')"><a href="/schedules/approved-list">承認リスト</a></li>
    </ul>
    <p class="date" v-show="$route.name.includes('schedules') && !$route.name.includes('calendar') ">{{date}}</p>

    <!-- Items Incomes -->
    <nav id="nav" v-show="$route.name.includes('items-incomes')">
      <ul>
        <li :class="{ cr: $route.name.includes('items-incomes-new') }">
          <router-link :to="{ name: 'items-incomes-new-1' }">新設活動</router-link>
        </li>
        <li :class="{ cr: $route.name.includes('items-incomes-recruit') }">
          <router-link :to="{ name: 'items-incomes-recruit-1' }">採用活動</router-link>
        </li>
        <li :class="{ cr: $route.name.includes('items-incomes-sales') }">
          <router-link :to="{ name: 'items-incomes-sales-1' }">増収対策</router-link>
        </li>
        <li :class="{ cr: $route.name.includes('items-incomes-cross') }">
          <router-link :to="{ name: 'items-incomes-cross-1' }">新設・クロス</router-link>
        </li>
        <li :class="{ cr: $route.name.includes('items-incomes-msa') }">
          <router-link :to="{ name: 'items-incomes-msa-1' }">MSA生命</router-link>
        </li>
        <li :class="{ cr: $route.name.includes('items-incomes-nissay') }">
          <router-link :to="{ name: 'items-incomes-nissay-1' }">日本生命</router-link>
        </li>
      </ul>
    </nav>

    <p class="btn_menu"><a id="btn_menu" href="" @click.prevent="isMenuOpened = !isMenuOpened">MENU</a></p>
    <ul class="nav_menu" v-show="isMenuOpened" v-on-clickaway="away">
      <template v-if="type === 'retail'">
        <li><router-link :to="{ name: 'index' }">メインメニュー</router-link></li>
        <li><router-link :to="{ name: 'schedules' }">スケジュール・行動管理</router-link></li>
        <li><router-link :to="{ name: 'items-incomes' }">案件・増収管理</router-link></li>
        <li><a href="">新獲カレンダー</a></li>
        <li><a href="">引継情報</a></li>
        <li><a href="">本社報告</a></li>
        <li><a href="">本社報告（議事録）</a></li>
        <li><a href="">部支店成果報告</a></li>
        <li><a href="">チーム</a></li>
        <li><a href="">各種出力帳票</a></li>
        <li><a href @click.prevent="logout()">ログアウト</a></li>
      </template>
      <template v-if="type === 'dealer'">
        <li><router-link :to="{ name: 'index' }">メインメニュー</router-link></li>
        <li><router-link :to="{ name: 'schedules' }">スケジュール・行動管理</router-link></li>
        <li><a href="">案件管理</a></li>
        <li><a href="">KPI指標進捗管理</a></li>
        <li><a href="">満期到来台数</a></li>
        <li><a href="">引継情報</a></li>
        <li><a href="">本社報告</a></li>
        <li><a href="">チーム</a></li>
        <li><a href="">各種出力帳票</a></li>
        <li><a href @click.prevent="logout()">ログアウト</a></li>
      </template>
    </ul>
  </header><!--/header-->
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
// Global Variable for Day
var day = ['月', '火', '水', '木', '金', '土', '日']

export default {
  name: 'globalHeader',
  mixins: [clickaway],
  data () {
    return {
      isMenuOpened: false,
      date: new Date().getFullYear() + '年' + (new Date().getMonth() + 1) + '月' + new Date().getDate() + '日 (' + day[new Date().getDay()] + ')'
    }
  },
  computed: {
    ...mapGetters({
      'type': 'auth/type'
    })
  },
  methods: {
    away (e) {
      var isMenuButton = e.target.id === 'btn_menu'
      if (isMenuButton) return
      this.isMenuOpened = false
    },
    logout () {
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.$router.push({ name: 'login' })
        })
    }
  }
}
</script>
