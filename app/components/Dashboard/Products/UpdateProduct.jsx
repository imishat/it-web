

"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function UpdateProduct() {
  // files
  const [files, setFiles] = useState([]);
  console.log(files);
  const { register, handleSubmit, reset } = useForm();

  const [value, setValue] = useState("Description");
  console.log(value);
  const handleCreateService = (data) => {
    const serviceData = {
      title: data?.title,
      descripton: value,
      servicePicture: data?.images,
      categoryId: data?.categoryId,
    };
    console.log(serviceData);
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(handleCreateService)}
          className="md:flex gap-4"
        >
          <div className="flex flex-col w-full">
            <p className="px-4 w-full py-2 bg-base-200 mt-3">Title</p>
            <input
              {...register("title", { required: true })}
              className="px-4 py-2 border border-gray-400"
              type="Title"
              defaultValue={'Title'}
              id=""
            />
            {/* description */}
            <p className="px-4 w-full py-2 bg-base-200 mt-3">Description</p>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
          <div className="md:w-96 flex flex-col">
            {/* categories */}
            <div className="w-full">
              <p className="px-4 w-full py-2 bg-base-200 mt-3">
                Select Categories
              </p>
              <select
                className="select w-full select-bordered rounded-none"
                id=""
              >
                <option value="value">Value</option>
              </select>
            </div>
            {/* Images */}
            <div className="mt-5">
              <p className="px-4 w-full py-2 bg-base-200 mt-3">Select Images</p>
              <label
                className="w-full h-44 border-dashed duration-300 border border-gray-300 hover:border-gray-400 flex items-center justify-center"
                htmlFor="image"
              >
                {files?.length
                  ? `${files?.length} Images Selected`
                  : "Select Images"}
                <input
                  onChange={(e) => setFiles(e.target.files)}
                  type="file"
                  accept="image/png, image/jpeg"
                  multiple
                  hidden
                  id="image"
                />
              </label>
            </div>
            {/* Submit */}
            <button className="px-4 mt-6 py-2 bg-green-500 hover:bg-gray-400 text-white">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
