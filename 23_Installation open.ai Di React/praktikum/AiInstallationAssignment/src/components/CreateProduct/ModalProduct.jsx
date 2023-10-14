const ModalProduct = ({ showModal, setshowModal }) => {
    const closeModal = () => {
        setshowModal(false);
    };

    return (
        showModal ?
        <>
            <div
                className={`modal fade show`}
                id="productModal"
                tabIndex="1"
                style = {{display:'block'}}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="productModalLabel">
                                Product Details
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={closeModal}
                            />
                        </div>
                        <div className="modal-body">
                            <dl className="row">
                                <dt className="col-sm-5">Product Name:</dt>
                                <dd className="col-sm-7" id="modalProductName" />
                                <dt className="col-sm-5">Product Category:</dt>
                                <dd className="col-sm-7" id="modalProductCategory" />
                                <dt className="col-sm-5">Product Freshness:</dt>
                                <dd className="col-sm-7" id="modalProductFreshness" />
                                <dt className="col-sm-5">Description:</dt>
                                <dd className="col-sm-7" id="modalProductDescription" />
                                <dt className="col-sm-5">Product Price:</dt>
                                <dd className="col-sm-7" id="modalProductPrice" />
                            </dl>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-success"
                                id="continueSubmitButton"
                            >
                                Continue Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </> :
        <></>
    );
};

export default ModalProduct;
