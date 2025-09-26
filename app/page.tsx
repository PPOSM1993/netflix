import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "../components/ui/button";
import { Navbar } from "../components/Navbar";
import { SliderVideo } from "./(routes)/(home)/components/SliderVideo";

export default function Home() {
  return (
    <>
      <div className="relative bg-zinc-900">
        <Navbar />
        <SliderVideo />
      </div>
    </>
  );
}
