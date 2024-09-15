import { ReactTyped } from "react-typed";

const TextTest = () => {
    return (
        <div>
            <ReactTyped
            className="text-4xl bg-slate-500"
                backSpeed={50}
                onBegin={function noRefCheck() { }}
                onComplete={function noRefCheck() { }}
                onDestroy={function noRefCheck() { }}
                onLastStringBackspaced={function noRefCheck() { }}
                onReset={function noRefCheck() { }}
                onStart={function noRefCheck() { }}
                onStop={function noRefCheck() { }}
                onStringTyped={function noRefCheck() { }}
                onTypingPaused={function noRefCheck() { }}
                onTypingResumed={function noRefCheck() { }}
                strings={[
                        'HI I AM A JONIOR DEVELOPER',
                        'My NAME IS MASUM'
                ]}
                typeSpeed={50}
                typedRef={function noRefCheck() { }}
            />
        </div>
    );
};

export default TextTest;