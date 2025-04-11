import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";
import { schedulesDay } from "../schedules/load.js";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

const today = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = today;
selectedDate.min = today;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const name = clientName.value.trim();
    if (name.length <= 2) {
      return alert("Informe um nome valido!");
    }

    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Selecione uma hota");
    }

    const [hour] = hourSelected.textContent.split(":");

    const scheduling = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime().toString();

    const newScheduling = {
      id,
      name,
      scheduling,
    };
    await scheduleNew(newScheduling);
    await schedulesDay();
    clientName.value = "";
  } catch (error) {
    alert("Nao foi possivel realizar o agendamento");
    console.log(error);
  }
});
