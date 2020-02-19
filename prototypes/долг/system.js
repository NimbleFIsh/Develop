$(document).ready(function() {
  $('#credit_button').on('click', calc);

  function calc() {
    window.result={'all':null, 'pay':null};
    window.all = $('#credit_all').val();
    window.pay = $('#credit_pay').val();
    window.procent = $('#creadit_procent').val();
    window.date = $('#creadit_date').val();
    math(window.all, window.pay, window.procent, window.date);
    output(window.result.all, window.result.pay);
  }

  function math(all, pay, procent, date) {
    window.result.all = ( (all-pay)/date) / ((all-pay)*(procent/100) );
    window.result.pay = ( all - window.result.all );
  }

  function output(all, pay) {
    $('#credit_result_all').text(all);
    $('#credit_result_pay').text(pay);
  }
});
