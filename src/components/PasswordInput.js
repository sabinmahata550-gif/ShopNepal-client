import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="
                  w-full
                  p-3
                  bg-white
                  border border-gray-300
                  text-gray-900
                  text-sm
                  rounded-lg
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-blue-500
                "
                {...props}
            />
            <button className="absolute right-3 top-3 text-gray-500" type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </button>
        </div>
    )
}

export default PasswordInput
