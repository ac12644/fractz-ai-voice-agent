"use client";

import { useLayoutEffect, useState } from "react";
import Logo from "./logos/Logo";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from "@/package.json";

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    if (el.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div>
        <Logo className={"h-5 w-auto"} />
      </div>
      <div className={"ml-auto flex items-center gap-1"}>
        <Button
          onClick={() => {
            const notes = encodeURIComponent(
              "I would like to know more about voice agent, how it can help us"
            );
            const url = `https://cal.com/fractz/book-free-consultation?notes=${notes}`;
            window.open(url, "_blank", "noopener noreferrer");
          }}
          variant={"outline"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>Get for Company</span>
        </Button>
        {/* 
        <Button
          onClick={toggleDark}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            {isDarkMode ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
        */}
      </div>
    </div>
  );
};
