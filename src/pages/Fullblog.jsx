import React from "react";
import blogConstants from "./blogConstants";
import { useLocation } from "react-router-dom";


function Fullblog() {
  const location = useLocation();
  const blog = location.state.blog;

  console.log(blog);
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f4f0] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111811]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#111811] text-2xl font-bold leading-tight tracking-[-0.015em]">Sports World</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">NBA</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">NFL</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">MLB</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">Soccer</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">NHL</a>
            </div>
            <div className="flex gap-2">
              
             
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: `url(${blog.img})` }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="container flex justify-start">
  <div className="[480px]:p-4">
            
                  <div className="flex flex-col gap-6">
                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
                    <div className="flex flex-col gap-7">
                    <h1
  className="text-4xl font-black leading-tight tracking-[-0.033em] text-center "
>
  {blog.title}
</h1>
                       
                      <div className="flex-wrap gap-5 flex justify-center">
                        <button
                          className="flex min-w-[100px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-100 px-4 @[480px]:h-100 @[480px]:px-5 bg-[#14b814] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                          <span className="truncate">Read time: 6 minutes</span>
                        </button>
                        <button
                          className="flex min-w-[100px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-100 px-4 @[480px]:h-100 @[480px]:px-5 bg-[#f0f4f0] text-[#111811] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                          <span className="truncate">Save</span>
                        </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#111811] text-base font-normal leading-normal pb-4 pt-6 px-6 text-center">
              {blog.description}
            </p>
            <p className="text-[#111811] text-base font-normal leading-normal pb-4 pt-6 px-6 text-center">
              {blog.content}
            </p>
           
            <div className="flex py-0.5 justify-start">
            
            </div>
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                <div className="flex gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{ backgroundImage: `url(${blog.img})` }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#111811] text-[22px] font-bold leading-tight tracking-[-0.015em]">{blog.author}</p>
                    <p className="text-[#638863] text-base font-normal leading-normal">{blog.date}</p>
                    <p className="text-[#638863] text-base font-normal leading-normal">Published on July 12, 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Share this article</h3>
            <div className="p-4 @container">
              <div className="flex flex- 1 flex-col items-start justify-between gap-4 rounded-xl border border-[#dce5dc] bg-white p-5 @[480px]:flex-row @[480px]:items-center">
                <div className="flex flex-col gap-1">
                  <p className="text-[#111811] text-base font-bold leading-tight">Share</p>
                  <p className="text-[#638863] text-base font-normal leading-normal">Let your friends know about this article</p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#14b814] text-white text-sm font-medium leading-normal"
                >
                  <span className="truncate">Copy link</span>
                </button>
              </div>
            </div>
            <h3 className="text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Comments</h3>
            <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                style ={{ backgroundImage: `url(${blog.img})` }}
              ></div>
              <div className="flex h-full flex-1 flex-col items-start justify-start">
                <div className="flex w-full flex-row items-start justify-start gap-x-3">
                  <p className="text-[#111811] text-sm font-bold leading-normal tracking-[0.015em]">Benjamin</p>
                  <p className="text-[#638863] text-sm font-normal leading-normal">2 days ago</p>
                </div>
                <p className="text-[#111811] text-sm font-normal leading-normal">
                  Great article! I've always been a fan of cricket, and it was interesting to learn about some of the most memorable moments in its history.
                </p>
              </div>
            </div>
            <div className="flex items-center px-4 py-3 gap-3 @container">
              <label className="flex flex-col min-w-40 h-12 flex-1">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <input
                    placeholder="What are your thoughts?"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111811] focus:outline-0 focus:ring-0 border-none bg-[#f0f4f0] focus:border-none h-full placeholder:text-[#638863] px-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                    value=""
                  />
                  <div className="flex border-none bg-[#f0f4f0] items-center justify-center pr-4 rounded-r-xl border-l-0 !pr-2">
                    <div className="flex items-center gap-4 justify-end">
                      <div className="flex items-center gap-1">
                        <button className="flex items-center justify-center p-1.5">
                          <div className="text-[#638863]" data-icon="Smiley" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                              <path
                                d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                      <button
                        className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#14b814] text-white text-sm font-medium leading-normal hidden @[480px]:block"
                      >
                        <span className="truncate">Post</span>
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fullblog;