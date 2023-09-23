import {component$} from "@builder.io/qwik";

interface HeartProps {
    width? : string;
    height? : string;
}

export default component$<HeartProps>(({width = 38, height = 38}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 38 38" fill="none">
            <path
                d="M14.7422 10.5C11.9812 10.5 9.74219 12.7367 9.74219 15.4962C9.74219 17.7238 10.6172 23.0107 19.2302 28.3551C19.3845 28.4499 19.5616 28.5 19.7422 28.5C19.9228 28.5 20.0999 28.4499 20.2542 28.3551C28.8672 23.0107 29.7422 17.7238 29.7422 15.4962C29.7422 12.7367 27.5032 10.5 24.7422 10.5C21.9812 10.5 19.7422 13.528 19.7422 13.528C19.7422 13.528 17.5032 10.5 14.7422 10.5Z"
                stroke="#582467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
});
