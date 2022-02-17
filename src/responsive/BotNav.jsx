import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { AccountCircle, AddBox, Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from './responsive';
import { user } from '../data';

const Container = styled.div`
    display: none;
    width: 100%;
    bottom: 0;
    position: fixed;

    ${mobile({
        display: 'initial'
    })}
`
const Profile = styled.img`
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 50%;
`

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState('Home');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  }
  
  const handleAdd = () => {
    navigate('/add');
  }
  
  const handleProfile = () => {
    navigate('/profile/' + user.id);
  }
  
  return (
      <Container>
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction label="Home" icon={<Home />} onClick={handleHome}/>
                <BottomNavigationAction label="Add" icon={<AddBox />} onClick={handleAdd}/>
                <BottomNavigationAction label="Profile" icon={<Profile src={user.avatar} />} onClick={handleProfile}/> 
            </BottomNavigation>
        </Box>
      </Container>
  );
}
