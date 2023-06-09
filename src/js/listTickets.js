/* CONTROLLER */
const { remote } = "electron";
const main = require("../js/main");
const moment = require("moment"); // require
moment.locale("fr");

const dataBodyTable = document.querySelector("#data-piece");

var dataTickets;

const getAllTickets = async () => {
  let listeTickets = await main.getAllTickets();

  dataTickets = listeTickets

};

(async () => {
  await getAllTickets();
})();


async function init() {
  getAllTickets();
};

init();

/* function renderProducts(tickets) {
  let upListTickets = []
  tickets.forEach((ticket) => {

    upListTickets = ticket */
    /* dataBodyTable.innerHTML += `
      <tr>
        <td>${ticket.id}</td>
        <td>${ticket.type}</td>
        <td>${ticket.attribut_employe}</td>
        <td>${moment(ticket.date_heure_debut_t).format("LL")}</td>
        <td>${ticket.status}</td>
        <td>${ticket.date_heure_fin_t}</td>
        <td><button class="editBtn btn btn-secondary btn-sm" data-toggle="modal" data-target="#editModal" onClick="editBtnModal('${
          ticket.id
        }')"">Modifier</button></td>
        <td><button class="deleteBtn btn btn-danger btn-sm" onClick="deleteTicket('${
          ticket.id
        }')">Supprimer</button></td>
      </tr>
    `; */
  /* });
  console.log("ticket", upListTickets)
  return upListTickets

} */

const deleteProduct = async (id) => {
  /* const productByIdD = await main.getProductById(id);
  console.log("productById: ", productByIdD);*/
  const response = confirm("Êtes-vous sûr de vouloir supprimer ce champ ?");
  if (response) {
    await main.deleteProduct(id);
    /* await getProducts(); */
    window.location.reload();
  }
  return;
};


module.exports = {dataTickets}