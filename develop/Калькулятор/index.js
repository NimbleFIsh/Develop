$(document).ready( function() {

  $('mainForm').on('submit', function() {
    e.preventDefault();
  });
  
  $('.step_content_menu_question').prepend('<svg class="info_icon" version="1.0"xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none"> <path class="info_fill" fill="grey" d="M2325 5109 c-495 -46 -985 -245 -1370 -556 -122 -99 -300 -277 -397 -398 -217 -271 -393 -627 -478 -965 -152 -603 -86 -1214 191 -1769 130 -262 265 -451 472 -660 430 -435 983 -695 1597 -750 647 -59 1317 145 1825 556 122 99 300 277 397 398 217 271 393 627 478 965 152 603 86 1214 -191 1769 -130 262 -265 451 -472 660 -209 211 -411 357 -678 490 -430 214 -903 304 -1374 260z m345 -871 c91 -22 189 -96 242 -183 70 -113 78 -267 21 -388 -102 -215 -354 -299 -571 -188 -65 33 -139 113 -175 188 -30 63 -32 76 -32 173 0 97 2 110 31 171 39 83 90 139 163 182 102 61 198 75 321 45z m221 -1127 l24 -19 3 -1079 c2 -772 -1 -1086 -9 -1105 -6 -15 -24 -31 -41 -37 -42 -15 -574 -15 -616 0 -17 6 -35 22 -41 37 -8 19 -11 333 -9 1105 l3 1079 24 19 c22 18 43 19 331 19 288 0 309 -1 331 -19z"/></g></svg>');

  $('.info_fill').on('focus', function() {
    $('.question_info').fadeIn(600).delay(500);
  });

  $('.info_fill').on('blur', function() {
    $('.question_info').fadeOut(600).delay(500);
  });

  $('#menu_item_1').on('click', function() {
    $('#menu_item_2').removeClass('active');
    $('.step_content_calc_2').delete;
    $('#menu_item_1').addClass('active');
    $('.step_content_calc').html('<div class="step_content_calc_1"></div>');
  });

  $('#menu_item_2').on('click', function() {
    $('#menu_item_1').removeClass('active');
    $('.step_content_calc_1').delete;
    $('#menu_item_2').addClass('active');
    $('.step_content_calc').html('<div class="step_content_calc_2"></div>');
  });
});
