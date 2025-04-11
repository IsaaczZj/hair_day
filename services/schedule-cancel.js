import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE"
    });
    alert("Agendamento cancelado com sucesso")
  } catch (error) {
    alert("Nao foi possivel cancelar o agendamento");
    console.log(error);
  }
}
