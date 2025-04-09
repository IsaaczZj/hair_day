import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({date}) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedule`)
    const data = response.json()

    
  } catch (error) {
    console.log(error);
    alert("Não foi possivel buscar os agendamentos do dia selecionado")
  }
}