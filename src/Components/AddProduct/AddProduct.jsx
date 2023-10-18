const AddProduct = () => {
  return (
    <div className="max-w-7xl p-5 mx-auto">
      <form>
        <div className="w-full">


          <div className="grid grid-cols-2 gap-7">
          <div className="form-control">
    <label className="label">
      <span className="label-text text-3xl font-bold ">Image:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        required
        name="photo"
        placeholder="Image URL"
        className="w-full input input-bordered"
      />
    </label>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-3xl font-bold ">Product Name:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        required
        name="name"
        placeholder="Product Name"
        className="w-full input input-bordered"
      />
    </label>
    
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-3xl font-bold ">Brand Name:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        required
        name="BrandName"
        placeholder="Brand Name"
        className="w-full input input-bordered"
      />
    </label>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-3xl font-bold ">Type:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        name="type"
        placeholder="Product Type"
        className="w-full input input-bordered"
      />
    </label>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-3xl font-bold ">Price:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        required
        name="price"
        placeholder="Product Price"
        className="w-full input input-bordered"
      />
    </label>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-3xl font-bold ">Short Description:</span>
    </label>
    <label className="input-group">
      <textarea
        placeholder="Product Description"
        required
        name="description"
        className="w-full input input-bordered"
      ></textarea>
    </label>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-3xl font-bold ">Rating:</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        required
        name="rating"
        placeholder="Product Rating"
        className="w-full input input-bordered"
      />
    </label>
  </div>
         
          </div>

        </div>
        <button className="w-full btn btn-secondary my-5 text-3xl font-bold " type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
