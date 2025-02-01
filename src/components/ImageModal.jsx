import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageModal = ({ image, alt, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.8)] flex justify-center items-center z-50 px-4"
            onClick={onClose} // Close modal when clicking outside
        >
            {/* Zoom and Pan Wrapper */}
            <div
                className="bg-white p-2 rounded-lg shadow-lg max-w-5xl max-h-[90vh] flex justify-center items-center"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <TransformWrapper
                    defaultScale={1}
                    minScale={1}
                    maxScale={4} // Allow zoom up to 4x
                    centerOnInit={true}
                >
                    <TransformComponent>
                        <img
                            src={image}
                            alt={alt}
                            className="w-full max-h-[80vh] object-contain rounded-md"
                        />
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
    );
};

export default ImageModal;
