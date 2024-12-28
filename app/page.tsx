"use client";

import { useState, useEffect } from "react";
import { ref, onValue, set } from "firebase/database";
import { database } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { ModeToggle } from "@/components/ThemeButton";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const countRef = ref(database, "counter");

    // Listen for changes in real-time
    const unsubscribe = onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setIsOn(data);
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const incrementCounter = async () => {
    setIsOn(!isOn);
    try {
      await set(ref(database, "test"), isOn ? 1 : 0);
    } catch (error) {
      console.error("Error updating counter:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card className="p-8 bg-white dark:bg-gray-800 shadow-xl rounded-xl">
          <div className="text-center">
            <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Real-time Counter
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Watch the counter update in real-time across all connected clients
            </p>

            <div className="text-6xl font-bold text-primary mb-8">
              {isOn ? "ON" : "OFF"}
            </div>
            <div className="flex items-center justify-center gap-2">
              <Switch id="airplane-mode" onClick={incrementCounter} />
              <ModeToggle />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
