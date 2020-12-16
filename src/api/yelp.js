import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nSovmS_aUKbZhzqF2uJUeYRCFhiGCHoMu7Yfly8e239-Dc5oRrj_K08vorns1Jl3I_SKuI2RPVSdXbj7iWJzy29Ou0aXNAEozfyShQ9wL2fJTdpHSelphpvq0ErSX3Yx'
    }
});