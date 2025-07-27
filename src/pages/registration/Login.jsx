/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 


const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    const location = useLocation();


    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    
    const userLoginFunction = async () => {
        // validation 
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required")
            return;
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            // console.log(users.user)

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user) )
                    setUserLogin({
                        email: "",
                        password: ""
                    })
                    toast.success("Login Successfully");
                    setLoading(false);
                    if(user.role === "user") {
                        navigate('/user-dashboard');
                    }else{
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }
    return (

        
        <div className='  flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300  px-4'>
            {loading && <Loader />}


<div className="absolute top-6 left-6">
  <button
    onClick={() => {
      if (window.history.length > 2) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }}
    className="flex items-center gap-1 text-blue-700 font-semibold hover:underline"
  >
    <ArrowLeft className="w-10 h-10" /> Back
  </button>
</div>


            {/* Login Form  */}
            <div className=" login_Form w-full md:w-96 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 px-8 py-6 border border-blue-300 rounded-xl shadow-md backdrop-blur-sm">

                {/* Top Heading  */}
                <div className="mb-7">
                    <h2 className='text-center text-2xl font-bold text-blue-500 '>
                        Login
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-2">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }}
                        className='w-full bg-white/90 text-blue-800 placeholder-blue-400 border border-blue-300 focus:ring-2 focus:ring-blue-400 px-4 py-2 rounded-md outline-none transition duration-200 shadow-sm mb-6'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-2">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }}
                        className='w-full bg-white/90 text-blue-800 placeholder-blue-400 border border-blue-300 focus:ring-2 focus:ring-blue-400 px-4 py-2 rounded-md outline-none transition duration-200 shadow-sm mb-6'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-3">
                    <button
                        type='button'
                        onClick={userLoginFunction}
                        className='bg-blue-500 hover:bg-blue-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Login
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Don't Have an account <Link className=' text-blue-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;