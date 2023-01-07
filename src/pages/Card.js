

export default function Card({ description }) {
    const { project_name, associated_with, project_url, github, languages, frameworks, packages, details } = description;

    return (
        <div className="w3-padding w3-card w3-round-large w3-margin-bottom">

            <div className="w3-center w3-opacity">
                <h1 className="w3-hide-small"><b>{project_name}</b></h1>
                <h3 className="w3-hide-large w3-hide-medium"><b>{project_name}</b></h3>
            </div>

            <div className="w3-center">
                <a href={project_url} title="project url">
                    <svg viewBox="0 0 128 128" width="50" height="50">
                        <circle fill="#fff" cx="64.149" cy="64.236" r="60.999"></circle><path fillOpacity=".1" d="M102.966 75.327c0-21.439-17.379-38.819-38.817-38.819s-38.818 17.38-38.818 38.819h11.09c0-15.314 12.415-27.727 27.727-27.727 15.313 0 27.727 12.413 27.727 27.727"></path><circle fillOpacity=".1" cx="66.922" cy="71.999" r="21.072"></circle><linearGradient id="chrome-original-a" gradientUnits="userSpaceOnUse" x1="395.191" y1="484.168" x2="395.191" y2="484.723" gradientTransform="matrix(82 0 0 82 -32341.5 -39660.313)"><stop offset="0" stopColor="#81B4E0"></stop><stop offset="1" stopColor="#0C5A94"></stop></linearGradient><circle fill="url(#chrome-original-a)" cx="64.149" cy="64.235" r="22.736"></circle><linearGradient id="chrome-original-b" gradientUnits="userSpaceOnUse" x1="-608.91" y1="-597.648" x2="-608.91" y2="-547.185" gradientTransform="translate(675 599.775)"><stop offset="0" stopColor="#F06B59"></stop><stop offset="1" stopColor="#DF2227"></stop></linearGradient><path fill="url(#chrome-original-b)" d="M119.602 36.508C104.336 5.792 67.06-6.732 36.343 8.534A62.105 62.105 0 0012.578 29.3l24.955 43.253c-4.597-14.606 3.521-30.174 18.127-34.77a27.676 27.676 0 017.935-1.274"></path><linearGradient id="chrome-original-c" gradientUnits="userSpaceOnUse" x1="-657.835" y1="-491.393" x2="-632.327" y2="-533.537" gradientTransform="translate(675 599.775)"><stop offset="0" stopColor="#388B41"></stop><stop offset="1" stopColor="#4CB749"></stop></linearGradient><path fill="url(#chrome-original-c)" d="M12.578 29.3c-19.1 28.492-11.486 67.071 17.005 86.171a62.133 62.133 0 0029.575 10.319l26.063-44.363c-9.745 11.811-27.22 13.486-39.032 3.74a27.717 27.717 0 01-8.657-12.613"></path><linearGradient id="chrome-original-d" gradientUnits="userSpaceOnUse" x1="-572.385" y1="-486.91" x2="-599.557" y2="-552.345" gradientTransform="translate(675 599.775)"><stop offset="0" stopColor="#E4B022"></stop><stop offset=".3" stopColor="#FCD209"></stop></linearGradient><path fill="url(#chrome-original-d)" d="M59.158 125.791c34.204 2.585 64.027-23.047 66.613-57.25a62.097 62.097 0 00-6.17-32.031H63.595c15.312.07 27.67 12.541 27.598 27.854a27.725 27.725 0 01-5.972 17.064"></path><linearGradient id="chrome-original-e" gradientUnits="userSpaceOnUse" x1="-649.391" y1="-528.885" x2="-649.391" y2="-573.247" gradientTransform="translate(675 599.775)"><stop offset="0" stopOpacity=".15"></stop><stop offset=".3" stopOpacity=".06"></stop><stop offset="1" stopOpacity=".03"></stop></linearGradient><path fill="url(#chrome-original-e)" d="M12.578 29.3l24.955 43.253a27.725 27.725 0 011.107-18.854L13.686 27.636"></path><linearGradient id="chrome-original-f" gradientUnits="userSpaceOnUse" x1="-588.158" y1="-514.559" x2="-618.657" y2="-483.505" gradientTransform="translate(675 599.775)"><stop offset="0" stopOpacity=".15"></stop><stop offset=".3" stopOpacity=".06"></stop><stop offset="1" stopOpacity=".03"></stop></linearGradient><path fill="url(#chrome-original-f)" d="M59.158 125.791l26.063-44.363a27.731 27.731 0 01-16.082 9.426l-11.091 34.937"></path><linearGradient id="chrome-original-g" gradientUnits="userSpaceOnUse" x1="-588.6" y1="-505.621" x2="-584.163" y2="-549.431" gradientTransform="translate(675 599.775)"><stop offset="0" stopOpacity=".15"></stop><stop offset=".3" stopOpacity=".06"></stop><stop offset="1" stopOpacity=".03"></stop></linearGradient><path fill="url(#chrome-original-g)" d="M119.602 36.508H63.595a27.727 27.727 0 0121.626 10.537l35.491-8.873"></path>
                    </svg>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={github} title="github" >
                    <svg viewBox="0 0 128 128" width="50" height="50">
                        <g fill="#181616"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                    </svg>
                </a>
            </div>

            <p className="w3-justify">
                {details}
            </p>


        </div>
    )
}