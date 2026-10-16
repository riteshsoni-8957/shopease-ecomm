"use client";
import { updateUserAction } from "../../serverAction/auth"

function ProfileForm({user}) {
  return (
    <div className="px-6 sm:px-12 lg:px-24 xl:px-30 2xl:px-48">
        <form  action={updateUserAction} className='flex flex-col space-y-3' >
            {/* name div */}
            <div className="flex flex-col space-y-1">
                <label 
                    htmlFor="name"
                    className='text-gray-800 text-lg font-mono'
                >
                    Full Name
                </label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    defaultValue={user.name}
                    className='border border-gray-500 rounded-[7px] h-[33px] text-lg px-4 pb-0.5' 
                />
            </div>

            {/* phone no. div */}
            <div className="flex flex-col space-y-1">
                <label 
                    htmlFor="Phone"
                    className='text-gray-800 text-lg font-mono'
                >
                    Phone No.
                </label>
                <input 
                    type="tel" 
                    name="phone"
                    id="phone"
                    defaultValue={user.phone ? user.phone : ""}
                    placeholder={user.phone ? "" : "+91 XXXXXXXXXX"}
                    minLength={10}
                    maxLength={10}
                    required
                    className='border border-gray-500 rounded-[7px] h-[33px] text-lg px-4 pb-0.5' 
                />
            </div>

            {/* address div */}
            <div className="flex flex-col space-y-1">
                <label 
                    className="text-gray-800 text-lg font-mono"
                >
                    Address
                </label>

                {/* address inputs div */}
                <div className="grid grid-cols-2 md:grid-cols-3 space-x-2 space-y-2">
                    <input 
                        type="text" 
                        name="street"
                        id="street"
                        defaultValue={user.address.street ? user.address.street : ""}
                        placeholder={user.address.street ? "" : "Street"}
                        required
                        className='border border-gray-500 rounded-[7px] h-[33px] text-lg px-4 pb-0.5'                         
                    />
                    <input 
                        type="text" 
                        name="city"
                        id="city"
                        defaultValue={user.address.city ? user.address.city : ""}
                        placeholder={user.address.city ? "" : "City"}
                        required
                        className='border border-gray-500 rounded-[7px] h-[33px] text-lg px-4 pb-0.5'                         
                    />
                    <input 
                        type="text" 
                        name="state"
                        id="state"
                        defaultValue={user.address.state ? user.address.state : ""}
                        placeholder={user.address.state ? "" : "State"}
                        required
                        className='border border-gray-500 rounded-[7px] h-[33px] text-lg px-4 pb-0.5'                         
                    />
                    <input 
                        type="number" 
                        name="pincode"
                        id="pincode"
                        defaultValue={user.address.pincode ? user.address.pincode : ""}
                        placeholder={user.address.pincode ? "" : "Pincode"}
                        required
                        className='border border-gray-500 rounded-[7px] h-[33px] text-lg px-4 pb-0.5'                         
                    />
                    <input 
                        type="text" 
                        name="country"
                        id="country"
                        defaultValue={user.address.country ? user.address.country : ""}
                        placeholder={user.address.country ? "" : "Country"}
                        required
                        className='border border-gray-500 rounded-[7px] h-[33px] text-lg px-4 pb-0.5'                         
                    />
                </div>
            </div>

            {/* image url div */}
            <div className="flex flex-col space-y-1">
                <label 
                    htmlFor="avatar"
                    className='text-gray-800 text-lg font-mono'
                >
                    Image url 
                </label>
                <input 
                    type="url" 
                    name="avatar"
                    id="avatar"
                    defaultValue={user.avatar ? user.avatar : ""}
                    className='border border-gray-500 rounded-[7px] h-[33px] text-lg px-4 pb-0.5' 
                />
            </div>

            <button 
                type="submit"
                className='bg-blue-500/50 hover:bg-blue-400 w-full h-[35px] rounded-[10px] text-xl font-semibold pb-1 mt-2'      
            >
                Update Profile
            </button>
        </form>
    </div>
  )
}

export default ProfileForm