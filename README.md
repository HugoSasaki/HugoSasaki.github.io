# Hello World

Repositório dedicado à aprendizado e página pessoal.

## Notas

- Ideia pra pagina inicial, usar o a pra seguir pra proxima seção quando o usuário tentar descer a pagina, e ir direto pra próxima seção da mesma pagina, com uma animação. do jeito que to pensando, provavelmente vai ter que ser JavaScript
- um link active é quando no momento que a gente clica, ele "ativa" pois foi selecionado
- mudei o tamanho de todas as partes.
- estou no prcesso de editar a nav-lateral
- Tentar fazer com que apareçam os links da própria página quando o mouse estiver em cima do link da página, tipo o do fandom
### JavaScript
- tentar o programa pra que ele vá direto de uma seção rpa outra no scroll com overlap: hidden

## Lembretes

- Adicionei navbar escondida, a lateral, que só aparece em alguns casos, preciso saber programar isso
- Mudar cor tbm, pq o bixinho ta feio viu
- Mudei a fonte geral pra Hanken Groteske por enquanto, lembrar de mudar caso queira
- nadave com a pagina, mas tentar criar uma keybind pra comentário
- **Usar [essa página](https://www.tabloid0120.com) como um dos exemplos**

- Adicionei códigos do google que sinto que não mudam nada:
```CSS
    html, body {
        height: 100%; /* Garante que o body ocupa a altura da tela */
        margin: 0;
    }

    .content-wrapper {
        display: flex;
        flex-direction: column; /* Empilha os elementos em coluna */
        min-height: 100vh; /* Altura mínima de 100% da viewport */
    }

    main {
        flex-grow: 1; /* Faz o main ocupar todo o espaço restante */
        padding-bottom: 40px; /* Adiciona um padding para não ficar em cima do footer */
    }

    footer {
        height: 40px; /* Altura definida para o rodapé */
        background-color: #f0f0f0; /* Exemplo de cor de fundo */
    }
