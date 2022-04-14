<?php

namespace website\centros\centroHorario;
use website\conexion\Conexion;
require_once('../cors.php');
require_once("../conexion.php");

class CentroHorarioNuevo {

    private $SQL_especialista_nuevo;
  
    /* 
    * @params le pasamos el cuerpo del post
    */

    public function CreateHorario($horario)
    {
        $link = Conexion::Connect();

        $horario->id_centro = '1';

        $this->SQL_especialista_nuevo = "
            INSERT INTO `centro_horarios`(
                /* 1 */`id_centro`,
                /* 2 */`lunes_apertura_manana`,
                /* 3 */`lunes_cierre_manana`,
                /* 4 */`lunes_apertura_tarde`,
                /* 5 */`lunes_cierre_tarde`,
                /* 6 */`martes_apertura_manana`,
                /* 7 */`martes_cierre_manana`,
                /* 8 */`martes_apertura_tarde`,
                /* 9 */`martes_cierre_tarde`,
                /* 10 */`miercoles_apertura_manana`,
                /* 11 */`miercoles_cierre_manana`,
                /* 12 */`miercoles_apertura_tarde`,
                /* 13 */`miercoles_cierre_tarde`,
                /* 14 */`jueves_apertura_manana`,
                /* 15 */`jueves_cierre_manana`,
                /* 16 */`jueves_apertura_tarde`,
                /* 17 */`jueves_cierre_tarde`,
                /* 18 */`viernes_apertura_manana`,
                /* 19 */`viernes_cierre_manana`,
                /* 20 */`viernes_apertura_tarde`,
                /* 21 */`viernes_cierre_tarde`,
                /* 22 */`sabado_apertura_manana`,
                /* 23 */`sabado_cierre_manana`,
                /* 24 */`sabado_apertura_tarde`,
                /* 25 */`sabado_cierre_tarde`,
                /* 26 */`domingo_apertura_manana`,
                /* 27 */`domingo_cierre_manana`,
                /* 28 */`domingo_apertura_tarde`,
                /* 29 */`domingo_cierre_tarde`,
            )VALUES(
                /* 1 */'".$horario->id_centro."',
                /* 2 */'".$horario->lunes_apertura_manana."',
                /* 3 */'".$horario->lunes_cierre_manana."',
                /* 4 */'".$horario->lunes_apertura_tarde."',
                /* 5 */'".$horario->lunes_cierre_tarde."',
                /* 6 */'".$horario->martes_apertura_manana."',
                /* 7 */'".$horario->martes_cierre_manana."',
                /* 8 */'".$horario->martes_apertura_tarde."',
                /* 9 */'".$horario->martes_cierre_tarde."',
                /* 10 */'".$horario->miercoles_apertura_manana."',
                /* 11 */'".$horario->miercoles_cierre_manana."',
                /* 12 */'".$horario->miercoles_apertura_tarde."',
                /* 13 */'".$horario->miercoles_cierre_tarde."',
                /* 14 */'".$horario->jueves_apertura_manana."',
                /* 15 */'".$horario->jueves_cierre_manana."',
                /* 16 */'".$horario->jueves_apertura_tarde."',
                /* 17 */'".$horario->jueves_cierre_tarde."',
                /* 18 */'".$horario->viernes_apertura_manana."',
                /* 19 */'".$horario->viernes_cierre_manana."',
                /* 20 */'".$horario->viernes_apertura_tarde."',
                /* 21 */'".$horario->viernes_cierre_tarde."',
                /* 22 */'".$horario->sabado_apertura_manana."',
                /* 23 */'".$horario->sabado_cierre_manana."',
                /* 24 */'".$horario->sabado_apertura_tarde."',
                /* 25 */'".$horario->sabado_cierre_tarde."',
                /* 26 */'".$horario->domingo_apertura_manana."',
                /* 27 */'".$horario->domingo_cierre_manana."',
                /* 28 */'".$horario->domingo_apertura_tarde."',
                /* 29 */'".$horario->domingo_cierre_tarde."'
            )
        ";

        $SQL_especialista_nuevo_result = mysqli_query($link , $this->SQL_especialista_nuevo)or die(mysqli_error($link));
        echo $SQL_especialista_nuevo_result;
    } 
  

}

$objDatos = json_decode(file_get_contents("php://input"));
$especialista_nuevo = new CentroHorarioNuevo();
$especialista_nuevo->CreateHorario($objDatos); 

?>