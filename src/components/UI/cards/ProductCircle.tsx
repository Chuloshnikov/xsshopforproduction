import {component$} from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class={'flex flex-col items-center w-fit gap-1 xl:gap-2 xl:min-w-[100px]'}>
            <div class={'border-[1px] border-accent2 rounded-full w-[60px] h-[60px] xl:w-[100px] xl:h-[100px]  flex justify-center items-center'}>
                <img width={35} height={40} class={'object-cover xl:w-[58px] xl:h-[69px]'}
                     src="https://s3-alpha-sig.figma.com/img/5ab1/9b15/76248ad7255870ddbb494cbcdcb15a90?Expires=1694995200&Signature=ju~gWsJUKr8pHTPIOQFGBI3VNuqClr6AzGWIGcqUghqFdJ~BVrINed0EADy1m4of33ra-l-tVPMBu2Kk-Nw73FU41m-xFUkujwUpIsjNHySnSBVDfNdngptANyB5PuagSIOCi6a3l0-pMzbQOxfWX2aRnyxSOm5GCD10kxVnjk31IteAqCWJmRm7l3p06sDCckSttDXw0L~ZJNETk~iEMg43Qma09BnXY4nu8hNX14XMkWDsNmTvkNJ-c5Vyhn9LroBsi1z9v7NEDTDiizU2tM~UobwfLuhKF0FhvmN59B~JSHdrgEX2Ex5Hu~BcrisfvwWO~79W8gl-bjVC1f7d1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                     alt="Contraceptives"/>
            </div>
            <span class={'text-xs xl:text-base font-medium leading-[14.4px] xl:leading-[22.4px] text-main'}>Contraceptives</span>
        </div>
    );
});
