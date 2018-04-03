<template>
  <div id="p-schedules-calendar" class="initial">
    <div id="scheduler"></div>  
     <!-- footer -->
    <div class="footer">
      <table>
        <tr>
          <td>始業時刻</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>始業時刻</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    <!-- footer end -->
  </div>
</template>
<script>
import Asides from '../../components/ItemsIncomes/Asides'
import { z } from '../../utils'
// import jQuery from '../.././assets/jquery-1.12.4.min'
import jQuery from 'jquery'
import moment from 'moment'

import '../.././assets/fullcalendar/fullcalendar.css'
import '../.././assets/fullcalendar/fullcalendar'

export default {
  components: {
    Asides
  },
  data () {
    return {
      z,
      times: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
  },
  mounted: function () {
    var todayDate = moment().startOf('day')
    var YM = todayDate.format('YYYY-MM')
    var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD')
    var TODAY = todayDate.format('YYYY-MM-DD')
    var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD')

    jQuery('#scheduler').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      navLinks: true,
      locale: 'ja',
      events: [
        {
          title: 'All Day Event',
          start: YM + '-01'
        },
        {
          title: 'Long Event',
          start: YM + '-07',
          end: YM + '-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: YM + '-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: YM + '-16T16:00:00'
        },
        {
          title: 'Conference',
          start: YESTERDAY,
          end: TOMORROW
        },
        {
          title: 'Meeting',
          start: TODAY + 'T10:30:00',
          end: TODAY + 'T12:30:00'
        },
        {
          title: 'Lunch',
          start: TODAY + 'T12:00:00'
        },
        {
          title: 'Meeting',
          start: TODAY + 'T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: TODAY + 'T17:30:00'
        },
        {
          title: 'Dinner',
          start: TODAY + 'T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: TOMORROW + 'T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: YM + '-28'
        }
      ]
    })
  },
  computed: {
    type () { return this.$route.query.type },
    period () { return this.$route.query.period },
    holiday () { return this.$route.query.holiday }
  },
  methods: {
    jumpPlanResult (ev) {
      ev.stopPropagation()
     // :to="{ name: 'schedules-calendar', query: { type: 'plan-result', period: period, holiday: holiday } }
    }
  }
}
</script>