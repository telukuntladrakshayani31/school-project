import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../App.css'// adding css 

export default function AddSchool() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("contact", data.contact);
      formData.append("email_id", data.email_id);
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      await axios.post("http://localhost:5000/api/schools", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("School added successfully!");
      reset();
    } catch (err) {
      console.error("Error uploading school:", err);
      alert("Failed to add school.");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Add New School</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <input {...register("name", { required: true })} placeholder="School Name" />
          {errors.name && <p className="error">School name is required</p>}
          
          <input {...register("address", { required: true })} placeholder="Address" />
          {errors.address && <p className="error">Address is required</p>}
          
          <input {...register("city", { required: true })} placeholder="City" />
          {errors.city && <p className="error">City is required</p>}
          
          <input {...register("state", { required: true })} placeholder="State" />
          {errors.state && <p className="error">State is required</p>}
          
          <input {...register("contact", { required: true })} type="number" placeholder="Contact Number" />
          {errors.contact && <p className="error">Contact number is required</p>}
          
          <input {...register("email_id", { required: true })} type="email" placeholder="Email Address" />
          {errors.email_id && <p className="error">Valid email is required</p>}
          
          <input {...register("image")} type="file" accept="image/*" />
          
          <button type="submit">Add School</button>
        </form>
      </div>
    </div>
  );
}
