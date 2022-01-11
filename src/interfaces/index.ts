export interface CounterProps {
  initialValue?: number;
}

export interface CounterStateProps {
  counter: number;
  clicks: number;
}

export interface useCounterProps {
  maxCount: number;
}
