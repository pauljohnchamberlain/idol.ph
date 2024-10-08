
import { UploadButton } from "@/utils/uploadthing";
import { useState,useEffect } from "react";
import Image from "next/image";
export default function Example() {
 

const [userinfo, setUserinfo] = useState({
  name: "junaid malik",
  username: "junaidmalik9069",
  email: "junaidmalik9069@gmail.com",
  role: "creator",
  profileImage: "",
  bannerImage: "",
  phone: "1234567890",
  city: "New Delhi",
  state: "Delhi",
  category: "fashion",
  description: "I am a fashion blogger",
  platforms: [
    {
      platform: "instagram",
      followers: "1000",
      profile: "https://www.instagram.com/junaidmalik9069/",
    },
    {
      platform: "youtube",
      followers: "1000",
      profile:"https://www.facebook.com/junaidmalik9069/"
    },
    {
      platform: "facebook",
      followers: "1000",
      profile:"https://www.youtube.com/@junaidmalik9069/"
    },
  ],
  packages: [
    {
      platform: "instagram",
      followers: "1000",
      price: "1000",
      title:"fwkjsdh,j",
      description: "I will post your product on my instagram",
    },
 
  ],

})
console.log(userinfo)


console.log(userinfo)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      fetch("/api/creator/getcreator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${btoa("junaid:2002")}`,
        },
        body: JSON.stringify({ email: user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserinfo(data.creator);
        });
    }
  }, []);
  const handleProfileImage = async (email,image) => {
    await fetch("/api/creator/profileImageupdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa("junaid:2002")}`,
      },
      body: JSON.stringify({
        email: email,
        profileImage: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  const handleBannerImage = async (email,image) => {
    await fetch("/api/creator/bannerimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa("junaid:2002")}`,
      },
      body: JSON.stringify({
        email: email,
        bannerImage: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  const handlePersonalInfo = async (e) => {
    e.preventDefault()
    await fetch("/api/creator/profileupdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa("junaid:2002")}`,
      },
      body: JSON.stringify({
        email: userinfo.email,
        name: userinfo.name,
        phone: userinfo.phone,
        city: userinfo.city,
        state: userinfo.state
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  const handleContentInfo = async (e) => {
    e.preventDefault()
    await fetch("/api/creator/addcontentinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa("junaid:2002")}`,
      },
      body: JSON.stringify({
        email: userinfo.email,
        category: userinfo.category,
        description: userinfo.description,
        platforms:userinfo.platforms
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }  
  const handlePackagesInfo = async (e) => {
    e.preventDefault()
    await fetch("/api/creator/addpackages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa("junaid:2002")}`,
      },
      body: JSON.stringify({
        email: userinfo.email,
       packages:userinfo.packages
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
      <div className="min-h-screen ">

      <div className="space-y-6 p-10">
     
          <div className="  px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                      <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="w-full block gap-5  items-center justify-between px-20 ">
                        
                        <Image src={userinfo?.bannerImage} width={800} height={200} alt=""  className="w-[1000px] h-28 object-cover rounded-sm mx-auto m-2 bg-gray-300"/>
                                              <UploadButton
                                              
                                endpoint="imageUploader"
                                className=""
                                onClientUploadComplete={async(res) => {
                        
                                  // Do something with the response
                                  console.log("Files: ", res);
                                await handleBannerImage(userinfo.email,res[0].fileUrl);
                                  setUserinfo({ ...userinfo, bannerImage: res[0].fileUrl });

                                }}
                                onUploadError={(error) => {
                                  // Do something with the error.
                                  alert(`ERROR! ${error.message}`);
                                }}
                              /></div>
                  <div className="w-full block gap-5  items-center justify-between px-20 ">
                        
                        <Image src={userinfo?.profileImage} width={200} height={200} alt=""  className="w-28 h-28 object-cover rounded-full mx-auto m-2 bg-gray-300"/>
                                              <UploadButton
                                              
                                endpoint="imageUploader"
                                className=""
                                onClientUploadComplete={(res) => {
                        
                                  // Do something with the response
                                  console.log("Files: ", res);
                                  handleProfileImage(userinfo.email,res[0].fileUrl);
                                  setUserinfo({ ...userinfo, profileImage: res[0].fileUrl });
                                  // alert("Upload Completed");
                                }}
                                onUploadError={(error) => {
                                  // Do something with the error.
                                  alert(`ERROR! ${error.message}`);
                                }}
                              /></div>
                      <form action="#" method="POST" onSubmit={handlePersonalInfo}>
                    

                          <div className="grid grid-cols-6 gap-6">
                    
                      
      <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
User Name                                  </label>
                                  <input
                                      type="text"
                                      name="username"
                                      id="username"
                                      disabled
                                     
                                      value={userinfo.username}
                                      autoComplete="name"
                                      className="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md  bg-gray-200 cursor-not-allowed"
                                  />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                      Full Name
                                  </label>
                                  <input
                                      type="text"
                                      name="name"
                                      id="name"
                                      onChange={(e)=>{
                                        setUserinfo({
                                          ...userinfo,name:e.target.value
                                        })
                                      }}
                                      value={userinfo.name}
                                      autoComplete="name"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                              </div>
                             

                              <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                      Email address
                                  </label>
                                  <input
                                      type="email"
                                      name="email"
                                      id="email"
                                      disabled
                                      onChange={(e)=>{
                                        setUserinfo({
                                          ...userinfo,email:e.target.email
                                        })
                                      }}
                                      value={userinfo.email}
                                      autoComplete="email"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                                  />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
Phone No.                                  </label>
                                  <input
                                      type="text"
                                      name="phone"
                                      id="phone"
                                      onChange={(e)=>{
                                        setUserinfo({
                                          ...userinfo,phone:e.target.value
                                        })
                                      }}
                                      value={userinfo.phone}
                                      autoComplete="email"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                              </div>
                             
                              {/* <div className="col-span-6 sm:col-span-3 ">
                                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                      Category 
                                  </label>
                                  <div className="mt-1">

                                      <select name="state" id="state" 
required autoComplete="category" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"><option value="fashion">Fashion</option><option value="fitness">Fitness</option><option value="comedy">comedy</option></select>
                                  </div>
                              </div> */}


                         
                              <div className="col-span-6 sm:col-span-3 ">
                                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                      City
                                  </label>
                                  <input
                                      type="text"
                                      name="city"
                                      id="city"
                                      onChange={(e)=>{
                                        setUserinfo({
                                          ...userinfo,city:e.target.value
                                        })
                                      }}
                                      autoComplete="address-level2"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                              </div>

                              <div className="col-span-6 sm:col-span-3 ">
                                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                      State 
                                  </label>
                                  <div className="mt-1">

                                      <select name="state" id="state" 
                                        onChange={(e)=>{
                                          setUserinfo({
                                            ...userinfo,state:e.target.value
                                          })
                                        }}
required autoComplete="shipping address-level1" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"><option value="null">Select state</option><option value="AN">Andaman and Nicobar Islands</option><option value="AP">Andhra Pradesh</option><option value="AR">Arunachal Pradesh</option><option value="AS">Assam</option><option value="BR">Bihar</option><option value="CH">Chandigarh</option><option value="CG">Chhattisgarh</option><option value="DN">Dadra and Nagar Haveli</option><option value="DD">Daman and Diu</option><option value="DL">Delhi</option><option value="GA">Goa</option><option value="GJ">Gujarat</option><option value="HR">Haryana</option><option value="HP">Himachal Pradesh</option><option value="JK">Jammu and Kashmir</option><option value="JH">Jharkhand</option><option value="KA">Karnataka</option><option value="KL">Kerala</option><option value="LA">Ladakh</option><option value="LD">Lakshadweep</option><option value="MP">Madhya Pradesh</option><option value="MH">Maharashtra</option><option value="MN">Manipur</option><option value="ML">Meghalaya</option><option value="MZ">Mizoram</option><option value="NL">Nagaland</option><option value="OR">Odisha</option><option value="PY">Puducherry</option><option value="PB">Punjab</option><option value="RJ">Rajasthan</option><option value="SK">Sikkim</option><option value="TN">Tamil Nadu</option><option value="TS">Telangana</option><option value="TR">Tripura</option><option value="UP">Uttar Pradesh</option><option value="UK">Uttarakhand</option><option value="WB">West Bengal</option></select>
                                  </div>
                              </div>

                            
                          </div>
                          <div className="flex justify-start my-4">

                              <button
                                  type="submit"
                                  className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                  Save
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
         
          <div className="  px-4 py-5 sm:rounded-lg sm:p-6 border-t">
          <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Content Info</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Info about your content 
                      </p>
                  </div>
                {userinfo?.platforms?  <div className="mt-5 md:mt-0 md:col-span-2">
                
                      <form action="#" method="POST" onSubmit={handleContentInfo}>
                    

                          <div className="grid grid-cols-6 gap-6">
                    
                      
     <div className="col-span-6 sm:col-span-3 ">
                                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                      Category 
                                  </label>
                                  <div className="mt-1">

                                      <select name="category" id="category" 
                                        onChange={(e)=>{
                                          setUserinfo({
                                            ...userinfo,category:e.target.value
                                          })
                                        }}
required autoComplete="category" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"><option value="fashion">Fashion</option><option value="fitness">Fitness</option><option value="comedy">comedy</option></select>
                                  </div>
                              </div>
                             
                      
     {/* <div className="col-span-6 sm:col-span-3 ">
                                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                      Platforms 
                                  </label>
                                  <div className="mt-1 flex gap-3">
<div className="flex gap-2">
                                     <input type="checkbox" /> <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                      Instagram
                                  </label></div>
                                  <div className="flex gap-2">
                                     <input type="checkbox" /> <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                      Youtube
                                  </label>
                                  </div>
                                  <div className="flex gap-2">
                                     <input type="checkbox" /> <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                      Facebook
                                  </label>
                                  </div>
                                  </div>
                              </div> */}
                              <div className="col-span-6 sm:col-span-6 ">
                                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                      Description  
                                  </label>
                                  <div className="mt-1">

                                      <textarea name="about" id="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                                  </div>
                              </div>
                            
                              <div className="col-span-6 sm:col-span-6 ">
                                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                      Platforms 
                                  </label>
                             
                                      <div className="mt-1 flex gap-2" >
                                      <input
                                          type="text"
                                          name="title"
                                          id="title"
                                          value={userinfo?.platforms[0]?.profile}
                                          onChange={(e)=>{
                                            setUserinfo({
                                              ...userinfo,platforms:[{
                                                ...userinfo.platforms[0],
                                                profile:e.target.value
                                              }]
                                            })

                                          }
                                          }
                                          autoComplete="instagramTitle"
                                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      <input
                                          type="text"
                                          name="platform"
                                          id="platform"
                                          disabled
                                          autoComplete="platform"
                                          value={userinfo.platforms[0]?.platform}
                                          className="mt-1 focus:ring-indigo-500  focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
    
                                          <select name="followers" id="followers" 
value={userinfo.platforms[0]?.followers}
                                          onChange={(e)=>{
                                            setUserinfo({
                                              ...userinfo,platforms:[{
                                                ...userinfo.platforms[0],
                                                followers:e.target.value
                                              }]
                                            })
                                          }

                                          }
    required autoComplete="followers" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"><option value="select">select your followers</option><option value="0-1k">0-1k</option><option value="1-5k">1-5k</option><option value="5-10k">5-10k</option></select>
                                      </div>
                              
                             
                                      <div className="mt-1 flex gap-2" >
                                      <input
                                          type="text"
                                          name="title"
                                          id="title"
                                          value={userinfo.platforms[1]?.profile}
                                          onChange={(e)=>{
                                            setUserinfo({
                                              ...userinfo,platforms:[{
                                                ...userinfo.platforms[1],
                                                profile:e.target.value
                                              }]
                                            })

                                          }
                                          }
                                          autoComplete="instagramTitle"
                                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      <input
                                          type="text"
                                          name="platform"
                                          id="platform"
                                          disabled
                                          autoComplete="platform"
                                          value={userinfo.platforms[1]?.platform}
                                          className="mt-1 focus:ring-indigo-500  focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
    
                                          <select name="followers" id="followers" 
value={userinfo.platforms[1]?.followers}
                                          onChange={(e)=>{
                                            setUserinfo({
                                              ...userinfo,platforms:[{
                                                ...userinfo.platforms[1],
                                                followers:e.target.value
                                              }]
                                            })
                                          }

                                          }
    required autoComplete="followers" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"><option value="select">select your followers</option><option value="0-1k">0-1k</option><option value="1-5k">1-5k</option><option value="5-10k">5-10k</option></select>
                                      </div>
                             
                                      <div className="mt-1 flex gap-2" >
                                      <input
                                          type="text"
                                          name="title"
                                          id="title"
                                          value={userinfo.platforms[2]?.profile}
                                          onChange={(e)=>{
                                            setUserinfo({
                                              ...userinfo,platforms:[{
                                                ...userinfo.platforms[2],
                                                profile:e.target.value
                                              }]
                                            })

                                          }
                                          }
                                          autoComplete="instagramTitle"
                                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      <input
                                          type="text"
                                          name="platform"
                                          id="platform"
                                          disabled
                                          autoComplete="platform"
                                          value={userinfo.platforms[2]?.platform}
                                          className="mt-1 focus:ring-indigo-500  focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
    
                                          <select name="followers" id="followers" 
value={userinfo.platforms[2]?.followers}
                                          onChange={(e)=>{
                                            setUserinfo({
                                              ...userinfo,platforms:[{
                                                ...userinfo.platforms[2],
                                                followers:e.target.value
                                              }]
                                            })
                                          }

                                          }
    required autoComplete="followers" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"><option value="select">select your followers</option><option value="0-1k">0-1k</option><option value="1-5k">1-5k</option><option value="5-10k">5-10k</option></select>
                                      </div>
                             
                                   {/* {
userinfo?.platforms?.map((item,index)=>{ 
                                    return(
                                      <div className="mt-1 flex gap-2" key={index} >
                                      <input
                                          type="text"
                                          name="title"
                                          id="title"
                                          value={item?.profile}
                                          onChange={(e)=>{
                                            setUserinfo({
                                              ...userinfo,platforms:[{
                                                ...userinfo.platforms[index],
                                                profile:e.target.value
                                              }]
                                            })

                                          }
                                          }
                                          autoComplete="instagramTitle"
                                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      <input
                                          type="text"
                                          name="platform"
                                          id="platform"
                                          disabled
                                          autoComplete="platform"
                                          value={item?.platform}

                                          className="mt-1 focus:ring-indigo-500  focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
    
                                          <select name="followers" id="followers" 
value={item?.followers}
                                          onChange={(e)=>{
                                            setUserinfo({
                                              ...userinfo,platforms:[{
                                                ...userinfo.platforms[index],
                                                followers:e.target.value
                                              }]
                                            })
                                          }

                                          }
    required autoComplete="followers" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"><option value="select">select your followers</option><option value="0-1k">0-1k</option><option value="1-5k">1-5k</option><option value="5-10k">5-10k</option></select>
                                      </div>
                                    )
                                        })
                                   } */}
                              
                            
                               
                              </div>
                            

                          

                         
                            


                            
                          </div>
                          <div className="flex justify-start my-4">

                              <button
                                  type="submit"
                                  className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                  Save
                              </button>
                          </div>
                      </form>
                  </div>:""}
              </div>
            </div>
      
          <div className="  px-4 py-5 sm:rounded-lg sm:p-6 border-t">
          <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Packages You provide</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        add your packages here for brands to see
                      </p>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                
                      <form action="#" method="POST" onSubmit={handlePackagesInfo}>
                    

                          <div className="grid grid-cols-6 gap-6">
                    
                      

                              <div className="col-span-6 sm:col-span-6 ">
                                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                    Packages
                                  </label>
                                {
userinfo?.packages?.map((item,index)=>{ 
                                    return(
                                  <div className="mt-1 grid grid-cols-6 gap-2" key={index}> 
                                  <input
                                      type="text"
                                      name="title"
                                      id="title"
                                      value={item.title}
                                      onChange={(e)=>{

                                          setUserinfo({
                                            ...userinfo,packages:[{
                                              ...userinfo.packages[index],
                                              title:e.target.value
                                            }]
                                          })
                                        }
                                      
                                      }
                                      placeholder="title of package"
                                      autoComplete="title"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block  col-span-2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                                       <select name="platform" id="platform" 
                                                         onChange={(e)=>{

                                                          setUserinfo({
                                                            ...userinfo,packages:[{
                                                              ...userinfo.packages[index],
                                                              platform:e.target.value
                                                            }]
                                                          })
                                                        }
                                                      
                                                      }
                                                      value={item.platform}
required autoComplete="platform"                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block  col-span-2 shadow-sm sm:text-sm border-gray-300 rounded-md"><option value="instagram">Instagram</option><option value="facebook">Facebook</option><option value="youtube">Youtube</option></select>
                                    
                                        <input type="text" name="price" id="price"
                                        value={item.price}
                                        placeholder="price"
                                        onChange={(e)=>{

                                          setUserinfo({
                                            ...userinfo,packages:[{
                                              ...userinfo.packages[index],
                                              price:e.target.value
                                            }]
                                          })
                                        }
                                      
                                      }
                                        autoComplete="price" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block col-span-2  shadow-sm sm:text-sm border-gray-300 rounded-md" />
<textarea placeholder="describe your package" name="description" id="description" 
  onChange={(e)=>{

    setUserinfo({
      ...userinfo,packages:[{
        ...userinfo.packages[index],
        description:e.target.value
      }]
    })
  }

}
value={item.description} rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block col-span-6 sm:text-sm border-gray-300 rounded-md"></textarea>
                                    </div>
                                    )
                                  } 
                                  )
                                  
                                }
                                  <p className="flex justify-end cursor-pointer px-2 py-1 bg-gray-200 w-max m-1 rounded-md ml-auto" onClick={()=>  
                                    setUserinfo({
                                      ...userinfo,packages:[...userinfo.packages,{
                                        title:"",
                                        platform:"",
                                        price:"",
                                        description:""
                                      }]
                                    })
                                  }
                                    >+</p>
                                

                              </div>
                          

                         
                            


                            
                          </div>
                          <div className="flex justify-start my-4">

                              <button
                                  type="submit"
                                  className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                  Save
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
            </div>
      
      </div>
      

      </div>
  )
}
