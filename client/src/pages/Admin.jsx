/* eslint-disable react-refresh/only-export-components */
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/StatsContainer';
import { StatsItem } from '../components';
import { FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa';

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('You are not authorize to access this page');

    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();
  console.log(users, jobs);
  return (
    <Wrapper>
      <StatsItem
        title="current user"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatsItem
        title="total jobs"
        count={jobs}
        color="#647abc"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};
export default Admin;
