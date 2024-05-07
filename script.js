$(document).ready(function() {
  // Cargar las miniaturas
  function cargarMiniaturas(olimpiada) {
    var miniaturasHTML = "";

    for (var i = 1; i <= 4; i++) {
      var imagenURL = "images/" + olimpiada + "/" + i + ".png";
      miniaturasHTML += '<div class="miniatura"><img src="' + imagenURL + '" alt="Imagen ' + i + ' - ' + olimpiada + '"></div>';
    }

    // Animación de fade in al cargar las miniaturas
    $("#miniaturas").hide().html(miniaturasHTML).fadeIn("slow");
  }

  // Mostrar una imagen en el visor principal con animación de fade in
  function mostrarImagen(imagenURL) {
    $(".visor-principal video").css("display", "none");

    var nuevaImagen = $("<img>").attr("src", imagenURL).hide();
    $(".visor-principal").append(nuevaImagen);

    // Animación de desvanecer imagen anterior
    $(".visor-principal img").not(nuevaImagen).animate({opacity: 0}, "slow", function() {
      $(this).remove();
    });

    nuevaImagen.fadeIn("slow");
  }

  // Cargar miniaturas por defecto
  cargarMiniaturas("2008");

  // Enlaces del menú lateral
  $("#menu-lateral").on("click", "a", function(event) {
  event.preventDefault();

  var olimpiada = $(this).text();
    cargarMiniaturas(olimpiada);
  });

  // Animación sobre las miniaturas
  $("#miniaturas").on("mouseenter", ".miniatura", function() {
    $(this).addClass("miniatura-hover");
  }).on("mouseleave", ".miniatura", function() {
    $(this).removeClass("miniatura-hover");
  });

  $("#miniaturas").on("click", ".miniatura", function() {
    var imagenURL = $(this).find("img").attr("src");
    mostrarImagen(imagenURL);
  });
});
