export type MarketData = {
  data: MarketDataPoint[];
};

export type MarketDataPoint = {
  x: number | Date;
  y: number[];
};
