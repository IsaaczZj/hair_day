import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period");
periods.forEach((period) => {
  period.addEventListener("click", async (e) => {
    if (e.target.classList.contains("cancel-icon")) {
      const item = e.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar esse agendamento"
        );

        if (isConfirm) {
          await scheduleCancel({ id });

          schedulesDay();
        }
      }
    }
  });
});
