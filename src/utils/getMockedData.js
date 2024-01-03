import {
  ACTIVITY_DATA,
  PERFORMANCE_DATA,
  SESSIONS_DATA,
  USER_DATA,
} from "./MockedData";

export const getUserMockedData = (id) => {
  const data = USER_DATA.find((user) => user.id === Number(id));
  return data;
};

export const getActivityMockedData = (id) => {
  const data = ACTIVITY_DATA.find((activity) => activity.userId === Number(id));
  return data;
};

export const getSessionsMockedData = (id) => {
  const data = SESSIONS_DATA.find((session) => session.userId === Number(id));
  return data;
};

export const getPerformanceMockedData = (id) => {
  const data = PERFORMANCE_DATA.find(
    (performance) => performance.userId === Number(id)
  );
  return data;
};
