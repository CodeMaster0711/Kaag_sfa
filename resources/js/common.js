$(function(){
    
    //登録案件表示切替
	 $(".project dd").on("click", function() { 
	 $(this).toggleClass("inactive");
	 });

    
    //MENU表示
	 $(".nav_menu").hide();
	 var nav_menu = 0;
	 
	    
	 $(".btn_menu").click(function () {
                if(nav_menu==0){
                $('.nav_menu').show();
                nav_menu=1;
                    
            } else {
                
                $('.nav_menu').hide();
                nav_menu=0;
            }
                return false;			
     });

        //社員切替ウィンドウ表示
        $("#member_list").hide();
        var btn_exchange = 0;

        $(".btn_exchange").click(function () {
            if(btn_exchange==0){
                $('#member_list').show();
                $(this).addClass('active');
                btn_exchange=1;
                
                //検索ウィンドウを閉じる
                $('#search_container').hide();
                btn_search=0;
                
            } else {
                $('#member_list').hide();
                $(this).removeClass('active');
                btn_exchange=0;
            }
                return false;			
        });
        
        //範囲外クリックで社員切替ウィンドウを閉じる
        $(document).on('click', function(evt){
        if( !$(evt.target).closest('#member_list').length ){
            $('#member_list').hide();
                $('.btn_exchange').removeClass('active');
                btn_exchange=0;
        }
        });
        
    
        //検索ウィンドウ表示
        $("#search_container").hide();
        var btn_search = 0;
    
        $(".search a").click(function () {
            if(btn_search==0){
                $('#search_container').show();
                btn_search=1;
                
                //社員切替ウィンドウを閉じる
                $('#member_list').hide();
                $('.btn_exchange').removeClass('active');
                btn_exchange=0;  
                
            } else {
                $('#search_container').hide();
                btn_search=0;
            }
                return false;			
        });
        
        //範囲外クリックで検索ウィンドウを閉じる
        $(document).on('click', function(evt){
        if( !$(evt.target).closest('#search_container').length ){
            $('#search_container').hide();
                btn_search=0;
        }
        });
    
        //アコーディオン
        $(".toggle_bar").next().hide();
        $(".toggle_bar").on("click", function() {
         $(this).next().slideToggle();
         $(this).toggleClass('open');
         return false;
        });

});

//高さ調整
$(window).on("load orientationchange resize", function(event) { 
	setupScreenSize();
	function setupScreenSize(){
        var h = $(window).height();
        var h1 = $('#header').height();
        var h2 = $('#function_bar').height() + 30;
        var h3 = $('#tab').height() + 1;
        var h4 = h1 + h2 + h3; 
		var h5 = $('#data_list_container_title').height();
		var h5p1 = $('#popup01 #data_list_container_title').height();
		var h5p2 = $('#popup02 #data_list_container_title').height();
		var h5p3 = $('#popup03 #data_list_container_title').height();
		var h5p4 = $('#popup04 #data_list_container_title').height();
		var h5p5 = $('#popup05 #data_list_container_title').height();
		var h5p6 = $('#popup06 #data_list_container_title').height();
		var h5p7 = $('#popup07 #data_list_container_title').height();

		var thh = 0;
		if( $("#data_table thead").length > 0 ) {
			thh = $("#data_table thead").height();
		}
        var c = h - h4 -thh;
    
        var m1 = c * 620/1416;
        var m2 = c * 348/1416;
        
        var sh = h - h1;
        var hb = $('.btn_container').height();
        var hbc = $('.btn_container_close').height();
    
        var stc = sh - hb;
    
        var hsh = $('.sheet_head').height();
        var hshp1 = $('#popup01 .popup_inner .sheet_head').height();
        var hshp2 = $('#popup02 .popup_inner .sheet_head').height();
        var hshp3 = $('#popup03 .popup_inner .sheet_head').height();
        var hshp4 = $('#popup04 .popup_inner .sheet_head').height();
        var hshp5 = $('#popup05 .popup_inner .sheet_head').height();
        var hshp6 = $('#popup06 .popup_inner .sheet_head').height();
        var hshp7 = $('#popup07 .popup_inner .sheet_head').height();
        var sh2 = h - h1 - hsh;
        var sh2p1 = h - hshp1 - 133;
        var sh2p2 = h - hshp2 - 133;
        var sh2p3 = h - hshp3 - 133;
        var sh2p4 = h - hshp4 - 133;
        var sh2p5 = h - hshp5 - 133;
        var sh2p6 = h - hshp6 - 133;
        var sh2p7 = h - hshp7 - 133;
        var sh3 = h - h1 - h5 - hsh;
        var sh3p1 = h - 60 - h5p1 - hshp1;
        var sh3p2 = h - 60 - h5p2 - hshp2;
        var sh3p3 = h - 60 - h5p3 - hshp3;
        var sh3p4 = h - 60 - h5p4 - hshp4;
        var sh3p5 = h - 60 - h5p5 - hshp5;
        var sh3p6 = h - 60 - h5p6 - hshp6;
        var sh3p7 = h - 60 - h5p7 - hshp7;
        var sh4 = h - hsh - hb - 60;
        var pb = hb + 100;
        
        var ch = sh - h2;
        var c2 = sh2 - hbc -thh;

        $("#menu_container").css("height", c );
        $("#menu").css("height", c );
    
        $("#data_table tbody").css("height", c );

        $("#data_table.bottom_btn tbody").css("height", c2 );
    
        $('#container.bottom_btn').css("height", sh2 );
        
        $(".entry_schedule a").css("height", m1 );
        $(".entry_result a").css("height", m1 );
    
        $(".case_management a").css("height", m2 );
        $(".schedule_management a").css("height", m2 );
    
        $("#schedule_results_data").css("height", c );
        $("#schedule_results_table tbody").css("height", c );
    
        $(".sheet").not(".popup .sheet").css("height", sh );
        $(".popup .sheet").css("height", sh4 );
        $(".sheet_table_container").css("height", stc );
        $(".company_info.sheet").css("height","100%");
        $(".sheet.type02").not(".popup .sheet.type02").css("height", sh2 );
        $(".popup .sheet.type02").not(".popup .sheet.type02.popuptype02").css("height", "auto" );
        $(".popup .sheet.type02.popuptype02").css("height", hshp1 );

        $(".data_list_container").not("#popup01 .data_list_container" || "#popup02 .data_list_container").css("height", sh2 );
        $('.company_info .data_list_container').css('height', sh2- 130);
        $("#popup01 .data_list_container").css("height", sh2p1 );
        $("#popup02 .data_list_container").css("height", sh2p2 );
        $("#popup03 .data_list_container").css("height", sh2p3 );
        $("#popup04 .data_list_container").css("height", sh2p4 );
        $("#popup05 .data_list_container").css("height", sh2p5 );
        $("#popup06 .data_list_container").css("height", sh2p6 );
        $("#popup07 .data_list_container").css("height", sh2p7 );
		
        $(".data_list_container02").not(".popup .data_list_container02").css("height", sh3 );
        $("#popup01 .data_list_container02").css("height", sh3p1 );
        $("#popup02 .data_list_container02").css("height", sh3p2 );
        $("#popup03 .data_list_container02").css("height", sh3p3 );
        $("#popup04 .data_list_container02").css("height", sh3p4 );
        $("#popup05 .data_list_container02").css("height", sh3p5 );
        $("#popup06 .data_list_container02").css("height", sh3p6 );
        $("#popup07 .data_list_container02").css("height", sh3p7 );

        $(".sheet_contets").css("padding-bottom", pb );
    
        $("#calendar_table").css("height", ch );
    
	}
	
	$(".popup01_open").click(function () {
		$("#popup01").fadeIn("normal");
		setupScreenSize();
		setupTabChange();
	});

	$(".popup02_open").click(function () {
		$("#popup02").fadeIn("normal");
		setupScreenSize();
		setupTabChange();
	});

	$(".popup03_open").click(function () {
		$("#popup03").fadeIn("normal");
		setupScreenSize();
		setupTabChange();
	});

	$(".popup04_open").click(function () {
		$("#popup04").fadeIn("normal");
		setupScreenSize();
		setupTabChange();
	});

	$(".popup05_open").click(function () {
		$("#popup05").fadeIn("normal");
		setupScreenSize();
		setupTabChange();
	});

	$(".popup06_open").click(function () {
		$("#popup06").fadeIn("normal");
		setupScreenSize();
		setupTabChange();
	});

	$(".popup07_open").click(function () {
		$("#popup07").fadeIn("normal");
		setupScreenSize();
		setupTabChange();
	});

	$(".popup_close").click(function () {
		$("#popup01").fadeOut("normal");
		$("#popup02").fadeOut("normal");
		$("#popup03").fadeOut("normal");
		$("#popup04").fadeOut("normal");
		$("#popup05").fadeOut("normal");
		$("#popup06").fadeOut("normal");
		$("#popup07").fadeOut("normal");
		setupScreenSize();
		setupTabChange();
	});

	// 企業情報
	$(".company_information").click(function(){
		$("#popup_company_information_box01").fadeIn();
	});
	//
	$(".company_info_popup02_open").click(function(){
		$("#popup_company_information_box02").fadeIn();
		setupScreenSize();
		setupTabChange();
	});
	//タブ切替え
	function setupTabChange() {

	  $('#tab_control01a li').click(
	    function(event) {
		
		  var index = $('#tab_control01a li').index(this);
		  $('#tab_control01a li').removeClass('cr');
		  $(this).addClass('cr')

		  var id = (event.currentTarget.id);
		  switch(id) {
					case 'tab-1':
						$('#popup_sheet01').css("display","block");
						$('#popup_sheet02').css("display","none");
						$('#popup_sheet03').css("display","none");
						break;

					case 'tab-2':
						$('#popup_sheet01').css("display","none");
						$('#popup_sheet02').css("display","block");
						$('#popup_sheet03').css("display","none");
						break;

					case 'tab-3':
						$('#popup_sheet01').css("display","none");
						$('#popup_sheet02').css("display","none");
						$('#popup_sheet03').css("display","block");
						break;
		}
	  });

	  $('#tab_control01b li').click(
	    function(event) {

		  var index = $('#tab_control01b li').index(this);

		  $('#tab_control01b li').removeClass('cr');
		  $(this).addClass('cr')

		  var id = (event.currentTarget.id);
		  switch(id) {
					case 'tab-4':
						$('#popup_sheet04').css("display","block");
						$('#popup_sheet05').css("display","none");
						$('#popup_sheet06').css("display","none");
						break;

					case 'tab-5':
						$('#popup_sheet04').css("display","none");
						$('#popup_sheet05').css("display","block");
						$('#popup_sheet06').css("display","none");
						break;

					case 'tab-6':
						$('#popup_sheet04').css("display","none");
						$('#popup_sheet05').css("display","none");
						$('#popup_sheet06').css("display","block");
						break;
		}
	  });

	  $('#tab_control02 li').click(
	    function(event) {
			
		  var index = $('#tab_control02 li').index(this);

		  $('#tab_control02 li').removeClass('cr');
		  $(this).addClass('cr')

		  var id = (event.currentTarget.id);
		  switch(id) {
					case 'tab-1':
						$('#popup_sheet01').css("display","block");
						$('#popup_sheet02').css("display","none");
						$('#popup_sheet03').css("display","none");
						$('#popup_sheet04').css("display","none");
						$('#popup_sheet05').css("display","none");
						break;

					case 'tab-2':
						$('#popup_sheet01').css("display","none");
						$('#popup_sheet02').css("display","block");
						$('#popup_sheet03').css("display","none");
						$('#popup_sheet04').css("display","none");
						$('#popup_sheet05').css("display","none");
						break;

					case 'tab-3':
						$('#popup_sheet01').css("display","none");
						$('#popup_sheet02').css("display","none");
						$('#popup_sheet03').css("display","block");
						$('#popup_sheet04').css("display","none");
						$('#popup_sheet05').css("display","none");
						break;

					case 'tab-4':
						$('#popup_sheet01').css("display","none");
						$('#popup_sheet02').css("display","none");
						$('#popup_sheet03').css("display","none");
						$('#popup_sheet04').css("display","block");
						$('#popup_sheet05').css("display","none");
						break;

					case 'tab-5':
						$('#popup_sheet01').css("display","none");
						$('#popup_sheet02').css("display","none");
						$('#popup_sheet03').css("display","none");
						$('#popup_sheet04').css("display","none");
						$('#popup_sheet05').css("display","block");
						break;
		}
	  });

	  $('#tab_control03a li').click(
	    function(event) {
			
		  var index = $('#tab_control03a li').index(this);

		  $('#tab_control03a li').removeClass('cr');
		  $(this).addClass('cr')

		  var id = (event.currentTarget.id);
		  switch(id) {
					case 'tab-1':
						$('#popup_sheet01').css("display","block");
						$('#popup_sheet02').css("display","none");
						$('#popup_sheet03').css("display","none");
						$('#popup_sheet04').css("display","none");
						break;

					case 'tab-2':
						$('#popup_sheet01').css("display","none");
						$('#popup_sheet02').css("display","block");
						$('#popup_sheet03').css("display","none");
						$('#popup_sheet04').css("display","none");
						break;

					case 'tab-3':
						$('#popup_sheet01').css("display","none");
						$('#popup_sheet02').css("display","none");
						$('#popup_sheet03').css("display","block");
						$('#popup_sheet04').css("display","none");
						break;

					case 'tab-4':
						$('#popup_sheet01').css("display","none");
						$('#popup_sheet02').css("display","none");
						$('#popup_sheet03').css("display","none");
						$('#popup_sheet04').css("display","block");
						break;
		}
	  });

	  $('#tab_control03b li').click(
	    function(event) {

		  var index = $('#tab_control03b li').index(this);

		  $('#tab_control03b li').removeClass('cr');
		  $(this).addClass('cr')

		  var id = (event.currentTarget.id);
		  switch(id) {
					case 'tab-5':
						$('#popup_sheet05').css("display","block");
						$('#popup_sheet06').css("display","none");
						$('#popup_sheet07').css("display","none");
						$('#popup_sheet08').css("display","none");
						break;

					case 'tab-6':
						$('#popup_sheet05').css("display","none");
						$('#popup_sheet06').css("display","block");
						$('#popup_sheet07').css("display","none");
						$('#popup_sheet08').css("display","none");
						break;

					case 'tab-7':
						$('#popup_sheet05').css("display","none");
						$('#popup_sheet06').css("display","none");
						$('#popup_sheet07').css("display","block");
						$('#popup_sheet08').css("display","none");
						break;

					case 'tab-8':
						$('#popup_sheet05').css("display","none");
						$('#popup_sheet06').css("display","none");
						$('#popup_sheet07').css("display","none");
						$('#popup_sheet08').css("display","block");
						break;

		}
	  });

	
	};

});





