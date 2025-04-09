import { hoursLoad } from "../form/hours-load.js";


const selectedDate = document.getElementById("date")


export function schedulesDay(){
  //Obtem a data do input
  const date = selectedDate.value
  hoursLoad({date})


  //Buscar na api os agendamentos para carregar no lado direto

  //Os horarios disponiveis (horarios no futuro + nao agendados) do lado esquerdo
}