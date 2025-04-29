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

        const img = document.createElement("img");
        img.style.height = "100%";
        img.className = "card-img-top";
        img.src = book.img;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = book.title;

        const cardPrice = document.createElement("p");
        cardPrice.className = "card-text";
        cardPrice.innerText = book.price;

        const cardBtn = document.createElement("a");
        cardBtn.href = "#";
        cardBtn.className = "btn btn-primary";
        cardBtn.innerText = "Scarta";

        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cardBtn);
        row.appendChild(col);
      });
    })
    .catch((error) => console.log(error));
};

window.onload = () => {
  fetchBooks();
};
