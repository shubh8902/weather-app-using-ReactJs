import React, { useState } from 'react'
import { AppBar, Toolbar, styled, InputBase, Box, Button, Typography } from '@mui/material'
import { getWeather } from '../services/api';

const StyledTypo = styled(Typography)`
font-size: 20px;
font-weight: 600;
`

const Container = styled(Box)({
    // background: '#445A6F',
    padding: 10,
    position: 'relative',
    left: 200,
});

const Input = styled(InputBase)({
    color: '#000',
    background: '#fff',
    marginRight: 20,
    marginLeft: 20,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
});

const GetButton = styled(Button)({
    background: '#e67e22'
})

function Navbar({ setResult }) {

    const [data, setData] = useState({city:'', country:''})

    const handleChange = (e) => {
       setData({...data,[e.target.name]: e.target.value, country: e.target.value});
    }

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    }

    return (
        <AppBar>
            <Toolbar>
                <StyledTypo>Weather App</StyledTypo>
                <Container>
                    <Input
                        placeholder="City"
                        name="city"
                        onChange={(e)=>handleChange(e)}
                    />
                    <Input
                        placeholder="Country"
                        name="country"
                        onChange={(e)=>handleChange(e)}
                    />
                    <GetButton
                        variant="contained"
                        onClick={()=>getWeatherInfo()}
                    >Get Weather</GetButton>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;