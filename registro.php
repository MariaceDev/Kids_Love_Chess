<?php

include 'conexion.php';

$nombre = $_POST['nombre'];
$email = $_POST['email']; 
$consulta = "INSERT INTO usuarios(nombre, email) VALUES ('$nombre','$email')";


$verificarEmail = mysqli_query($conexion, "SELECT * FROM usuarios WHERE email='$email'");
    if (mysqli_num_rows($verificarEmail) > 0){
        echo ' <script>
                alert("Este correo ya está registrado, prueba con otro.");
                window.location = "index.html";
                </script>"
                </script>';
                exit();
    };
       

$insertar = mysqli_query($conexion, $consulta);

if($insertar){
    echo ' <script>
    alert("¡Ya estás registrado!");
    window.location = "zonaUsuario.html";
    </script>';

}else{
    echo ' <script>
    alert("Este correo ya está registrado, prueba con otro.");
    window.location.hash = "body > main > div.grid-container > div.cuarto-modulo > div > form";
    </script>';
}
        
    mysqli_close($conexion);

header("Location: chess.html");
exit();
?>


