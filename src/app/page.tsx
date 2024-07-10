import Translator from "../components/Translator";

export default function Home() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200">
              Multi<span className="text-[#f87315]">Word</span>
            </h1>
            <p className="mt-3 text-neutral-400">
              Bridging Voices, Connecting Worlds 
            </p>

            <Translator />
          </div>
        </div>
      </div>
    </div>
  );
}
