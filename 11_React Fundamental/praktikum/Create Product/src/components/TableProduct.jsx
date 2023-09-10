const TableProduct = () => {
    return ( 
        <>
            <div className="row">
                <h1 className="text-center">List Product</h1>
            </div>
            <div className="row">
                <div className="col-12">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Image Of product</th>
                        <th>Product Freshness</th>
                        <th>Additional Description</th>
                        <th>Product Price</th>
                    </tr>
                    </thead>
                    <tbody id="table-body"></tbody>
                </table>
                </div>
            </div>
            <div className="container row">
                <div className="col-md-3">
                <input
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="Search by Product Name"
                />
                </div>
            </div>
            <div className="container row">
                <div className="col-md-3">
                <button className="btn btn-sm btn-primary" id="btn-delete-data">
                    Deletion
                </button>
                <button className="btn btn-sm btn-outline-primary" id="btn-search">
                    Search
                </button>
                </div>
            </div>
        </>
     );
}
 
export default TableProduct;