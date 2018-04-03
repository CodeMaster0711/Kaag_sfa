<template>
  <div id="p-schedules-calendar">
    <div class="line sl01">
      <select>
        <option>RABI課支社</option>
      </select>
      <datepicker v-model="date"></datepicker><p class="btn_calendar"><a href=""><img src="../../assets/images/calendar.svg" alt=""></a></p>
    </div>       
    <div class="clean"></div>
    <div class="line sl02">
      <table>
        <tr>
          <th class="heading">社員名</th>
          <th class="heading">2月27日の退</th>
          <th class="heading">3月6日の退</th>
          <th class="heading">3月13日の退</th>
          <th class="heading">3月20日の退</th>
          <th class="heading">3月27日の退</th>
          <th class="heading"></th>
        </tr>
        <tr>
          <td>RABI課支社</td>
          <td class="approved"><a href="#" @click.prevent="approveShow">承認済み</a></td>
          <td><a href="#" @click.prevent="approveShow">調認</a></td>
          <td><a href="#" @click.prevent="approveShow">調認</a></td>
          <td><a href="#" @click.prevent="approveShow">調認</a></td>
          <td><a href="#" @click.prevent="approveShow">調認</a></td>
          <td></td>
        </tr>
        <tr>
          <td>RABI課支社</td>
          <td><a href="#" @click.prevent="approveShow">調認</a></td>
          <td><a href="#" @click.prevent="approveShow">調認</a></td>
          <td><a href="#" @click.prevent="approveShow">調認</a></td>
          <td class="approved"><a href="#" @click.prevent="approveShow">承認済み</a></td>
          <td><a href="#" @click.prevent="approveShow">調認</a></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
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
    <!-- particular Popup for Scheduler -->
    <div class="approved-popup">
      <!-- header -->
      <div class="a-header">
        <div class="button" :class="{ disable: !disable }" @click.prevent="disable = !disable">
          <span v-show="disable"><i class="fa fa-check-square-o" aria-hidden="true"></i>承認する</span>
          <span v-show="!disable">承認済</span>
        </div>
        <div class="span">RABI宮担<br/><span class="date">2017年2月27日 ~ 2017年3月5日</span></div>
        <div class="button right" @click.prevent="disapproveShow">
          閉じる
        </div>
      </div>
      <!-- header end -->
      <div class="clean"></div>
      <!-- scheduler -->
      <div class="scheduler">
        <div id="scheduler_body">
        </div>
      </div>
      <!-- scheduler end -->

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
  </div>
</template>

<script>
import Asides from '../../components/ItemsIncomes/Asides'
import { z } from '../../utils'
import datepicker from 'vue-date'
import jQuery from 'jquery'
import moment from 'moment'
import '../.././assets/fullcalendar/fullcalendar.css'
import '../.././assets/fullcalendar/fullcalendar'
jQuery(document).ready(function () {
  var todayDate = moment().startOf('day')
  var YM = todayDate.format('YYYY-MM')
  var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD')
  var TODAY = todayDate.format('YYYY-MM-DD')
  var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD')
  jQuery('#scheduler_body').fullCalendar({
    header: {
      left: '',
      right: ''
    },
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    navLinks: true,
    defaultView: 'agendaWeek',
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
})
/* Vue 2.0 snippet */
export default {
  components: {
    Asides,
    datepicker
  },
  data () {
    return {
      z,
      times: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      date: '2017-03-30',
      approvedVisible: 1,
      disable: 0
    }
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
    },
    approveShow () {
      jQuery('.approved-popup').css('margin-left', 0)
    },
    disapproveShow () {
      jQuery('.approved-popup').css('margin-left', -10000)
    }
  }
}
</script>
