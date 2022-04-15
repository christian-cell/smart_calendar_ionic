<?php

namespace website\centros\centroHorario;
use website\conexion\Conexion;
require_once('../cors.php');
require_once("../conexion.php");

class CentroHorarioActualiza {

    private $SQL_especialista_nuevo;
  
    /* 
    * @params le pasamos el cuerpo del post
    */

    public function updateHorario($horario)
    {
        $link = Conexion::Connect();
        var_dump($horario);
    } 
  

}

$objDatos = json_decode(file_get_contents("php://input"));
$centro_horario_actualiza = new CentroHorarioActualiza();
$centro_horario_actualiza->updateHorario($objDatos); 

?>