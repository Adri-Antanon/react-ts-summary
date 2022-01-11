export type CounterAction =
  | {
      type: "counter/increaseBy";
      payload: { value: number };
    }
  | { type: "counter/reset" };

export const doIncreaseBy = (value: number): CounterAction => {
  return { type: "counter/increaseBy", payload: { value } };
};

export const doReset = (): CounterAction => ({
  type: "counter/reset",
});
