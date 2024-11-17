export interface Position {
  x: number;
  y: number;
}
export interface SeatData {
  tableID: number;
  isEmpty: boolean;
  position: Position;
  percentage: number;
}
export interface Data {
  availableTable: number;
  datas: SeatData[];
}