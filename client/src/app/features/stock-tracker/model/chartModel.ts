export interface IChartDataWrapper {
  chartData: IChartData;
}

export interface IChartData {
  currentPercentReturn: number[];
  currentPrice: number[];
  currentTime: string[];
  currentVolumeInMillion: number[];
  totalReturn: number;
  livePrice: number;
  livePriceDiff: number;
}