import user from './user'
import { getUsersCollection, initiateUserDetailsCall, initiateCreateUserCall, setUserFromFirebaseEmail, setUserFromGoogle, clearUser, addError, clearError, initiateUserPasswordEmail, resetUserPasswordEmail, resetUserPasswordEmailError, initiateFirebaseCall, getAuthDetailsFromFirebase, addCustomUserData, getUsers } from './user'

describe('default reducer', () => {
  it('should set isFetchingAuthorization to true', () => {
    let action = {
      type: 'user/GET_AUTHORIZATION',
      isFetchingAuthorization: true,
    };
    let newState = user({}, action)
    expect(newState.isFetchingAuthorization).toEqual(true)
  });  
  
  it('should set isFetchingAuthorization to true with default parameter', () => {
    let action = {
      type: 'user/GET_AUTHORIZATION',
      isFetchingAuthorization: true
    };
    let newState = user(undefined, action)
    expect(newState.isFetchingAuthorization).toEqual(true)
  });
  
  it('should set haveToken to false', () => {
    let action = {
      type: 'user/GET_AUTHORIZATION',
      haveToken: false,
    };
    let newState = user({}, action)
    expect(newState.haveToken).toEqual(false)
  });
  
  it('should set error to null', () => {
    let action = {
      type: 'user/GET_AUTHORIZATION',
      error: null,
    };
    let newState = user({}, action)
    expect(newState.error).toEqual(null)
  });
  
  it('should set isFetchingAuthorization to false', () => {
    let action = {
      type: 'user/GET_AUTHORIZATION_COMPLETE',
      isFetchingAuthorization: false,
    };
    let newState = user({}, action)
    expect(newState.isFetchingAuthorization).toEqual(false)
  });
  
  it('should set haveToken to true', () => {
    let action = {
      type: 'user/GET_AUTHORIZATION_COMPLETE',
      haveToken: true,
    };
    let newState = user({}, action)
    expect(newState.haveToken).toEqual(true)
  });
  
  it('should set haveUser to true', () => {
    let action = {
      type: 'user/GET_AUTHORIZATION_COMPLETE',
      haveUser: true,
    };
    let newState = user({}, action)
    expect(newState.haveUser).toEqual(true)
  });
  
  it('should set user', () => {
    let action = {
      type: 'user/GET_AUTHORIZATION_COMPLETE',
      user: {firstName: 'Bob', lastName: 'Ross', email: 'user.email'}
    };
    let newState = user({}, action)
    expect(newState.user.firstName).toEqual('Bob')
    expect(newState.user.lastName).toEqual('Ross')
    expect(newState.user.email).toEqual('user.email')
  });
  
  it('should set isFetchingUserData to true', () => {
    let action = {
      type: 'user/GET_USER_DATA',
      isFetchingUserData: true,
    };
    let newState = user({}, action)
    expect(newState.isFetchingUserData).toEqual(true)
  }); 
  
  it('should set haveUser to true', () => {
    let action = {
      type: 'user/GET_USER_DATA',
      haveUser: true,
    };
    let newState = user({}, action)
    expect(newState.haveUser).toEqual(true)
  }); 
   
  it('should set isFetchingUserData to false', () => {
    let action = {
      type: 'user/GET_USER_DATA_COMPLETE',
      isFetchingUserData: false,
    };
    let newState = user({}, action)
    expect(newState.isFetchingUserData).toEqual(false)
  }); 
  
  it('should set isFetchingAuthorization to false', () => {
    let action = {
      type: 'user/GET_USER_DATA_COMPLETE',
      isFetchingAuthorization: false,
    };
    let newState = user({}, action)
    expect(newState.isFetchingAuthorization).toEqual(false)
  }); 
  
  it('should set haveUser to true', () => {
    let action = {
      type: 'user/GET_USER_DATA_COMPLETE',
      haveUser: true,
    };
    let newState = user({}, action)
    expect(newState.haveUser).toEqual(true)
  });
  
  it('should set users', () => {
    let action = {
      type: 'user/FETCHING_USERS',
      users: {name: 'bob ross'}
    };
    let newState = user({}, action)
    expect(newState.users.name).toEqual('bob ross')
  });
  
  it('should set user object', () => {
    let action = {
      type: 'user/LOGIN',
      user: {name: 'User Name'}
    };
    let newState = user({}, action)
    expect(newState.user.name).toEqual('User Name')
  }); 
  
  it('should set isFetchingDataFromFirebase to false', () => {
    let action = {
      type: 'user/LOGIN',
      isFetchingDataFromFirebase: true,
    };
    let newState = user({}, action)
    expect(newState.isFetchingDataFromFirebase).toEqual(true)
  }); 
  
  it('should set user to null', () => {
    let action = {
      type: 'user/LOGOUT',
      user: null
    };
    let newState = user({}, action)
    expect(newState.user).toEqual(null)
  });
  
  it('should catch user error', () => {
    let action = {
      type: 'user/USER_ERROR',
      error: true
    };
    let newState = user({}, action)
    expect(newState.error).toEqual(true)
  });
  
  it('should set isCreatingUser to true', () => {
    let action = {
      type: 'user/CREATE_USER',
      isCreatingUser: true,
    };
    let newState = user({}, action)
    expect(newState.isCreatingUser).toEqual(true)
  });
  
  it('should set haveUser to false', () => {
    let action = {
      type: 'user/CREATE_USER',
      haveUser: false
    };
    let newState = user({}, action)
    expect(newState.haveUser).toEqual(false)
  });
  
  it('should set isCreatingUser to false', () => {
    let action = {
      type: 'user/CREATE_USER_COMPLETE',
      isCreatingUser: false
    };
    let newState = user({}, action)
    expect(newState.isCreatingUser).toEqual(false)
  });
  
  it('should set haveUser to true', () => {
    let action = {
      type: 'user/CREATE_USER_COMPLETE',
      haveUser: true
    };
    let newState = user({}, action)
    expect(newState.haveUser).toEqual(true)
  });
  
  it('should set user to null', () => {
    let action = {
      type: 'user/NO_USER',
      user: null
    };
    let newState = user({}, action)
    expect(newState.user).toEqual(null)
  });
  
  it('should set isFetchingUserData to false', () => {
    let action = {
      type: 'user/NO_USER',
      isFetchingUserData: false
    };
    let newState = user({}, action)
    expect(newState.isFetchingUserData).toEqual(false)
  });
  
  it('should set isFetchingUserData to false', () => {
    let action = {
      type: 'user/NO_USER',
      isFetchingUserData: false
    };
    let newState = user({}, action)
    expect(newState.isFetchingUserData).toEqual(false)
  });
  
  it('should set haveUser to false', () => {
    let action = {
      type: 'user/NO_USER',
      haveUser: false
    };
    let newState = user({}, action)
    expect(newState.haveUser).toEqual(false)
  });
  
  it('should set haveUser to false', () => {
    let action = {
      type: 'user/ADD_ERROR',
      haveUser: false
    };
    let newState = user({}, action)
    expect(newState.haveUser).toEqual(false)
  });
  
  it('should set isFetchingAuthorization to false', () => {
    let action = {
      type: 'user/ADD_ERROR',
      isFetchingAuthorization: false
    };
    let newState = user({}, action)
    expect(newState.isFetchingAuthorization).toEqual(false)
  });
  
  it('should set isFetchingUserData to false', () => {
    let action = {
      type: 'user/ADD_ERROR',
      isFetchingUserData: false
    };
    let newState = user({}, action)
    expect(newState.isFetchingUserData).toEqual(false)
  });
  
  it('should set error to true', () => {
    let action = {
      type: 'user/ADD_ERROR',
      error: true
    };
    let newState = user({}, action)
    expect(newState.error).toEqual(true)
  });
  
  it('should set haveUser to false', () => {
    let action = {
      type: 'user/CLEAR_ERROR',
      haveUser: false
    };
    let newState = user({}, action)
    expect(newState.haveUser).toEqual(false)
  });
  
  it('should set isFetchingAuthorization to false', () => {
    let action = {
      type: 'user/CLEAR_ERROR',
      isFetchingAuthorization: false
    };
    let newState = user({}, action)
    expect(newState.isFetchingAuthorization).toEqual(false)
  });
  
  it('should set isFetchingUserData to false', () => {
    let action = {
      type: 'user/CLEAR_ERROR',
      isFetchingUserData: false
    };
    let newState = user({}, action)
    expect(newState.isFetchingUserData).toEqual(false)
  });
  
  it('should set error to null', () => {
    let action = {
      type: 'user/CLEAR_ERROR',
      error: null
    };
    let newState = user({}, action)
    expect(newState.error).toEqual(null)
  });
  
  it('should set isResettingPassword to true', () => {
    let action = {
      type: 'user/RESET_USER_PASSWORD',
      isResettingPassword: true
    };
    let newState = user({}, action)
    expect(newState.isResettingPassword).toEqual(true)
  });
  
  it('should set passwordResetComplete to false', () => {
    let action = {
      type: 'user/RESET_USER_PASSWORD',
      passwordResetComplete: false
    };
    let newState = user({}, action)
    expect(newState.passwordResetComplete).toEqual(false)
  });
  
  it('should set isResettingPassword to false', () => {
    let action = {
      type: 'user/RESET_USER_PASSWORD_COMPLETE',
      isResettingPassword: false
    };
    let newState = user({}, action)
    expect(newState.isResettingPassword).toEqual(false)
  });
  
  it('should set passwordResetComplete to true', () => {
    let action = {
      type: 'user/RESET_USER_PASSWORD_COMPLETE',
      passwordResetComplete: true
    };
    let newState = user({}, action)
    expect(newState.passwordResetComplete).toEqual(true)
  });
  
  it('should set isResettingPassword to true', () => {
    let action = {
      type: 'user/RESET_USER_PASSWORD_ERROR',
      isResettingPassword: false
    };
    let newState = user({}, action)
    expect(newState.isResettingPassword).toEqual(false)
  });
  
  it('should set passwordResetComplete to false', () => {
    let action = {
      type: 'user/RESET_USER_PASSWORD_ERROR',
      passwordResetComplete: false
    };
    let newState = user({}, action)
    expect(newState.passwordResetComplete).toEqual(false)
  });
  
  it('should set error to true', () => {
    let action = {
      type: 'user/RESET_USER_PASSWORD_ERROR',
      error: true
    };
    let newState = user({}, action)
    expect(newState.error).toEqual(true)
  });
  
  it('should use default case', () => {
    let action = {
      type: 'test type'
    };
    let newState = user({test: true}, action)
    expect(newState.test).toEqual(true)
  });
});

describe('getUsersCollection', () => {
  it('should call getUsersCollection', () => {
    let data = {user: 'test'}
    let getUsersCollection = jest.fn()
    getUsersCollection(data);
    expect(getUsersCollection).toHaveBeenCalled();
  });
});

describe('initiateUserDetailsCall', () => {
  it('should dispatch actions', () => {
    let data = {user: 'test'}
    let dispatch = jest.fn()
    initiateUserDetailsCall(data)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('initiateCreateUserCall', () => {
  it('should dispatch actions', () => {
    let dispatch = jest.fn()
    initiateCreateUserCall()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('setUserFromFirebaseEmail', () => {
  it('should call setUserFromFirebaseEmail', () => {
    let user = {email: 'email@gmail.com',
      id: 1}
    let dispatch = jest.fn()
    setUserFromFirebaseEmail(user)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('setUserFromGoogle', () => {
  it('should dispatch actions', () => {
    let user = {name: 'test user', credential: {signInMethod: jest.fn()}}
    let dispatch = jest.fn()
    setUserFromGoogle(user)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('clearUser', () => {
  it('should dispatch actions', () => {
    let dispatch = jest.fn()
    clearUser()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('addError', () => {
  it('should dispatch actions', () => {
    let error: true
    let dispatch = jest.fn()
    addError(error)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('clearError', () => {
  it('should dispatch actions', () => {
    let dispatch = jest.fn()
    clearError()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('initiateUserPasswordEmail', () => {
  it('should dispatch actions', () => {
    let dispatch = jest.fn()
    initiateUserPasswordEmail()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('resetUserPasswordEmail', () => {
  it('should dispatch actions', () => {
    let dispatch = jest.fn()
    resetUserPasswordEmail()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('resetUserPasswordEmailError', () => {
  it('should dispatch actions', () => {
    let error = true
    let dispatch = jest.fn()
    resetUserPasswordEmailError(error)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('initiateFirebaseCall', () => {
  it('should dispatch actions', () => {
    let dispatch = jest.fn()
    initiateFirebaseCall()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('getAuthDetailsFromFirebase', () => {
  it('should dispatch actions', () => {
    let user = {user: 'test'}
    let accountSource = true
    let dispatch = jest.fn()
    getAuthDetailsFromFirebase(user, accountSource)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('addCustomUserData', () => {
  it('should dispatch actions', () => {
    let user = {user: 'test'}
    let accountSource = true
    let userId = 1
    let dispatch = jest.fn()
    addCustomUserData(user, accountSource, userId)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  it('should not dispatch actions with no accountSource', () => {
    let user = {user: 'test'}
    let accountSource = false
    let userId = 1
    let dispatch = jest.fn()
    addCustomUserData(user, accountSource, userId)(dispatch);
    expect(dispatch).not.toHaveBeenCalled();
  });
  it('should dispatch actions and set userIdentifier', () => {
    let user = {user: 'test', id: [1]}
    let accountSource = true
    let userId = 1
    let dispatch = jest.fn()
    addCustomUserData(user, accountSource, userId)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  it('should dispatch actions and set userIdentifier to localId', () => {
    let user = {user: 'test', localId: [1]}
    let accountSource = true
    let userId = 1
    let localId = 1
    let dispatch = jest.fn()
    addCustomUserData(user, accountSource, userId, localId)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  it('should dispatch actions and set userIdentifier to userRole', () => {
    let user = {user: 'test', role: [1]}
    let accountSource = true
    let userId = 1
    let localId = 1
    let userRole = {isAdmin: true, isPropertyManager: true, isStaff: true}
    let dispatch = jest.fn()
    addCustomUserData(user, accountSource, userId, localId)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

describe('getUsers', () => {
  it('should fetch mock data', () => {
    window.fetch = mockFetch({id: 1});
    let dispatch = jest.fn();
    return getUsers()(dispatch).then( () => {
      expect(window.fetch).toHaveBeenCalledTimes(1);
    });
  });
});