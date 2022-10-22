function searchMovies() {
  $("#movie-list").html("");

  $.ajax({
    url: "https://omdbapi.com",
    type: "get", // method HTTP
    dataType: "json", // return nya mau bentuk apa, bisa text, json, jsonp, xml
    data: {
      apikey: "d021e049",
      s: $("#search-input").val(), // ambil apapun yg diinputkan di search input
    },
    success: function (result) {
      if (result.Response == "True") {
        let movies = result.Search;

        $.each(movies, function (i, data) {
          $("#movie-list").append(`
          <div class="col-md-4">
            <div class="card mb-4">
                <img src="${data.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.Title}</h5>
                    <p class="card-text">Type : ${data.Type}</p>
                    <p class="card-text">Year : ${data.Year}</p>
                    <a href="#" class="btn btn-primary">Tonton Sekarang </a>
                </div>
            </div>
          </div>
          `);
        });
      } else {
        $("#movie-list").html(`
          <div class="col">
            <h1 class="text-center">${result.Error}</h1>
          </div>
        `);
      }
    },
  });
}

$("#search-button").on("click", function () {
  searchMovies();
});

$('#search-input').on('keyup', function(e) {
  if(e.keyCode == 13) { // keyCode 'enter' = 13
    searchMovies()
  }
})