import {useState} from 'react';
import {ASYNC_STATUS} from '../utils/constants';

const useAPI = () => {
  const [status, setStatus] = useState(ASYNC_STATUS.IDLE);
  const [response, setResponse] = useState({});

  const invokeApi = async callBack => {
    try {
      setStatus(ASYNC_STATUS.LOADING);
      const res = await callBack();
      setStatus(ASYNC_STATUS.SUCCESS);
      setResponse(res);
    } catch (error) {
      setStatus(ASYNC_STATUS.ERROR);
      setResponse(error);
    }
  };

  return [status, response, invokeApi];
};

export default useAPI;
