const AddProduct = () => {
  return (
    <div className="max-w-7xl p-5 mx-auto">
      <form>
        <div className="w-full">


          <div className="grid grid-cols-2 gap-7">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Image:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        placeholder="Image URL"
        className="w-full input input-bordered"
      />
    </label>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Name:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        placeholder="Product Name"
        className="w-full input input-bordered"
      />
    </label>
    
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Brand Name:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        placeholder="Brand Name"
        className="w-full input input-bordered"
      />
    </label>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Type:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        placeholder="Product Type"
        className="w-full input input-bordered"
      />
    </label>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Price:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        placeholder="Product Price"
        className="w-full input input-bordered"
      />
    </label>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Short Description:</span>
    </label>
    <label className="input-group">
      <textarea
        placeholder="Product Description"
        className="w-full input input-bordered"
      ></textarea>
    </label>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Rating:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        placeholder="Product Rating"
        className="w-full input input-bordered"
      />
    </label>
  </div>
         
          </div>


        </div>
        <button className="w-full btn btn-secondary my-5" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
