import Header from "@/components/common/Header";
import Hero from "@/components/homepage/Hero";
import MouseCircle from "@/components/homepage/MouseCircle";
import ObjectAddInArray from "@/components/homepage/ObjectAddInArray";
import SignIn from "@/components/homepage/SignIn";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ObjectAddInArray />
      <SignIn />
      <MouseCircle />
    </>
  );
}
