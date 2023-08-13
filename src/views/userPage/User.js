import React, {useEffect} from 'react';

import API from '../../utils/HTTPservice';
import useAPI from '../../hooks/useAPI';
import {ASYNC_STATUS} from '../../utils/constants';

import './user.css';

const User = () => {
  const [apiStatus, apiRes, invokeApiCall] = useAPI();

  useEffect(() => {
    invokeApiCall(() => API.get('/posts'));
  }, []);

  const User = props => {
    const {title, body} = props.data;
    return (
      <div className="user">
        <h2 className="title">{title}</h2>
        <p className="body">{body}</p>
      </div>
    );
  };

  const _renderJSX = () => {
    console.log('###### API Status', apiStatus);
    switch (apiStatus) {
      case ASYNC_STATUS.LOADING:
        return <p>Loading.......</p>;
      case ASYNC_STATUS.SUCCESS:
        return (
          <>
            {apiRes.data.map(user => (
              <User data={user} key={user.id} />
            ))}
          </>
        );
      case ASYNC_STATUS.ERROR:
        return <p> Somthing Went Wrong</p>;
    }
  };

  return <div className="user-box">{_renderJSX()}</div>;
};

export default User;
