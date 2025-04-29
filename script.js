const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((booksObj) => {
      console.log(booksObj);
      const row = document.querySelector(".booksGrid");

      booksObj.forEach((book) => {
        const col = document.createElement("div");
        col.className = "col-md-3";

        const card = document.createElement("div");
        card.className = "card";
        card.style.height = "40rem";

        const img = document.createElement("img");
        img.style.height = "400px";
        img.className = "card-img-top object-fit-cover";
        img.src = book.img;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = book.title;

        const cardPrice = document.createElement("p");
        cardPrice.className = "card-text flex-grow-1";
        cardPrice.innerText = "£" + book.price;

        const cardBtn = document.createElement("a");
        cardBtn.href = "#";
        cardBtn.className = "btn text-white fw-semibold align-self-start";
        cardBtn.style.border = "none";
        cardBtn.style.backgroundColor = "#380258";
        cardBtn.innerText = "Scarta";

        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cardBtn);
        row.appendChild(col);

        cardBtn.onclick = function (e) {
          e.target.closest(".col-md-3").remove();
        };
      });
    })
    .catch((error) => console.log(error));
};

window.onload = () => {
  fetchBooks();
};
