<template>
  <router-view></router-view>
</template>

<style src="./assets/style.css"></style>

<script>
  import $ from './assets/jquery-1.12.4.min'

  // Adjust DOM Heights
  $(window).on('load orientationchange resize', () => {
    const h = $(window).height()
    const h1 = $('#header').height()
    const h2 = $('#function_bar').height() + 30
    const h3 = $('#tab').height() + 1
    const h4 = h1 + h2 + h3
    const h5 = $('#data_list_container_title').height()
    const h5p1 = $('#popup01 #data_list_container_title').height()
    const h5p2 = $('#popup02 #data_list_container_title').height()
    const h5p3 = $('#popup03 #data_list_container_title').height()
    const h5p4 = $('#popup04 #data_list_container_title').height()
    const h5p5 = $('#popup05 #data_list_container_title').height()
    const h5p6 = $('#popup06 #data_list_container_title').height()
    const h5p7 = $('#popup07 #data_list_container_title').height()

    let thh = 0
    if ($('#data_table thead').length > 0) {
      thh = $('#data_table thead').height()
    }
    const c = h - h4 - thh

    const m1 = c * 620 / 1416
    const m2 = c * 348 / 1416

    const sh = h - h1
    const hb = $('.btn_container').height()
    const hbc = $('.btn_container_close').height()

    const stc = sh - hb

    const hsh = $('.sheet_head').height()
    const hshp1 = $('#popup01 .popup_inner .sheet_head').height()
    const hshp2 = $('#popup02 .popup_inner .sheet_head').height()
    const hshp3 = $('#popup03 .popup_inner .sheet_head').height()
    const hshp4 = $('#popup04 .popup_inner .sheet_head').height()
    const hshp5 = $('#popup05 .popup_inner .sheet_head').height()
    const hshp6 = $('#popup06 .popup_inner .sheet_head').height()
    const hshp7 = $('#popup07 .popup_inner .sheet_head').height()
    const sh2 = h - h1 - hsh
    const sh2p1 = h - hshp1 - 133
    const sh2p2 = h - hshp2 - 133
    const sh2p3 = h - hshp3 - 133
    const sh2p4 = h - hshp4 - 133
    const sh2p5 = h - hshp5 - 133
    const sh2p6 = h - hshp6 - 133
    const sh2p7 = h - hshp7 - 133
    const sh3 = h - h1 - h5 - hsh
    const sh3p1 = h - 60 - h5p1 - hshp1
    const sh3p2 = h - 60 - h5p2 - hshp2
    const sh3p3 = h - 60 - h5p3 - hshp3
    const sh3p4 = h - 60 - h5p4 - hshp4
    const sh3p5 = h - 60 - h5p5 - hshp5
    const sh3p6 = h - 60 - h5p6 - hshp6
    const sh3p7 = h - 60 - h5p7 - hshp7
    const sh4p1 = sh2 - 130
    const sh4 = h - hsh - hb - 60
    const pb = hb + 100

    const ch = sh - h2
    const c2 = sh2 - hbc - thh

    $('#menu_container').css('height', c)
    $('#menu').css('height', c)

    $('#data_table tbody').css('height', c)

    $('#data_table.bottom_btn tbody').css('height', c2)

    $('#container.bottom_btn').css('height', sh2)

    $('.entry_schedule a').css('height', m1)
    $('.entry_result a').css('height', m1)

    $('.case_management a').css('height', m2)
    $('.schedule_management a').css('height', m2)

    $('#schedule_results_data').css('height', c)
    $('#schedule_results_table tbody').css('height', c)

    $('.sheet').not('.popup .sheet').css('height', sh)
    $('.popup .sheet').css('height', sh4)
    $('.sheet_table_container').css('height', stc)
    $('.company_info.sheet, .target_takeover.sheet').css('height', '100%')

    $('.sheet.type02').not('.popup .sheet.type02').css('height', sh2)
    $('.popup .sheet.type02').not('.popup .sheet.type02.popuptype02').css('height', 'auto')
    $('.popup .sheet.type02.popuptype02').css('height', hshp1)

    $('.data_list_container').not('#popup01 .data_list_container' || '#popup02 .data_list_container').css('height', sh2)
    $('#popup01 .data_list_container').css('height', sh2p1)
    $('#popup02 .data_list_container').css('height', sh2p2)
    $('#popup03 .data_list_container').css('height', sh2p3)
    $('#popup04 .data_list_container').css('height', sh2p4)
    $('#popup05 .data_list_container').css('height', sh2p5)
    $('#popup06 .data_list_container').css('height', sh2p6)
    $('#popup07 .data_list_container').css('height', sh2p7)
    $('.company_info .data_list_container').css('height', sh4p1)

    $('.data_list_container02').not('.popup .data_list_container02').css('height', sh3)
    $('#popup01 .data_list_container02').css('height', sh3p1)
    $('#popup02 .data_list_container02').css('height', sh3p2)
    $('#popup03 .data_list_container02').css('height', sh3p3)
    $('#popup04 .data_list_container02').css('height', sh3p4)
    $('#popup05 .data_list_container02').css('height', sh3p5)
    $('#popup06 .data_list_container02').css('height', sh3p6)
    $('#popup07 .data_list_container02').css('height', sh3p7)

    $('.sheet_contets').css('padding-bottom', pb)
    $('#calendar_table').css('height', ch)
  })
  /* DOM event handler */
  $(document).ready(function () {
    /* Inputbox check */
    $(document).on('click', '.input_check', function () {
      /* Check if inputbox checked */
      if ($('.input_check:checked').length > 0) {
        $('#function_bar li.dr').removeClass('disable')
      } else {
        $('#function_bar li.dr').addClass('disable')
      }
    })
  })
</script>
