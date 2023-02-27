<?php
if(isset($_POST['env']) && $_POST['env'] == "post"){
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$numero = urlencode("5548996154359");
$texto = urlencode("Olá, sou $nome $sobrenome. Gostaria de saber como faço para agendar uma consulta.");
$mensagem = "https://api.whatsapp.com/send?phone=$numero&text=$texto";
header("Location: $mensagem");
}
?>