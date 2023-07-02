import axios from 'axios';
import queryString from 'query-string';
import { RaffleInterface, RaffleGetQueryInterface } from 'interfaces/raffle';
import { GetQueryInterface } from '../../interfaces';

export const getRaffles = async (query?: RaffleGetQueryInterface) => {
  const response = await axios.get(`/api/raffles${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createRaffle = async (raffle: RaffleInterface) => {
  const response = await axios.post('/api/raffles', raffle);
  return response.data;
};

export const updateRaffleById = async (id: string, raffle: RaffleInterface) => {
  const response = await axios.put(`/api/raffles/${id}`, raffle);
  return response.data;
};

export const getRaffleById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/raffles/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRaffleById = async (id: string) => {
  const response = await axios.delete(`/api/raffles/${id}`);
  return response.data;
};
