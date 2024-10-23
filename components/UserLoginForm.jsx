"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function UserLoginForm({ action }) {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.target);
    const result = await action(formData);

    if (result?.error) {
      toast.error(result.error);
    }

    setIsPending(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="grid grid-cols-1 gap-5 w-80 my-10 mx-auto"
    >
      <input
        id="email"
        name="email"
        required
        type="email"
        className="border-2 border-gray-300 p-2 rounded-lg"
        placeholder="Email address"
      />
      <input
        required
        id="password"
        name="password"
        type="password"
        className="border-2 border-gray-300 p-2 rounded-lg"
        placeholder="Password"
      />
      <button
        type="submit"
        className="bg-black text-white p-2 rounded-lg hover:text-gray-300 hover:bg-gray-800"
        disabled={isPending}
      >
        {isPending ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
}
