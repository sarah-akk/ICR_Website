import React from "react";
import objects from "../../assets/Objects.png";

const ICRFoundation = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex flex-col p-10">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-10">
            <p className="text-3xl font-bold text-blue-900">ICR Foundation</p>
            <p className="text-2xl w-auto">
              The first Arab foundation to create advanced flat designs to raise
              the Arab web to the top “Marhaba, we are the ones who develop.
            </p>
            <div className="flex flex-row mt-10 space-x-4">
              <div className="flex flex-col border border-gray-200 p-5">
                <p className="text-3xl font-bold text-blue-900">5380+</p>
                <p className="text-lg w-2/3"> Design Request </p>
              </div>
              <div className="flex flex-col border border-gray-200 p-5">
                <p className="text-3xl font-bold text-blue-900">5380+</p>
                <p className="text-lg w-2/3"> Design Request </p>
              </div>
              <div className="flex flex-col border border-gray-200 p-5">
                <p className="text-3xl font-bold text-blue-900">5380+</p>
                <p className="text-lg w-2/3"> Design Request </p>
              </div>
              <div className="flex flex-col border border-gray-200 p-5">
                <p className="text-3xl font-bold text-blue-900">5380+</p>
                <p className="text-lg w-2/3"> Design Request </p>
              </div>
            </div>
          </div>
          <img src={objects} className="w-1/2 h-auto" alt="ICR Foundation" />
        </div>
        <div className="w-full h-px bg-gray-300 "></div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-6 p-4">
        <p className="text-xl font-bold text-blue-900">ICR Foundation</p>
        <p className="text-sm">
          The first Arab foundation to create advanced flat designs to raise the
          Arab web to the top “Marhaba, we are the ones who develop.
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col border border-gray-200 p-4">
              <p className="text-lg font-bold text-blue-900">5380+</p>
              <p className="text-xs"> Design Request </p>
            </div>
            <div className="flex flex-col border border-gray-200 p-4">
              <p className="text-lg font-bold text-blue-900">5380+</p>
              <p className="text-xs"> Design Request </p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col border border-gray-200 p-4">
              <p className="text-lg font-bold text-blue-900">5380+</p>
              <p className="text-xs"> Design Request </p>
            </div>
            <div className="flex flex-col border border-gray-200 p-4">
              <p className="text-lg font-bold text-blue-900">5380+</p>
              <p className="text-xs"> Design Request </p>
            </div>
          </div>
        </div>
        <img
          src={objects}
          className="w-full h-auto mt-6"
          alt="ICR Foundation"
        />
      </div>
    </>
  );
};

export default ICRFoundation;
