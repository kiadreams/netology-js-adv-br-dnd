import {ShadowOfCard} from "./ShadowOfCard";

const doneTasks = document.querySelector('.done')
const card = new ShadowOfCard().field;
doneTasks.append(card)
