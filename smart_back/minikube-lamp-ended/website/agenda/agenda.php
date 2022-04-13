<?php

namespace smartCalendar;
use smartCalendar\Conexion;
require_once('../cors.php');
require_once("../conexion.php");

class Agenda {

  private string $conditional_query ;
  private $SQL ;

  /* 
  * creamos la condicion de la query
  */

  public function createCondition()
  {
    $this->conditional_query = "";

    if(isset($especialista) && $especialista !== "Todos") $this->conditional_query."AND E.especialista LIKE '%{$especialista}%' ";
    if(isset($id_agenda)) $this->conditional_query.=" AND id_agenda = '$id_agenda' ";

    return $this->conditional_query;
  }

  /* 
  * traemos las agendas ddbb
  */

  function GetAgenda($especialista="" , $id_agenda="" )
  {
  
    $link = Conexion::Connect();

    $this->SQL = "
    
      SELECT A.* , E.especialista ,E.color, C.nombre , C.primer_apellido , C.segundo_apellido 
      
      FROM agenda AS A LEFT JOIN especialistas AS E
      ON A.id_especialista = E.id_especialista
      
      LEFT JOIN clientes AS C ON A.id_cliente = C.id_cliente
      
      WHERE TRUE
    " . $this->createCondition();

    $SQL_resp = mysqli_query($link , $this->SQL)or die(mysqli_error($link));
    
    return $SQL_resp;
    

  }

  /* 
  * construimos y retornamos la respuesta del cliente
  */

  public function RetornaAgendas():string
  {
    $fila = 0;
    $events = [];

    $datos = $this->GetAgenda();


    while ($dato = mysqli_fetch_array($datos)){
      // var_dump($dato);
      /* 
      $events[$fila]['date'] = $dato['fecha']; */
      $events[$fila]['title'] = $dato['nombre'];
      $events[$fila]['startTime'] = $dato['fecha']. " " .$dato['hora'];
      $events[$fila]['endTime'] = $dato['fecha']. " " .$dato['hora_fin'];
      $events[$fila]['allDay'] = false;
      $events[$fila]['id_agenda'] = $dato['id_agenda'];
      $events[$fila]['id_especialista'] = $dato['id_especialista'];
      $events[$fila]['especialista'] = $dato['especialista'];
      $events[$fila]['color'] = $dato['color'];
      $events[$fila]['motivo'] = $dato['notas'];
      /* 
      ;  */

      $fila++;
  
    };

    

    header('Content-type:application/json;charset=utf-8');
    return json_encode($events); 
  }

}

$agenda = new Agenda();

echo $agenda->RetornaAgendas( /* $especialista = $_GET['especialista'] , $id_agenda = $_GET['agenda_id'] */ )

?>