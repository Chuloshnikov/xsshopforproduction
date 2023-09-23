import {component$, useContext} from "@builder.io/qwik";
import RadioButton from "~/components/UI/input/radio/RadioButton";
import {FilterContext} from "../../../../routes/katalog/[category]";

export default component$(() => {
    const filters = useContext(FilterContext);
    return (
        <div class={'flex flex-col mr-5'}>
            <RadioButton name={'waterproof'} id={'waterproof-yes'}
                onInput$={() => filters.waterproof = true}
                defaultChecked={filters.waterproof === true}
            >
                Yes
            </RadioButton>
            <RadioButton name={'waterproof'} id={'waterproof-no'}
                onInput$={() => filters.waterproof = false}
                defaultChecked={filters.waterproof === false}
            >
                No
            </RadioButton>
        </div>
    );
});
