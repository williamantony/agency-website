const status = {
  SUCCESS: {
    code: 200,
    text: 'SUCCESS',
  },
  CREATED: {
    code: 201,
    text: 'CREATED',
  },
  DELETED: {
    code: 202,
    text: 'DELETED',
  },
  MODIFIED: {
    code: 204,
    text: 'MODIFIED',
  },
  BAD_REQUEST: {
    code: 400,
    text: 'BAD_REQUEST',
  },
  UNAUTHORIZED: {
    code: 401,
    text: 'UNAUTHORIZED',
  },
  FORBIDDEN: {
    code: 403,
    text: 'FORBIDDEN',
  },
  USER_ERROR: {
    code: 422,
    text: 'USER_ERROR',
  },
  SERVER_ERROR: {
    code: 500,
    text: 'SERVER_ERROR',
  },
};

module.exports = status;
