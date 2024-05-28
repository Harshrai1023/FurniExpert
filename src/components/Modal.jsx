import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Modal({ open, onClose, children }) {
    return (
      // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20 backdrop-blur" : "invisible"}
      `}
    >
      {/* modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            bg-white rounded-xl shadow p-6 transition-all w-[90%] h-[60%] md:h-[80%] 
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          {children}
        </div>
      </div>
    )
  }