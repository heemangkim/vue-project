import {Get} from '@/api/request'

export const loginAction = async (obj) => {
  const { data } = await Get('/login', obj);
  return data;
}

