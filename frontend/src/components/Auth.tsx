/* eslint-disable @typescript-eslint/no-unused-vars */
import { SignupInput } from "@nxvtej/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import  axios  from "axios";
import { BACKEND_URL } from "../config";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
	const navigate = useNavigate();
	// getting little tricky now to generalize this as type here are of signup needs to be
	// of signin inputs 

	const [postInputs, setPostInputs] = useState<SignupInput>({
		name: "",
		email: "",
		password: "",
	});

	async function sendRequest() {
		try {

			const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
			const jwt = response.data;
			localStorage.setItem("token", jwt);
			navigate("/blogs");
		} catch(e){
			{type === "signin" ? alert("Error while sign-in") : alert("Error while sign-up")}
		}
	}

	return (
		<div className='h-screen flex flex-col justify-center'>
			<div className='flex justify-center'>
				<div>
					<div className='px-10'>
						<div className='text-3xl font-extrabold'>Create an Account</div>
						<div className='text-slate-400'>
							{type === "signup" ? `Already have an account? `: "Don't have an account? "}
							{type === "signup" ? <Link to={"/signin"} className='pl-2 underline'>
								Login
							</Link> : <Link to={"/signup"} className='pl-2 underline'>
								Sign Up
							</Link>}
						</div>
					</div>

					<div className='pt-10'>
						{type === "signup" ? <LabelledInput
							label='Name'
							placeholder='Navdeep Singh....'
							onChange={(e) => {
								setPostInputs({
									...postInputs,
									name: e.target.value,
								});
							}}
						/> : null}

						<LabelledInput
							label='Email'
							placeholder='navdeep@gmail.com'
							onChange={(e) => {
								setPostInputs({
									...postInputs,
									email: e.target.value,
								});
							}}
						/>

						<LabelledInput
							label='Password'
							type={"password"}
							placeholder='123456'
							onChange={(e) => {
								setPostInputs({
									...postInputs,
									password: e.target.value,
								});
							}}
						/>

						<button
						onClick={sendRequest}
							type='button'
							className=' mt-4 w-full text-white bg-gray-800
										hover:bg-gray-900 focus:outline-none focus:ring-4
										focus:ring-gray-300 font-medium rounded-lg 
										text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800
										dark:hover:bg-gray-700 dark:focus:ring-gray-700
										dark:border-gray-700'
						>
							{type === "signin" ? "Sign In" : "Sign Up"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

interface LabelInputType {
	label: string;
	placeholder: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	type?: string;
}

const LabelledInput = ({
	label,
	placeholder,
	onChange,
	type,
}: LabelInputType) => {
	return (
		<div>
			<label className='block mb-2 text-sm font-semibold text-black pt-2'>
				{label}
			</label>
			<input
				onChange={onChange}
				type={type || "text"}
				id='first_name'
				className='bg-gray-50 border border-gray-300 text-gray-900 
			text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
			block w-full p-2.5 
		  '
				placeholder={placeholder}
				required
			/>
		</div>
	);
};
