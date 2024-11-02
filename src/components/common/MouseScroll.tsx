"use client";

export function MouseScroll(): JSX.Element {
    return (
        <div className="flex justify-center w-full absolute bottom-8">
            <div className="mouse_scroll">
                <div className="w-8 h-14 border-2 border-gray-400 rounded-full relative flex justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full absolute top-2 animate-bounce" />
                </div>
            </div>
        </div>
    );
}
