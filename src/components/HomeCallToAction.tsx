import React from "react";

function HomeCallToAction() {
  return (
    <>
      <div
        className="flex flex-col md:justify-center justify-end items-center md:items-start gap-0 md:gap-2 w-full text-slate-700 md:py-4 h-64
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-xl md:text-2xl bg-slate-100 px-2 md:px-6 pt-2 pb-0 md:py-4 bg-opacity-85 w-full md:w-fit text-center md:text-start">
          When shopping matters
        </h1>
        <h2 className="text-lg md:text-xl bg-slate-100 px-2 md:px-6 py-0 md:py-4 bg-opacity-85 w-full md:w-fit text-center md:text-start">
          All you need
        </h2>
        <h2 className="text-lg md:text-xl bg-slate-100 px-2 md:px-6 pb-2 pt-0 md:py-4 bg-opacity-85 w-full md:w-fit text-center md:text-start">
          When you need
        </h2>
      </div>
    </>
  );
}

export default HomeCallToAction;
