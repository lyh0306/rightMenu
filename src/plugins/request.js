import http from './axiosConfig';

export function getChannelList(token, online) {
  return http({
    method: 'get',
    url: '/api/v1/channel/list',
    params: {
      token,
      online
    },
  });
}
export function Login(username, password) {
    return http({
        method: 'get',
        url: '/api/v1/login',
        params: {
            username,
            password
        },
    });
}
export function streamStart(serial, code,token) {
    return http({
        method: 'get',
        url: '/api/v1/stream/start',
        params: {
            serial,
            code,
            token
        },
    });
}
export function controlPtz(serial, code, command, token) {
    return http({
        method: 'get',
        url: '/api/v1/control/ptz',
        params: {
            serial,
            code,
            command,
            token
        },
    });
}
export function streamStop(serial, code, token) {
    return http({
        method: 'get',
        url: '/api/v1/stream/stop',
        params: {
            serial,
            code,
            token
        },
    });
}
