import {TIME_STAMP, TOKEN_TIMEOUT_VALUE} from "../constant";
import {setItem, getItem} from "./storage";

/**
 * 获取
 */
export function getTimeStamp() {
    return getItem(TIME_STAMP)
}

/**
 * 设置
 */
export function setTimeStamp() {
    setItem(TIME_STAMP, Date.now())
}

/**
 * 是否超时
 */
export function isCheckTimeOut(){
    let currentTime = Date.now()
    let timeStamp = getTimeStamp()
    return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
