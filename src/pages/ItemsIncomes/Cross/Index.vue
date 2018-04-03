<template>
  <div id="p-items-incomes-cross">

    <!-- #function_bar -->
    <function-bar pageType="cross"></function-bar>

    <div id="container">
      <div id="main">

        <!-- #tab -->
        <tab :items="tabItems"></tab>

        <!-- #data_table -->
        <router-view></router-view>

      </div><!--/main-->

      <!-- #asides -->
      <asides :has-contract="true"></asides>

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
        { name: 'items-incomes-cross-1', text: '基本情報' },
        { name: 'items-incomes-cross-each', text: '個別施策' }
      ]
    }
  }
}
</script>
