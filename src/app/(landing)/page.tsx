import Hero from "@/components/Landing/FindJob/Hero";
// import { LightRays } from "@/components/shadcnui/light-rays";

const page = () => {
  return (
    <section className="grid h-dvh place-items-center bg-linear-to-r from-blue-200 to-purple-200">
      
      {/* <LightRays color="rgba(160, 210, 255, 0.6)" length="90vh"/> */}
    
      <Hero/>
    </section>
  );
};

export default page;
