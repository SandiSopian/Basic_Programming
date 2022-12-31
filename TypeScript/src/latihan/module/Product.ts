import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus("KL5509", true, true);
console.log(asus);
asus.sold();

let mac = new Macbook(5546, true, true);
console.log(mac);
mac.available();
