import { useFormContext } from "react-hook-form";
import { useCycles } from "../../../../contexts/CyclesContext";
import * as S from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useCycles();
  const { register } = useFormContext();

  return (
    <S.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        type="text"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="ReactJS"></option>
        <option value="Node.js"></option>
        <option value="Next.js"></option>
        <option value="NestJS"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register("minutesAmount", {
          valueAsNumber: true,
        })}
      />
    </S.FormContainer>
  );
}
