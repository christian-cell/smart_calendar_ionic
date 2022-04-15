<?php

namespace website\usuarios\login;

use mysqli;
use website\conexion\Conexion;
require_once('../cors.php');
require_once("../conexion.php");

class Login {

  
  private $SQL_usuarios ;

  public function getUsers($usuario)
  {

    $link = Conexion::Connect();
    var_dump($usuario->usuario);
    var_dump($usuario->clave);die();
    $this->SQL_usuarios = "
       SELECT clave FROM usuarios 
       WHERE usuario LIKE '%".$usuario."%'
    ";

    $SQL_usuarios_result = mysqli_query($link , $this->SQL_usuarios)or die(mysqli_error($link));
  }
  
  public function login($usuario)
  {
    $this->getUsers($usuario);
  }

}

$login = new Login();
$objDatos = json_decode(file_get_contents("php://input"));
echo $login->login($objDatos)

?>