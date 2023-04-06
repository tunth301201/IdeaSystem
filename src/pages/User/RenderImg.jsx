import React from "react";

export default function RenderImg({img}) {
    return (
        <div className="mr-12 flex items-center space-x-6 whitespace-nowrap lg:mr-0">
            <img
              className="h-10 w-10 rounded-full"
              src={img}
              alt="Robert Brown avatar"
            />
        </div>
    )
}