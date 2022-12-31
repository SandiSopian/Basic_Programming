import BaseLaptop from "./BaseLaptop";

class Macbook<T> extends BaseLaptop<T> {
  constructor(type: T, vga: boolean, bonuses: boolean) {
    super("Flip Screen", type, vga, bonuses);
  }
}

export default Macbook;
