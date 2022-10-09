<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="css/Cadastro.css">
    <meta charset="utf-8">

    <title>Urban Street</title>

    <!-- as três linhas abaixo são uma correção para que elementos semânticos HTML5 funcionem em versões antigas do Internet Explorer-->
    <!--[if lt IE 9]>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
</head>

<body>
    <!-- Esse é o cabeçalho (header) principal que vai ser usado em todas as páginas do nosso website -->

    <header>
        <h1>Urban Street</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Meu perfil</a></li>
            <li><a href="#">Carrinho</li>
        <li><a href="#">Contato</li>
          <li><a href="#">Redes Sociais</li>
      </ul>
 
       <!-- Um formulário de pesquisa é uma outra maneira não linear comum de navegar por um site. -->
 
       <form>
         <input type="search" name="q" placeholder="Search query">
         <input type="submit" value="Go!">
       </form>
     </nav>
 
    <!-- Esse é o conteúdo principal da nossa página -->
    <main>
 
      <!-- Contém um artigo -->
      <article>
        <h2>LOJA URBAN STREET</h2>
 
        <p>Urban street é uma loja de roupas online da moda masculina.</p>
 
        <h3>Sobre nós</h3>
 
        <p>Urban Street uma loja online criada por alunos do instituto técnico ITB - Brasílio Flores de Azevedo. Consiste em apresentar as melhores roupas masuculinas na moda.</p>
 
        <p>Site desenvolvido por seis alunos .</p>
      </article>
    </main>

    <div class="container" >
        <a class="links" id="paracadastro"></a>
                <a class="links" id="paralogin"></a>

                <div class="content">
                    <!--FORMULÁRIO DE LOGIN-->
                    <div id="login">
                        <form method="post" action="">
                            <h1>Login</h1>
                            <p>
                                <label for="email_login">Seu e-mail</label>
                                <input id="email_login" name="email_login" required="required" type="text" placeholder="contato@urbanestreet.com" />
                            </p>

                            <p>
                                <label for="senha_login">Sua senha</label>
                                <input id="senha_login" name="senha_login" required="required" type="password" placeholder="1234" />
                            </p>

                            <p>
                                <input type="checkbox" name="manterlogado" id="manterlogado" value="" />
                                <label for="manterlogado">Manter-me logado</label>
                            </p>

                            <p>
                                <input type="submit" value="Logar" />
                            </p>

                            <p class="link">
                                Ainda não tem conta?
                                <a href="#paracadastro">Cadastre-se</a>
                            </p>
                        </form>
                    </div>

                    <!--FORMULÁRIO DE CADASTRO-->
                    <div id="Cadastro">
                        <form method="post" action="">
                            <h1>Cadastro</h1>

                            <p>
                                <label for="nome_cad">Seu nome</label>
                                <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Gabriel bob marley" />
                            </p>

                            <p>
                                <label for="email_cad">Seu e-mail</label>
                                <input id="email_cad" name="email_cad" required="required" type="email" placeholder="contato@urbanestreet.com" />
                            </p>

                            <p>
                                <label for="senha_cad">Sua senha</label>
                                <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="1234" />
                            </p>

                            <p>
                                <input type="submit" value="Cadastrar" />
                            </p>

                            <p class="link">
                                Já tem conta?
                                <a href="#paralogin"> Ir para Login </a>
                            </p>
                        </form>
                    </div>
                </div>

                </div>

                <div class="carrinho-de-compras">
                    <h2>Carrinho de compras</h2>
                    <ul>
                        <li>
                            <p><a href=""><strong>Moletom Rodrigão</strong></a>: $99.95.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTu5h_a7zAg0HwZr1C8mZjdOTSocg_LOPx-8M6XYwoJgSFsWShCyi6IuDOCXaJiJPvLH1-3VMR8si4&usqp=CAc" alt="Moletom">
                            <p><a href=""><strong>Moletom NOXX</strong></a>: $420.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGcQCChhubv8GDl3Z3_Zu9Am3_46I9_rMrkVT4WuMLQ9q70CTV6V4fVan_lldEsOyD369hJx2zHpI&usqp=CAc" alt="Moletom">
                            <p><a href=""><strong>Moletom Ray</strong></a>: $88.99.</p>
                            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmQUfpQfKOO2taaD8m1s2rJWi9BkL9fB6wKo1MvC62o7qMPpJpV_MMlQ0GC0hO6qgeVABF0qV9ew&usqp=CAc" alt="Moletom">

                            <li>
                                Frete - Caucular
                            </li>
                    </ul>
                    <p>Preço total da compra: $237.89</p>
                </div>

                <!-- Esse é o rodapé principal que vai ser usado em todas as páginas do nosso website -->

                <footer>
                    <p>©Copyright 2022 by urban street. All rights reversed.</p>
                </footer>

</body>

</html>
