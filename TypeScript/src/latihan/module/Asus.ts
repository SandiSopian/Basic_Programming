import BaseLaptop from "./BaseLaptop";

class Asus<T> extends BaseLaptop<T> {
  constructor(type: T, vga: boolean, bonuses: boolean) {
    super("Zenbook", type, vga, bonuses);
  }
}

export default Asus;
