import twoTickets from "../assets/final-item-ticket-icon.png";
import chips from "../assets/final-item-event-icon.png";
import hotel from "../assets/final-item-hotel-icon.png";
import money from "../assets/final-item-money-icon.png";

export const typeOne = [
  { icon: twoTickets, text: "ორმხრივი ავიაბილეთი" },
  { icon: chips, text: "The Festival in Malta -ს მეინ ივენთის ბაი-ინი" },
  { icon: chips, text: "Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი" },
  { icon: hotel, text: "სასტუმრო Golden Tulip Vivaldi Hote" },
  { icon: money, text: "€500 სახარჯი ფული" },
];

export const typeTwo = typeOne.filter((item) => !item.text.startsWith("H"));
