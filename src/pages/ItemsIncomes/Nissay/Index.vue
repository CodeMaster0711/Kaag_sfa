<template>
  <div id="p-items-incomes-nissay">

    <!-- #function_bar -->
    <function-bar pageType="nissay"></function-bar>

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
        { name: 'items-incomes-nissay-1', text: '基本情報1' },
        { name: 'items-incomes-nissay-2', text: '基本情報2' },
        { name: 'items-incomes-nissay-3', text: '基本情報3' },
        { name: 'items-incomes-nissay-each', text: '個別施策' }
      ]
    }
  }
}
</script>

