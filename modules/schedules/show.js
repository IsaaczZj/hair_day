import dayjs from "dayjs";
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    dailySchedules.forEach(schedule => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const clientName = document.createElement("span")
      
      item.setAttribute("data-id", schedule.id)
      time.textContent = dayjs(schedule.scheduling).format("HH:mm")
      clientName.textContent = schedule.name

      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "../../assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar")

      item.append(time, clientName, cancelIcon)

      const hour = dayjs(schedule.scheduling).hour()
      if(hour <= 12){
        periodMorning.appendChild(item)
      }else if(hour > 12 && hour <= 18){
        periodAfternoon.appendChild(item)
      }else{
        periodNight.appendChild(item)
      }

    });
  } catch (error) {
    alert("Nao foi possivel exibir os agendamentos");
    console.log(error);
  }
}
