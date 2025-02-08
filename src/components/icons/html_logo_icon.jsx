import React from 'react';

const HtmlLogoIcon = (props) => {
    return (
        <svg
            {...props}
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect
                width="74"
                height="74"
                fill="url(#pattern0_16_26)"
            />
            <defs>
                <pattern
                    id="pattern0_16_26"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        href="#image0_16_26"
                        transform="scale(0.00195312)"
                    />
                </pattern>
                <image
                    id="image0_16_26"
                    width="512"
                    height="512"
                    href="data:image/png;base64,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"
                />
            </defs>
        </svg>

    );
};

export default HtmlLogoIcon;