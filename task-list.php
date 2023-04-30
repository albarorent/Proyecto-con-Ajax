<?php

    include('database.php');

    $query = "SELECT * from tareas";
    $result = mysqli_query($connection,$query);

    if(!$result){
        die('Query failed'.mysqli_error($connection));
    }

    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'nombre' => $row['nombre'],
            'descripcion' => $row['descripcion'],
            'id' => $row['id']
        );
    }

    $jsonString = json_encode($json);
    echo $jsonString;


?>