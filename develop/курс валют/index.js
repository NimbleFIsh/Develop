$(document).ready(function() {
  $.ajax({
    url: 'https://www.cbr-xml-daily.ru/daily_json.js',
    cache: false,
    success: function(html) {
      let result = eval('('+html+')').Valute.USD.Value;
      console.log(result);
    }
  })
});
