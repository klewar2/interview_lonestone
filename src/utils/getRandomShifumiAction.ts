import { getRandomNumber } from "@/utils/getRandomNumber.ts";
import { shifumiActionEnum } from "@/models/ShifumiAction.enum.ts";

export const getRandomShifumiAction = () => shifumiActionEnum[getRandomNumber(shifumiActionEnum.length)];
