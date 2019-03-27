// 1) Variables
ciudad = $("#ciudad");
consultar = $("#consultar");

// 2) Funciones
const LlamarAPI = url => {
  $.ajax({
    url: url,
    success: function(response) {
      console.log(response);
    }
  });
};

const PrepararURL = () => {
  let key = "83c5066addfd8c28718f9f6973cb61e6";
  let url = "https://api.openweathermap.org/data/2.5/weather?";
  url += `q=${ciudad.val()},es`;
  url += `&appid=${key}`;
  url += `&units=metric`;
  LlamarAPI(url);
};

// 3) Eventos
consultar.on("click", PrepararURL);
