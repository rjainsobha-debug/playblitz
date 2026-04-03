const cards = ["A","A","B","B","C","C","D","D"];
let shuffled = cards.sort(() => 0.5 - Math.random());
let selected = [];
let matched = [];

const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(4, 80px)";
container.style.gap = "10px";
document.body.appendChild(container);

shuffled.forEach((val, index) => {
  const card = document.createElement("div");
  card.innerText = "?";
  card.style.height = "80px";
  card.style.background = "#00ffd5";
  card.style.display = "flex";
  card.style.alignItems = "center";
  card.style.justifyContent = "center";

  card.onclick = () => {
    if (selected.length < 2 && !matched.includes(index)) {
      card.innerText = val;
      selected.push({index, val});

      if (selected.length === 2) {
        if (selected[0].val === selected[1].val) {
          matched.push(selected[0].index, selected[1].index);
        }
        setTimeout(() => {
          document.querySelectorAll("div").forEach((c,i)=>{
            if(!matched.includes(i)) c.innerText = "?";
          });
          selected = [];
        }, 500);
      }
    }
  };

  container.appendChild(card);
});
