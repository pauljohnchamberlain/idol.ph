"use client";

import { useState } from "react";
import BackButton from "@/app/components/BackButton";

export default function Component() {
  const [emailNewMessage, setEmailNewMessage] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailCampaignMatch, setEmailCampaignMatch] = useState(false);
  const [pushCampaignMatch, setPushCampaignMatch] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
        <h1 className="text-4xl font-serif mb-8">Settings</h1>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <BackButton />
            <div>
              <h2 className="text-xl font-semibold">Notifications</h2>
              <p className="text-gray-500">
                View and edit your notification settings
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-sm">
              Make sure you have push notifications enabled on your mobile
              device so you don't miss any important or time-sensitive messages!
            </p>
          </div>

          <h3 className="text-lg font-semibold mb-4">On-platform messaging</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
              <span>Email me when I have a new message</span>
              <button
                className={`w-12 h-6 rounded-full ${emailNewMessage ? "bg-yellow-400" : "bg-gray-300"} relative`}
                onClick={() => setEmailNewMessage(!emailNewMessage)}
              >
                <span
                  className={`block w-5 h-5 rounded-full bg-white shadow transform transition-transform ${emailNewMessage ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
              <span>Send me push notifications</span>
              <button
                className={`w-12 h-6 rounded-full ${pushNotifications ? "bg-yellow-400" : "bg-gray-300"} relative`}
                onClick={() => setPushNotifications(!pushNotifications)}
              >
                <span
                  className={`block w-5 h-5 rounded-full bg-white shadow transform transition-transform ${pushNotifications ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            Campaign matching notifications
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            You need at least 2K followers to apply to a campaign
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
              <span>Email me when I match to a Campaign</span>
              <button
                className={`w-12 h-6 rounded-full ${emailCampaignMatch ? "bg-yellow-400" : "bg-gray-300"} relative`}
                onClick={() => setEmailCampaignMatch(!emailCampaignMatch)}
              >
                <span
                  className={`block w-5 h-5 rounded-full bg-white shadow transform transition-transform ${emailCampaignMatch ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
              <span>Send me push notifications</span>
              <button
                className={`w-12 h-6 rounded-full ${pushCampaignMatch ? "bg-yellow-400" : "bg-gray-300"} relative`}
                onClick={() => setPushCampaignMatch(!pushCampaignMatch)}
              >
                <span
                  className={`block w-5 h-5 rounded-full bg-white shadow transform transition-transform ${pushCampaignMatch ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="px-6 py-2 border-2 border-black rounded-full hover:bg-gray-100">
            BACK
          </button>
          <button className="px-6 py-2 bg-yellow-400 rounded-full hover:bg-yellow-500">
            SAVE DETAILS
          </button>
        </div>
      </main>
    </div>
  );
}
