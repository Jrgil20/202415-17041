        
    <div class="login-container"> 
        <form action="/login" method="post">
            <!-- El URL estaba apuntando a "localhost" (pero, si inicias la aplicación con un host diferente, por ejemplo, en Codespaces, ya "localhost" no está disponible. -->
            <!-- Se eliminó esa porción (host) para que tome de manera predeterminada la base o host del servidor que está sirviendo el documento -->
            <!-- (p. ej. en mi Codespaces es https://friendly-lamp-pjj6prjjp5xhvpr-3000.app.github.dev/) -->

            <!-- Realmente en el "action" del form no estaría haciendo falta cambiar nada porque estás reemplazando la funcionalidad con un "fetch" vía JS (aunque tampoco haría falta hacer un fetch, pero eso lo vamos a ver en la próxima clase)-->
            <label for="userName">Nombre de Usuario</label>
            <input type="text" id="userName" name="userName" placeholder="Nombre de Usuario" required />
            
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="contraseña" required />
            
            <button type="button" id="login" style="display: none;">Iniciar Sesión</button>
        </form>
    </div>

    <style>
        
        .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 25vh; /* Ajusta este valor para cambiar la altura */
            flex-direction: column;
            border: 5px solid rgb(15, 40, 107); /* Añade un borde */
            padding: 20px; /* Añade un poco de espacio alrededor del contenido */
            width: 200px; /* Ajusta este valor al ancho que prefieras */
            margin: auto; /* Centra el contenedor en la página */
            background-color: #f0f0f0;
            border-radius: 25px;  
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        label {
            visibility: hidden;
            /*display: none;*/
        }
    </style>