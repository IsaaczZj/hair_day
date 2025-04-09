import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, scheduling }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, scheduling }),
    });
    alert("Agendamento realizado com sucesso");
  } catch (error) {
    console.log(error);
    alert("Nao foi possivel agendar, tente novamente mais tarde");
  }
}
