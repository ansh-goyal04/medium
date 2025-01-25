import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import {  useState,useEffect } from "react";

import { X } from "lucide-react";
interface alertType{
  title:string;
  message:string
}
export default function AutoDismissAlert({ title, message }:alertType) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 w-80 z-50">
      <Alert className="relative p-4 border-l-4 border-blue-500 bg-blue-100">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={() => setVisible(false)}
        >
          <X size={18} />
        </button>
        <AlertTitle className="font-semibold text-blue-700">{title}</AlertTitle>
        <AlertDescription className="text-sm text-blue-600">{message}</AlertDescription>
      </Alert>
    </div>
  );
}