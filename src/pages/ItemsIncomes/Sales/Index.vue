<template>
  <div id="p-items-incomes-sales">

    <!-- #function_bar -->
    <function-bar pageType="sales"></function-bar>

    <div id="container">
      <div id="main">

        <!-- #tab -->
        <tab :items="tabItems"></tab>

        <!-- #data_table -->
        <router-view></router-view>

      </div><!--/main-->

      <!-- #asides -->
      <asides></asides>

    </div><!--/container-->
  </div>
</template>

<script>
import FunctionBar from '../../../components/ItemsIncomes/FunctionBar'
import Tab from '../../../components/ItemsIncomes/Tab'
import Asides from '../../../components/ItemsIncomes/Asides'

export default {
  components: {
    FunctionBar,
    Tab,
    Asides
  },
  data () {
    return {
      tabItems: [
        { name: 'items-incomes-sales-1', text: '基本情報1' },
        { name: 'items-incomes-sales-2', text: '基本情報2' },
        { name: 'items-incomes-sales-3', text: '基本情報3' }
      ]
    }
  }
}
</script>

