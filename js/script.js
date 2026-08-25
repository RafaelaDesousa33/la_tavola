const dishes = [
  {
    id: 1,
    category: "massa",
    categoryName: "Massa artesanal",
    title: "Tagliatelle al Ragù",
    price: "R$ 72",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    description: "Massa artesanal servida com molho ragù de cozimento lento.",
    story:
      "Inspirado nas cozinhas da região de Emilia-Romagna, este prato representa a tradição das receitas preparadas lentamente em família. Nossa versão começa com massa fresca e um molho rico, cozido por horas para desenvolver profundidade e sabor.",
  },

  {
    id: 2,
    category: "pizza",
    categoryName: "Pizza",
    title: "Pizza Margherita",
    price: "R$ 68",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
    description: "Tomate italiano, mozzarella fresca, manjericão e azeite.",
    story:
      "A Margherita é uma das pizzas mais conhecidas da tradição napolitana. Sua combinação simples de tomate, mozzarella e manjericão se tornou um símbolo da cozinha italiana e inspira nossa receita preparada com fermentação lenta.",
  },

  {
    id: 3,
    category: "risoto",
    categoryName: "Risoto",
    title: "Risotto alla Milanese",
    price: "R$ 78",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80",
    description: "Arroz cremoso, açafrão e parmesão maturado.",
    story:
      "Inspirado na tradição de Milão, este risoto é marcado pela presença do açafrão, responsável pela sua cor dourada e aroma característico. É um prato que celebra simplicidade, técnica e ingredientes de qualidade.",
  },

  {
    id: 4,
    category: "vinho",
    categoryName: "Vinho",
    title: "Chianti Classico",
    price: "R$ 42",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
    description: "Vinho tinto italiano com notas frutadas e especiarias.",
    story:
      "Produzido na região da Toscana, o Chianti é associado às paisagens de vinhedos e à longa tradição vinícola italiana. Selecionamos este vinho para acompanhar massas, carnes e longas conversas à mesa.",
  },

  {
    id: 5,
    category: "sobremesa",
    categoryName: "Sobremesa",
    title: "Tiramisù",
    price: "R$ 36",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80",
    description: "Mascarpone, café, biscoitos e cacau.",
    story:
      "O Tiramisù combina camadas de sabores e texturas. Em nossa interpretação, o café intenso encontra a suavidade do mascarpone e o toque final do cacau, criando uma sobremesa delicada e marcante.",
  },

  {
    id: 6,
    category: "massa",
    categoryName: "Massa artesanal",
    title: "Ravioli al Tartufo",
    price: "R$ 84",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
    description: "Ravioli artesanal com creme de queijo e trufas.",
    story:
      "Este prato é inspirado nas regiões italianas conhecidas pelo uso de trufas. A massa delicada envolve um recheio cremoso e recebe um acabamento aromático que transforma cada garfada em uma experiência intensa.",
  },

  {
    id: 7,
    category: "pizza",
    categoryName: "Pizza",
    title: "Pizza di Parma",
    price: "R$ 82",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
    description: "Presunto italiano, mozzarella, rúcula e parmesão.",
    story:
      "Inspirada nos sabores da região de Parma, esta pizza une ingredientes tradicionais em uma combinação equilibrada entre o sabor marcante do presunto, a suavidade da mozzarella e o frescor da rúcula.",
  },

  {
    id: 8,
    category: "risoto",
    categoryName: "Risoto",
    title: "Risotto ai Funghi",
    price: "R$ 76",
    image:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=80",
    description: "Arroz cremoso, cogumelos selecionados e parmesão.",
    story:
      "Inspirado nos sabores das regiões montanhosas do norte da Itália, este risoto valoriza o aroma dos cogumelos e a textura cremosa conquistada através do preparo cuidadoso do arroz.",
  },
];

const menuGrid = document.getElementById("menuGrid");

const dishModal = document.getElementById("dishModal");

const modalDishImage = document.getElementById("modalDishImage");

const modalDishTitle = document.getElementById("modalDishTitle");

const modalDishDescription = document.getElementById("modalDishDescription");

const modalDishStory = document.getElementById("modalDishStory");

function renderDishes(filter = "todos") {
  const filteredDishes =
    filter === "todos"
      ? dishes
      : dishes.filter((dish) => dish.category === filter);

  menuGrid.innerHTML = filteredDishes
    .map(
      (dish) => `
        
        <article class="dish-card">

            <div class="dish-image">

                <img
                    src="${dish.image}"
                    alt="${dish.title}"
                >

            </div>

            <div class="dish-content">

                <span class="dish-category">
                    ${dish.categoryName}
                </span>

                <div class="dish-title-price">

                    <h3>${dish.title}</h3>

                    <span class="dish-price">
                        ${dish.price}
                    </span>

                </div>

                <p class="dish-description">
                    ${dish.description}
                </p>

                <button
                    class="story-btn"
                    data-id="${dish.id}"
                >
                    Conheça a história
                    <i class="fa-solid fa-arrow-right"></i>
                </button>

            </div>

        </article>

        `,
    )
    .join("");
}

/* INICIALIZAÇÃO */

renderDishes();

/* FILTROS */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    renderDishes(button.dataset.filter);
  });
});

/* ABRIR MODAL DA HISTÓRIA */

document.addEventListener("click", function (event) {
  const storyButton = event.target.closest(".story-btn");

  if (!storyButton) return;

  const id = Number(storyButton.dataset.id);

  const dish = dishes.find((dish) => dish.id === id);

  if (!dish) return;

  modalDishImage.src = dish.image;

  modalDishImage.alt = dish.title;

  modalDishTitle.textContent = dish.title;

  modalDishDescription.textContent = dish.description;

  modalDishStory.textContent = dish.story;

  dishModal.classList.add("active");

  document.body.classList.add("modal-open");
});

/* FECHAR MODAL DO PRATO */

document
  .getElementById("closeDishModal")
  .addEventListener("click", closeDishModal);

function closeDishModal() {
  dishModal.classList.remove("active");

  document.body.classList.remove("modal-open");
}

dishModal.addEventListener("click", function (event) {
  if (event.target === dishModal) {
    closeDishModal();
  }
});

/* GALERIA */

const galleryItems = document.querySelectorAll(".gallery-item");

const imageModal = document.getElementById("imageModal");

const expandedImage = document.getElementById("expandedImage");

galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    const image = item.querySelector("img");

    expandedImage.src = image.src;

    expandedImage.alt = image.alt;

    imageModal.classList.add("active");

    document.body.classList.add("modal-open");
  });
});

document
  .getElementById("closeImageModal")
  .addEventListener("click", closeImageModal);

function closeImageModal() {
  imageModal.classList.remove("active");

  document.body.classList.remove("modal-open");
}

imageModal.addEventListener("click", function (event) {
  if (event.target === imageModal) {
    closeImageModal();
  }
});

/* FORMULÁRIO DE RESERVA */

const reservationForm = document.getElementById("reservationForm");

const formMessage = document.getElementById("formMessage");

reservationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const date = document.getElementById("date").value;

  const time = document.getElementById("time").value;

  const guests = document.getElementById("guests").value;

  if (
    name === "" ||
    email === "" ||
    date === "" ||
    time === "" ||
    guests === ""
  ) {
    formMessage.textContent =
      "Por favor, preencha todos os campos obrigatórios.";

    return;
  }

  formMessage.textContent = `Obrigado, ${name}. Sua solicitação de reserva foi enviada com sucesso.`;

  reservationForm.reset();
});

/* MENU MOBILE */

const menuMobile = document.getElementById("menuMobile");

const navbar = document.getElementById("navbar");

menuMobile.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
  });
});

/* HEADER */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ANIMAÇÕES AO ROLAR */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const position = element.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* FECHAR MODAIS COM ESC */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeDishModal();

    closeImageModal();
  }
});

/* DATA MÍNIMA DA RESERVA */

const dateInput = document.getElementById("date");

const today = new Date().toISOString().split("T")[0];

dateInput.min = today;
