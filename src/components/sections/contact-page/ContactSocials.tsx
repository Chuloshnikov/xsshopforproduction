import {component$} from "@builder.io/qwik";
import {IconInstagram} from "~/components/UI/icons/IconInstagram";
import {IconTwitter} from "~/components/UI/icons/IconTwitter";
import {IconTikTok} from "~/components/UI/icons/IconTikTok";
import {IconYouTube} from "~/components/UI/icons/IconYouTube";
import {IconLinkedIn} from "~/components/UI/icons/IconLinkedIn";

const social = [
    { label: "Instagram", icon: IconInstagram, href: "" },
    { label: "Twitter", icon: IconTwitter, href: "" },
    { label: "TikTok", icon: IconTikTok, href: "" },
    { label: "YouTube", icon: IconYouTube, href: "" },
    { label: "Facebook", icon: IconLinkedIn, href: "" },
];

export default component$<{mode: "light" | "dark"}>(({mode}) => {
    return (
        <div class={'flex gap-3 items-center text-white '}>
            {social.map(({icon: Icon}, i) =>
                <span key={i} class={`w-10 h-10 border-[1px] ${mode === "light" ? "border-bg" : "border-main"} rounded-full flex justify-center items-center`}>
                   <Icon class={`${mode === "light" ? "fill-white" : "fill-main"}`}/>
                </span>
            )}
        </div>
    );
});
