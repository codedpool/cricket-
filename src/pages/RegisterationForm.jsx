import React from 'react';
import "../index.css"

const RegistrationForm = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f4f0] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#121711]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_6_319)">
                    <path
                      d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_319"><rect width="48" height="48" fill="white"></rect></clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-[#121711] text-lg font-bold leading-tight tracking-[-0.015em]">Crickzone</h2>
            </div>
            <label
              className="flex flex-col min-w-40 !h-10 max-w-70"
            >
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121711] focus:outline-0 focus:ring-0 border-none bg-[#f1f4f0] focus:border-none h-full placeholder:text-[#6a8764] px-4 rounded-l-none border-l-0 text-base font-normal leading-normal"
                  value=""
                />
              </div>
            </label>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f1f4f0] text-[#121711] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div className="text-[#121711]" data-icon="Globe" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1 ,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0 ,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/86c74244-900f-4aff-91c9-e24f32c15a28.png")' }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512 px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#121711] tracking-light text-[32px] font-bold leading-tight min-w-72">Step 3 of 3</p>
            </div>
            <p className="text-[#121711] text-base font-normal leading-normal pb-3 pt-1 px-4">
              We're almost there! Just a few more details to get you started.
            </p>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-90 flex-1">
                <p className=" text-[#121711] text-base font-medium leading-normal pb-2">Select your favorite team</p>
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121711] focus:outline-0 focus:ring-0 border border-[#dde5dc] bg-white focus:border-[#dde5dc] h-14 bg-[image:--select-button-svg] placeholder:text-[#6a8764] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="one">Select team</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <h2 className="text-[#121711] text-lg font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-2 pt-4">
              Select your interests
            </h2>
            <div className="px-4">
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#dde5dc] border-2 bg-transparent text-[#3ed31d] checked:bg-[#3ed31d] checked:border-[#3ed31d] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dde5dc] focus:outline-none"
                />
                <p className="text-[#121711] text-base font-normal leading-normal">News &amp; Articles</p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#dde5dc] border-2 bg-transparent text-[#3ed31 d] checked:bg-[#3ed31d] checked:border-[#3ed31d] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dde5dc] focus:outline-none"
                />
                <p className="text-[#121711] text-base font-normal leading-normal">Live Scores</p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#dde5dc] border-2 bg-transparent text-[#3ed31d] checked:bg-[#3ed31d] checked:border-[#3ed31d] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dde5dc] focus:outline-none"
                />
                <p className="text-[#121711] text-base font-normal leading-normal">Video Highlights</p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#dde5dc] border-2 bg-transparent text-[#3ed31d] checked:bg-[#3ed31d] checked:border-[#3ed31d] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dde5dc] focus:outline-none"
                />
                <p className="text-[#121711] text-base font-normal leading-normal">Fantasy Cricket</p>
              </label>
            </div>
            <div className="flex justify stretch">
  <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
    <button
      className="flex w-[70px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-4 bg-[#f1f4f0] text-[#121711] text-sm font-bold leading-normal tracking-[0.015em]"
    >
      <span className="truncate">Back</span>
    </button>
    <button
      className="flex w-[70px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-4 bg-[#3ed31d] text-[#121711] text-sm font-bold leading-normal tracking-[0.015em]"
    >
      <span className="truncate">Finish</span>
    </button>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;