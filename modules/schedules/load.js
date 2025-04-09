import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  const date = selectedDate.value;
  const dailySchedules = await scheduleFetchByDay({ date });
  console.log(dailySchedules);
  
  
  hoursLoad({ date });

  //Buscar na api os agendamentos para carregar no lado direto

  //Os horarios disponiveis (horarios no futuro + nao agendados) do lado esquerdo
}
