<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
$mail = new PHPMailer (true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML (true);

//Om kozo письмо
$mail->setFrom('miv202@mail.ru');
//Кому отправить
$mail->addAddress('miv202@mail.ru');
//Tema nuсьма
$mail->Subject = 'Привет! Это "Фрилансер по жизни"';
//Тело nuсьма
$body = '<h1></h1>';


if(trim(!empty($_POST['message']))) {
    $body.='<p><strong>Проблема:</strong> '.$_POST['message'].'</p>';
    }
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
if(trim(!empty($_POST['numberPhone']))){
  $body.='<p><strong>Номер телефона:</strong> '.$_POST['numberPhone'].'</p>';
  }
if(trim(!empty($_POST['price']))){
  $body.='<p><strong>Цена платья:</strong> '.$_POST['price'].'</p>';
  }
if(trim(!empty($_POST['numberItem']))){
  $body.='<p><strong>Номер платья:</strong> '.$_POST['numberItem'].'</p>';
  }
$mail->Body = $body;
//отправляем
if (!$mail->send()) {
    $message = 'Ошибка';
    } else {
    $message = 'Данные отправлены!';
    }
    $response = ['message' => $message];
    header('Content-type: application/json');
    echo json_encode($response);
?>
