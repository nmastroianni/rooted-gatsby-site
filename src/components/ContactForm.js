import React, { useState } from "react"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha"
import { navigate } from "gatsby"
export default function ContactForm() {
  const [disabled, setDisabled] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const GATEWAY_URL =
    "https://p9pzo50px5.execute-api.us-east-1.amazonaws.com/prod"
  const reRef = React.useRef()
  const onSubmit = async data => {
    setDisabled(true)
    const token = await reRef.current.executeAsync()
    data.token = token
    try {
      await fetch(GATEWAY_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      reset()
      setDisabled(false)
      navigate("/thanks/")
    } catch (error) {
      // handle server errors
      console.log(errors)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <label htmlFor="name">
        <h3 className="font-semibold">Name</h3>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          {...register("name", { required: true })}
          className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        />
      </label>
      <label htmlFor="email">
        <h3 className="font-semibold">Email</h3>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          {...register("email", { required: true })}
          className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        />
      </label>
      <label htmlFor="phone">
        <h3 className="font-semibold">Phone</h3>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="(555) 555-5555"
          {...register("phone", { required: true })}
          className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        />
      </label>
      <label htmlFor="message">
        <h3 className="font-semibold">Question</h3>
        <textarea
          {...register("message", { required: true })}
          className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
          name="message"
          id="message"
          rows="3"
          placeholder="How can we help, and when can we reach out you?"
        />
      </label>
      <div className="text-center mt-3">
        <ReCAPTCHA
          sitekey="6LeBn54aAAAAAKRelu8Dgcn3_-EgweDm0UMvpPxb"
          size="invisible"
          ref={reRef}
        />
        <button
          type="submit"
          className="bg-indigo-800 text-white px-3 py-2 rounded-md w-1/4 disabled:bg-gray-800"
          disabled={disabled}
        >
          Send
        </button>
      </div>
    </form>
  )
}
