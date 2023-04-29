$(document).ready(function () {

    $('#task-result').hide();

  $("#search").keyup(function (e) {
    if ($("#search").val()) {
      let search = $("#search").val();
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

          $("#container").html(template);
          $("#task-result").show();

        },
      });
    }
  });

  $('#task-form').submit(function(e){
    e.preventDefault();
  })

});
