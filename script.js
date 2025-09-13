/*Botão do nav*/
const nav = document.getElementById("nav-lateral")
const nav_b = document.getElementById("nav-button")

nav_b.onclick = function(){
    if (nav.style.display === "flex"){
        nav.style.display = "none";
        nav_b.textContent = "abrir nav";
    } else{
        nav.style.display = "flex";
        nav_b.textContent = "fechar nav";
    }
};
nav.onclick = function (e) {
    if (!nav.contains(e.relatedTarget)) {
      nav.style.display = "none";
      nav_b.textContent = "abrir nav";
    }
};


/*links do nav*/
const link1 = document.getElementById("pagina-inicial");
const sec1  = document.getElementById("sec-pagina-inicial");

link1.onmouseenter = function () {
    sec1.style.display = "flex";
};
sec1.onmouseleave = function () {
    sec1.style.display = "none";
};
link1.onmouseleave = function (e) {
    if (!sec1.contains(e.relatedTarget)) {
      sec1.style.display = "none";
    }
};

const link2 = document.getElementById("pagina-livro");
const sec2  = document.getElementById("sec-pagina-livro");

link2.onmouseenter = function () {
    sec2.style.display = "flex";
};
sec2.onmouseleave = function () {
    sec2.style.display = "none";
};
link2.onmouseleave = function (e) {
    if (!sec2.contains(e.relatedTarget)) {
      sec2.style.display = "none";
    }
};

/*botões da intro*/
const but_left = document.getElementById("left");
const but_right = document.getElementById("right");
const textos = [
  document.getElementById("intro0"),
  document.getElementById("intro1"),
  document.getElementById("intro2"),
  document.getElementById("intro3"),
  document.getElementById("intro4"),
];

// começa no primeiro texto
let indiceAtual = 0;

// função para atualizar a visibilidade
function mostrarTexto(index) {
  textos.forEach((t, i) => {
    t.style.display = i === index ? "block" : "none";
  });
  const intro = document.getElementById("intro");
  if (index !== 0) {
    intro.style.display = "block";
  } else {
    intro.style.display="none";
  }
}

// inicializa
mostrarTexto(indiceAtual);

// botão da direita → próximo
but_right.onclick = function () {
  indiceAtual = (indiceAtual + 1) % textos.length; // volta ao começo quando passa do último
  mostrarTexto(indiceAtual);
};

// botão da esquerda → anterior
but_left.onclick = function () {
  indiceAtual = (indiceAtual - 1 + textos.length) % textos.length; // volta ao último se for menor que 0
  mostrarTexto(indiceAtual);
};

//Mudança de seções//
const seções = [
  document.getElementById("inicial"),
  document.getElementById("seção1"),
  document.getElementById("seção2"),
  document.getElementById("rodape"),
];
let section = 0;
let rolando = false;

window.addEventListener("wheel", (e) => {
  if (rolando) return; // evita múltiplos disparos rápidos
      rolando = true;

  if (e.deltaY > 0 && section < seções.length - 1) {
      section++;
  } else if (e.deltaY < 0 && section > 0) {
      section--;
  }

  seções[section].scrollIntoView({ behavior: "smooth" });

  setTimeout(() => rolando = false, 800); // tempo pro "cooldown"
});
