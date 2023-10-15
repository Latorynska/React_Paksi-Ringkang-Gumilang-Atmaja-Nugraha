import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextArea from "../components/TextArea/TextArea";
import { generateText } from "../redux/thunks/aiApi";
import Swal from 'sweetalert2';

const AiForm = () => {
    const dispatch = useDispatch();
    const [prompt, setPrompt] = useState('');
    const { loading, message, urlImage, error} = useSelector((state) => state.ai);

    const handleInputChange = (e) => {
        setPrompt(e.target.value);
    }

    const handleGenerateText = (e) => {
        e.preventDefault();
        dispatch(generateText(prompt));
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
        <main className="container">
            <form action="">
                <TextArea 
                    className={`form-control`}
                    name="prompt"
                    cols={30}
                    rows={5}
                    value={prompt}
                    onChange={(e) => handleInputChange(e)}
                />
                {
                    message && 
                    <p>{message}</p>
                }
                <button 
                    className="btn btn-lg btn-primary"
                    onClick={e => handleGenerateText(e)}
                >
                    Generate text
                </button>
            </form>
        </main>
        </>
     );
}
 
export default AiForm;