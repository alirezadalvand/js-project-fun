const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  createNotif();
  btn.style.borderColor = "green"
});

const createNotif = () => {
  const notif = document.createElement("div");
  notif.classList.add("notifStyle");

  notif.append("i love tea !!!!");
  container.append(notif);

  setTimeout(() => {
    notif.remove();
  }, 2000);
};

