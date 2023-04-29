<?php

    include('database.php');

    if(isset($_POST['nombre'])){
        $nombre = $_POST['nombre'];
        $descripcion = $_POST['descripcion'];
        $query = "INSERT INTO tareas(nombre,descripcion) VALUES ('$nombre','$descripcion')";

        $result = mysqli_query($connection,$query);

        if(!$result){
            die('Query fallido');
        }
        echo "Tarea agregada correctamente";
    }

