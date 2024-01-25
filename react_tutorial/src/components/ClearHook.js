import { useState, useEffect } from "react"

export default function ClearHook() {
  useEffect(() => {
    const resize = () => {
      console.log(`resize is started`);
    }
    window.addEventListener("resize", resize)
    return () => (
      window.removeEventListener("resize", resize)
    )
  }, [])
  return (
    <div>ClearHook</div>
  )
}
