import {Get, Post} from '@/api/request'

export const getToken = async () => {
  const { data } = await Get('/token');
  return data;
}

export const getRefreshToken = async () => {
  const { data } = await Post('/refresh-token')
  return data;
}