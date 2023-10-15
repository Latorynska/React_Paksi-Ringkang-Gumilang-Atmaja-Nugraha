import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextArea from "../components/TextArea/TextArea";
import Swal from 'sweetalert2';
import { generateImage } from "../redux/thunks/aiApi";

const AiImage = () => {
    const dispatch = useDispatch();
    const [prompt, setPrompt] = useState('');
    const { loading, urlImage, error} = useSelector((state) => state.ai);

    const handleInputChange = (e) => {
        setPrompt(e.target.value);
    }

    const handleGenerateText = (e) => {
        e.preventDefault();
        dispatch(generateImage(prompt));
    }
    useEffect(() => {
        if (loading) {
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
    }, [loading]);
    return ( 
        <>
        <main className="container mt-5">
            <form action="">
                <TextArea 
                    className={`form-control`}
                    name="prompt"
                    cols={30}
                    rows={5}
                    value={prompt}
                    onChange={(e) => handleInputChange(e)}
                />
                <div className="d-flex justify-content-center mt-2">
                    <button 
                        className="btn btn-lg btn-primary"
                        onClick={e => handleGenerateText(e)}
                    >
                        Generate Image
                    </button>
                </div>
                
            </form>
            <div className="mt-5 d-flex justify-content-center">
                {
                    urlImage ?
                    <div className="">
                        <img src={urlImage} alt="" />
                    </div>
                    :
                    <p>
                        foto anda akan tampil disini setelah dibuat!
                    </p>
                }
            </div>
        </main>
        </>
     );
}
 
export default AiImage;