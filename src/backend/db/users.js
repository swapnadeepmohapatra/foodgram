import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    avatar: "https://avatars.githubusercontent.com/u/142742043?v=4",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Swapnadeep",
    lastName: "Mohapatra",
    username: "swapnadeep",
    password: "password",
    avatar: "https://avatars.githubusercontent.com/u/41564532?v=4",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tanay",
    lastName: "Pratap",
    username: "tanay",
    password: "password",
    avatar: "https://avatars.githubusercontent.com/u/10216863?v=4",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Keerti",
    lastName: "Purswani",
    username: "keerti",
    password: "password",
    avatar:
      "https://pbs.twimg.com/profile_images/1500589134087618562/llcakrRF_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
