import backblaze from "../assets/logo/backblaze.jpg"
import bunny from "../assets/logo/bunny.png"
import scaleway from "../assets/logo/scaleway.png"
import vultr from "../assets/logo/vultr.jpg"

export const providerInfo = [
  {
    name: "backblaze",
    logo: backblaze,
    color: "red",
    value: 0,
    valueStorage: 0,
    valueTransfer: 0,
    minPrice: 7,
    priceStorage: 0.005,
    priceTransfer: 0.01,
  },
  {
    name: "bunny",
    logo: bunny,
    color: "yellow",
    value: 0,
    valueStorage: 0,
    valueTransfer: 0,
    maxPrice: 10,
    priceStorage: { HDD: 0.01, SSD: 0.02 },
    priceTransfer: 0.01,
  },
  {
    name: "scaleway",
    logo: scaleway,
    color: "purple",
    value: 0,
    valueStorage: 0,
    valueTransfer: 0,
    priceStorage: {
      Multi: 0.06,
      Single: 0.03,
    },
    priceTransfer: 0.02,
  },
  {
    name: "vultr",
    logo: vultr,
    color: "lightblue",
    value: 0,
    valueStorage: 0,
    valueTransfer: 0,
    minPrice: 5,
    priceStorage: 0.01,
    priceTransfer: 0.01,
  },
];
