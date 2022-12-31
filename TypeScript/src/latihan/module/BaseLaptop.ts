import ILaptop from "./ILaptop";
import * as Stock from "./Stocks";

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  withVGA: boolean;
  withBonuses: boolean;

  constructor(name: string, type: T, vga: boolean, bonuses: boolean) {
    this.name = name;
    this.type = type;
    this.withVGA = vga;
    this.withBonuses = bonuses;
  }

  available(): void {
    console.log(Stock.available());
  }

  sold(): void {
    console.log(Stock.sold());
  }
}

export default BaseLaptop;
