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
$mail->setFrom('danil95112@mail.ru', 'Фрилансер по жизни');
//Кому отправить
$mail->addAddress('danil95112@mail.ru');
//Tema nuсьма
$mail->Subject = 'Привет! Это "Фрилансер по жизни"';
//Тело nuсьма
$body = '<h1>Встречайте супер письио!</h1>';


if(trim(!empty($_POST['message']))) {
    $body.='<p><strong>Проблема:</strong> '.$_POST['message'].'</p>';
    }
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
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