"use client";

import { useState } from "react";
import { UploadCloud, ChevronDown, Save, RefreshCcw } from "lucide-react";

export default function Page() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-full max-w-6xl">
        {/* ===== HEADER TEXT ===== */}
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-white">
            Register New Item
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            Fill in the details below to add a new asset to the system.
          </p>
        </div>

        {/* ===== CARD / TABLE ===== */}
        <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
          {/* CONTENT */}
          <div className="grid grid-cols-12">
            {/* UPLOAD AREA */}
            <div className="col-span-12 md:col-span-3 p-6 border-r border-slate-700">
              <label className="block w-full aspect-[3/4] border-2 border-dashed border-yellow-500/70 rounded-xl cursor-pointer overflow-hidden relative hover:bg-slate-700 transition">
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition">
                      <div className="w-11 h-11 rounded-full bg-yellow-500 flex items-center justify-center mb-2">
                        <RefreshCcw size={20} className="text-black" />
                      </div>
                      <span className="text-sm text-yellow-400">
                        Change Image
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center px-4">
                    <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                      <UploadCloud size={26} className="text-yellow-400" />
                    </div>
                    <p className="text-white font-semibold">Click to Upload</p>
                    <p className="text-sm text-slate-400 mt-1">
                      Or drag and drop
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      PNG, JPG, SVG up to 5MB
                    </p>
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            {/* FORM AREA */}
            <div className="col-span-12 md:col-span-9 p-6 space-y-5">
              {/* Item Name */}
              <div>
                <label className="text-sm text-slate-300">Item name</label>
                <input
                  type="text"
                  placeholder="Example. Infocus"
                  className="mt-1 w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
                />
              </div>

              {/* Category & Quantity */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Category</label>
                  <div className="relative mt-1">
                    <select className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 appearance-none focus:ring-2 focus:ring-yellow-500 outline-none">
                      <option>Select Category</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-slate-300">
                    Total Quantity
                  </label>
                  <input
                    type="number"
                    placeholder="Example. 12"
                    className="mt-1 w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-sm text-slate-300">Description</label>
                <textarea
                  rows={5}
                  className="mt-1 w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="border-t border-slate-700 px-6 py-4 flex justify-end gap-4">
            <button className="text-slate-400 hover:text-white">Cancel</button>
            <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg shadow">
              <Save size={18} />
              Save Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
