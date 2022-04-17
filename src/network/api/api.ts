import { request } from "@/network/axios";
import { CommonList } from "./api-res-model";

/** 这里枚举定义所有接口 */
enum APIS {
  GET_COMMON_LIST = "/commonList",
}

/** 一个示例 */
export const getCommonListApi = () =>
  request.get<CommonList[]>(APIS.GET_COMMON_LIST);
