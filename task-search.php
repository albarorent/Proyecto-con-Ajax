<?php
    //inicializamos la conexion
    include('database.php');

    $search = $_POST['search'];
    //declaramos una validacion
    if(!empty($search)){
        $query = "SELECT * FROM tareas WHERE nombre LIKE '$search%'";
        $result = mysqli_query($connection,$query);

        if(!$result){
            die('Query Error'.mysqli_error($connection));
        }

        $json = array();

        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'nombre' => $row['nombre'],
                'descripcion' => $row['descripcion'],
                'id' => $row['id']
            );
        }
        $json_string = json_encode($json);
        echo $json_string;
    }
      
?>