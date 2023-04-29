$(document).ready(function () {

  //Se oculta el div del buscador
    $('#task-result').hide();

//Muestra el nombre que buscas 
  $("#search").keyup(function (e) {
    if ($("#search").val()) {
      let search = $("#search").val();
      //enviamos los datos al php del buscador
      $.ajax({
        url: "task-search.php",
        type: "POST",
        data: { search },
        success: function (response) {
          let tareas = JSON.parse(response);
          let template = "";
          console.log(tareas);
          tareas.forEach((task) => {
            template += `<li>
                        ${task.nombre}
                    </li>`;
          });
          //aparece en el html
          $("#container").html(template);
          $("#task-result").show();

        },
      });
    }
  });

  //enviamos los datos del formulario al php
  $('#task-form').submit(function(e){
    const postData = {
      nombre: $('#name').val(),
      descripcion: $('#description').val()
    };
    $.post('task-add.php',postData,function(response){
        console.log(response);
        $('#task-form').trigger('reset');
    });

    e.preventDefault();
  });

});
