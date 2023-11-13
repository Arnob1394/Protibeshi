import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import UploadWidget from '../../Components/UploadWidget';

function Additem() {
    const { user } = useContext(AuthContext);
    const [photoURL, setPhotoURL] = useState('');

    const handleImageUpload = (url) => {
        setPhotoURL(url);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let caution = 0;
        const form = e.target;

        const name = form.name.value;
        const description = form.description.value;
        const category = form.category.value;
        const condition = form.condition.value;
        const age = form.age.value;
        const price = form.price.value;
        const photos = form.photos.value;
        const contact = form.contact.value;
        const duration = form.duration.value;
        const apartment = form.apartment.value;
        const building = form.building.value;
        const street = form.street.value;
        const area = form.area.value;
        const city = form.city.value;
        const map = form.map.value;

        caution = (price * age) - (price * condition);
        console.log(caution);

        const data = {
            name,
            description,
            condition,
            category,
            age,
            photos: photoURL,
            contact,
            price,
            duration,
            apartment,
            building,
            street,
            area,
            city,
            map,
            caution,
            user: user.displayName,
            userImage: user.photoURL,
        }

        console.log(photos);
        console.log(photoURL);

        console.log(data);
        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(d => console.log(d));
    }
    return (
        <>
            <div class="flex flex-row justify-center">
                <div>
                    <div class="text-4xl font-bold mt-12 ml-12">
                        <label>Item Description</label>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div class="text-base font-bold mt-4 ml-2">
                                <label>Category</label>
                            </div>
                            <div class="text-sm">
                                <label>*Required</label>
                            </div>
                            <div>
                                <select class="w-96 bg-[#F4F5F7] border-none rounded" name="category">
                                    <option class="text-[#50d71e]" value="" disabled selected placeholder='Select Category'></option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Gaming">Gaming</option>
                                    <option value="Sports">Books</option>
                                    <option value="Tools">Tools</option>
                                    <option value="Sports">Sports</option>
                                </select>
                            </div>
                            <div class="text-base font-bold mt-4">
                                <label>Describe Item</label>
                            </div>
                            <div>
                                <label>Name</label>
                            </div>
                            <div class="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm text-[#7C706B]">
                                <label>Required</label>
                            </div>
                            <div>
                                <input class="w-96 bg-[#F4F5F7] border-none rounded" type="text" name="name" placeholder='Type Title'></input>
                            </div>
                            <div class="mt-4">
                                <label>Description</label>
                            </div>
                            <div>
                                <textarea class="w-96 bg-[#F4F5F7] border-none rounded" rows="4" cols="50" name="description" placeholder='description'></textarea>
                            </div>
                            <div class="text-base font-bold mt-4">
                                <label>Select Condition & Age</label>
                            </div>
                            <div>
                                <select class="w-96 bg-[#F4F5F7] border-none rounded" name="condition">
                                    <option value="" disabled selected>Select Condition</option>
                                    <option value=".1">Flawless</option>
                                    <option value=".15">Excellent</option>
                                    <option value=".2">Good</option>
                                    <option value=".25">Average</option>
                                    <option value=".30">Poor</option>
                                </select>
                            </div>
                            <div class="mt-4">
                                <label>Age</label>
                            </div>
                            <div>
                                <select class="w-96 bg-[#F4F5F7] border-none rounded" name="age">
                                    <option value="" disabled selected>Select Age</option>
                                    <option value="0.8">Less than 1 year</option>
                                    <option value="0.7">Less than 2 year</option>
                                    <option value="0.6">Less than 5 year</option>
                                    <option value="0.5">Less than 10 year</option>
                                </select>
                            </div>
                            <div class="text-base font-bold mt-4">
                                <label>Add Photos</label>
                            </div>
                            
                            
                            <div name="photos" class="w-44 bg-[#444AC4] text-[#FFFFFF] border-none rounded text-center ml-4 h-9">
                                <UploadWidget onImageUpload={handleImageUpload}>
                                </UploadWidget>
                            </div>
                            

                            <div>
                            <input class="w-96 bg-[#F4F5F7] border-none rounded" type="text" name="photos" placeholder='Upload Photo URL'></input>
                            </div>
                            <div>

                            </div>
                            <div class="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm text-[#7C706B]">
                                <label>*Required-The maximum photo size is 15MB</label>
                            </div>
                        {/* <div>icon</div> */}
                            <div class="text-base font-bold mt-4">
                                <label>Contact Details</label>
                            </div>
                            <div>
                                <input class="w-96 bg-[#F4F5F7] border-none rounded" type="text" name="contact" placeholder='Contact or phone number'></input>
                            </div>
                            <div class="text-4xl font-bold mt-12 ml=12 mb-12">
                                <label>Pricing</label>
                            </div>
                            <div class="text-base font-bold">
                                <label >Choose duration and rate</label>
                            </div>
                            <div>
                            <input class="w-96 bg-[#F4F5F7] border-none rounded mt-4" type="text" name="price" placeholder='Real Price'></input>  
                            </div>
                            <div class="mt-4">
                                <select class="w-96 bg-[#F4F5F7] border-none rounded" name="duration">
                                    <option value="" disabled selected>Select Duration</option>
                                    <option value="1 week">1 week</option>
                                    <option value="2 week">2 week</option>
                                    <option value="1 month">1 month</option>
                                </select>
                            </div>
                            <div class="text-4xl font-bold mt-12 mb-12 ml=12 ">
                                <label>Location</label>
                            </div>
                            <div class="text-base font-bold mt-4">
                                <label>Provide details about location</label>
                            </div>
                            <div>
                                <input class="w-96 bg-[#F4F5F7] border-none rounded mt-4" type="text" name="apartment" placeholder='Apartment'></input>
                            </div>
                            <div>
                                <input class="w-96 bg-[#F4F5F7] border-none rounded mt-4" type="text" name="building" placeholder='Building'></input>
                            </div>
                            <div>
                                <input class="w-96 bg-[#F4F5F7] border-none rounded mt-4" type="text" name="street" placeholder='Street'></input>
                            </div>
                            <div>
                                <input class="w-96 bg-[#F4F5F7] border-none rounded mt-4" type="text" name="area" placeholder='Area'></input>
                            </div>
                            <div>
                                <input class="w-96 bg-[#F4F5F7] border-none rounded mt-4" type="text" name="city" placeholder='City'></input>
                            </div>

                            <div>
                                <input class="w-96 bg-[#F4F5F7] border-none rounded mt-4" type="text" name="map" placeholder='Map link'></input>
                            </div>

                            <div class="flex flex-row justify-center mt-8 mb-8">
                                <div class="w-44 text-[#444AC4] border-none rounded text-center h-9 ">
                                    <button type=''>Back</button>
                                </div>
                                <div class="w-44 bg-[#444AC4] text-[#FFFFFF] border-none rounded text-center ml-4 h-9">
                                    <button type='submit'>Next</button>
                                </div>
                            </div>
                        
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Additem;