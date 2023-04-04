$('button').on('click', function () {
  $('button').removeClass('selected');
  $(this).addClass('selected');
});

$(document).ready(function () {
  $('.city-button').click(function () {
    let city = $(this).data('city');
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19&lang=uk`
    $.ajax({
      url: url,
      data: {
        q: city,
      },
      success: function (data) {
        $('#weather').html(`
  <div><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
  <p>Температура: ${data.main.temp} °C</p>
  <p>Тиск: ${Math.round(data.main.pressure * 0.7501)} мм рт. ст.</p>
  <p>Опис: ${data.weather[0].description}</p>
  <p>Вологість: ${data.main.humidity} %</p>
  <p>Швидкість вітру: ${data.wind.speed} м/с</p>
  <p>Напрямок вітру: ${data.wind.deg} °</p>
  </div>  
  `);
      },
      error: function (xhr, status, error) {
        alert('Error: ' + error.message);
      }
    });
  });
});