import bolt from "../assets/bolt.svg";
import car from "../assets/car.svg";
import cookie from "../assets/cookie.svg";
import dollarSign from "../assets/dollar-sign.svg";
import droplet from "../assets/droplet.svg";
import dumbbell from "../assets/dumbbell.svg";
import fire from "../assets/fire.svg";
import gamepad from "../assets/gamepad.svg";
import grid from "../assets/grid.svg";
import heart from "../assets/heart.svg";
import house from "../assets/house.svg";
import phone from "../assets/phone.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import smiley from "../assets/smiley.svg";
import tv from "../assets/tv.svg";
import wifi from "../assets/wifi.svg";
import MenuLabel from "./MenuLabel";

const colors = [
  {
    id: 0,
    color: "#db3535"
  },
  {
    id: 1,
    color: "#3588db",
  },
  {
    id: 2,
    color: "#2449a6",
  },
  {
    id: 3,
    color: "#24a686",
  },
  {
    id: 4,
    color: "#0ec9ba",
  },
  {
    id: 5,
    color: "#24a636",
  },
  {
    id: 6,
    color: "#7571f8",
  },
  {
    id: 7,
    color: "#bf35db",
  },
  {
    id: 8,
    color: "#c41667",
  },
  {
    id: 9,
    color: "#dedb47",
  },
  {
    id: 10,
    color: "#f79e0f",
  },
  {
    id: 11,
    color: "#f871a2",
  },
];

const icons = [
  bolt,
  car,
  cookie,
  dollarSign,
  droplet,
  dumbbell,
  fire,
  gamepad,
  grid,
  heart,
  house,
  phone,
  shoppingCart,
  smiley,
  tv,
  wifi
];

const IconSelector = () => {
  return (
    <>
      <MenuLabel title="Color:" />    
      <div className="flex flex-wrap w-64 gap-3">
        {colors.map(({ id, color }) => (
          <div key={id} className="inline-block p-4 rounded-md" style={{ backgroundColor: color }}></div>
        ))}
      </div>

      <MenuLabel title="Icon:" />
    </>
  );
}

export default IconSelector;