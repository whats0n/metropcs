import 'jquery-datetimepicker';

console.log($.datetimepicker);
$('.js-datepicker').each((i, datepicker) => {
  datepicker = $(datepicker);
  datepicker.datetimepicker();
});
