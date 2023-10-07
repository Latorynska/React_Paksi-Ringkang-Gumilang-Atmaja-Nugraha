import './styles.css'
import AboutImg from '../../assets/img/about-image.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/slices/loadingSlice'

const AboutUs = () => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loading.isLoading)

    useEffect(() => {
        dispatch(setLoading(true));

        axios({
            url: 'https://api.jsonbin.io/v3/b/6520ae1b0574da7622b57c9f',
            method: 'GET',
            headers: {
                'X-MASTER-KEY': '$2a$10$Y2miwR./bG/c7A4lwiX70.yv7hcxjdd3eIXNJ6Bv4vmna90yw9efq',
                'X-ACCESS-KEY': '$2a$10$IAGhjQDP.s.jlhk/4O7Ws.QB0ULFu7NKtINGczMVP6FfAbVh1bsaC'
            }
        }).then(res => {
            setData(res.data.record);
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while fetching data!',
            })
        }).finally(res => {
            dispatch(setLoading(false));
        })

    }, []);
    
    useEffect(() => {
        if (isLoading) {
            // Show loading modal using SweetAlert
            Swal.fire({
            title: 'We\'re getting the data for you :)',
            allowOutsideClick: false, // Prevent dismissing the modal by clicking outside
            showConfirmButton: false, // Hide the confirmation button
            didOpen: () => {
                Swal.showLoading();
            }
            });
        } else {
            // Close the loading modal
            Swal.close();
        }
    }, [isLoading]);

    return ( 
        <>
            {
                isLoading ? 
                <></> :
                <>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="upper-box">
                            <h1 className="center-content">
                                {data.title}
                            </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6 offset-md-3">
                            <div className="image-container center-content">
                            <img
                                src={AboutImg}
                                alt="About Us Image"
                                className="about-image"
                            />
                            </div>
                            <p className="mt-4 text-justify">
                                {data.text}
                            </p>
                        </div>
                    </div>
                </>
            }
            
        </>
     );
}
 
export default AboutUs;